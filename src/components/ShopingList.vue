<template>
    <div class="container">
        <div class="container__nav">
            <h3 class="container__nav-heading">Twoja lista zakupów</h3>
            <p class="container__nav-description">Dodaj, usuwaj lub wykreślaj ze swojej listy</p>
        </div>
        <div class="container__input">
            <form @submit.prevent="submitForm" class="container__input-form">
                <input type="text" class="container__input-addField" v-model="insertedValue">
                <button class="container__input-addButton" type="submit">+</button>
            </form>
        </div>
        <div class="container__shopingList">
            <ul class="container__shopingList-box">
                <li v-for="(item, index) in items" :key="index" class="container__shopingList-box-item"
                    :class="{ 'underlined': checkedItems.includes(index) }">
                    <div class="item__text">
                        <span>{{ item }}</span>
                        <input type="checkbox" v-model="checkedItems" :value="index">
                    </div>
                    <div class="item__icon">
                        <img src="../components/icons/trash.png" alt="trash icon">
                    </div>

                </li>
            </ul>
        </div>
        <div class="container__button">
            <RouterLink to="/"><button class="container__button-return">Powrót</button></RouterLink>
        </div>

    </div>
</template>
<script lang="ts">

interface ShopingListProps {
    items?: ShopingListProps[];

}

export default {
    name: 'shopingList',

    data() {
        return {
            items: [] as ShopingListProps[],
            insertedValue: "" as string | number,
            checkedItems: []
        }
    },
    methods: {
        submitForm() {
            this.items.push(this.insertedValue);
            this.insertedValue = '';
        },


    }

}

</script>
<style scoped lang="scss">
@import '../assets/variables.scss';

.container {
    position: relative;
    top: 30px;
    max-width: 320px;
    display: flex;
    justify-content: center;
    gap: 15px;

    &__nav {
        max-width: 300px;
        padding: 10px;
        background: $color-light-blue;
        border-radius: 8px;

        &-heading {
            font-weight: 500;
        }

        &-description {
            font-size: 13px;
        }
    }

    &__input {
        width: 100%;
        display: flex;
        justify-content: space-around;

        &-form {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        &-addField {
            width: 250px;
            padding: 5px;
            border: 1px solid $color-black;
            border-radius: 5px;
        }

        &-addButton {
            width: 25px;
            height: 25px;
            border: 0;
            background: $color-green;
            color: $color-white;
            font-size: 20px;
            cursor: pointer;
            border-radius: 50%;
        }
    }

    &__shopingList {
        width: 280px;
        text-align: left;

        &-box-item {
            display: flex;
            margin-top: 8px;
            padding: 5px;
            gap: 8px;

            .item__text {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .item__icon {
                display: flex;
                align-items: center;
            }
        }
    }

    &__button {
        &-return {
            font-weight: bold;
            width: 80px;
            line-height: 15px;
            padding: 8px;
            border: 0;
            border-radius: 8px;
            background: $color-orange;
            color: $color-white;
            cursor: pointer;
        }
    }

    .underlined {
        text-decoration: line-through;
        background-color: rgb(231, 231, 231);
        border-radius: 5px;
    }
}
</style>