<template>
    <div class="container">
        <div class="container__nav">
            <h3 class="container__nav-heading">Twoje finanse</h3>
            <p class="container__nav-description">Wpisz kwotę Twoich zarobków dzięki czemu będziesz w stanie kontrolować
                swoje wydatki i saldo konta.</p>
        </div>

        <div class="container__summary">
            <button class="container__summary-paycheck">Przychody: {{ paycheck }} zł</button>
            <button class="container__summary-expenses">Wydatki: {{ isAnyExpenses ? 0 : expenses }} zł</button>
        </div>
        <div class="container__input">
            <form @submit.prevent="submitForm" class="container__input-form">
                <input type="text" class="container__input-addField" id="expensesName" v-model="insertedExpensesName"
                    placeholder="Nazwa wydatku">
                <input type="number" class="container__input-addField" id="expensesPrice" v-model="insertedValue"
                    placeholder="Kwota" />
                <div>
                    <p class="error"> {{ isFormError ? errorText : '' }}</p>
                </div>
                <div class="container__input__buttons">
                    <button class="container__input__buttons-addButton" type="submit">Dodaj</button>
                    <RouterLink to="/"><button class="container__input__buttons-return">Powrót</button></RouterLink>
                </div>
            </form>

        </div>
        <div class="container__shopingList">
            <ul class="container__shopingList-box">
                <li v-for="(item, index) in items" :key="index" class="container__shopingList-box-item">
                    <div class="items">
                        <div class="items__text"> {{ item.name }} - {{ item.sum }} zł</div>
                        <div class="items__icon" v-on:click="handleDelete(index)">
                            <img src="../components/icons/trash.png" alt="trash icon">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">

interface UserInputProps {
    name: string;
    sum: number | null;
}

export default {
    name: 'financeManager',

    data() {
        return {
            items: [] as UserInputProps[],
            expensesSummary: [],
            paycheck: 2000,
            expenses: [],
            insertedValue: null,
            insertedExpensesName: "" as string,
            isFormError: false as boolean,
            isAnyExpenses: false as boolean,
            errorText: 'Wprowadź poprawnie dane.' as string
        }
    },
    mounted() {
        const savedFinanceItem = localStorage.getItem('financeItems');
        if (savedFinanceItem) {
            this.items = JSON.parse(savedFinanceItem)
        }
        const sumFromStorage = localStorage.getItem('financeItems');

        if (sumFromStorage) {
            const sumArray = JSON.parse(sumFromStorage);
            const count = sumArray.reduce((total: any, obj: any) => total + obj.sum, 0);
            this.expenses = count
        }
    },

    methods: {
        submitForm() {
            if (this.insertedValue === null && this.insertedExpensesName === '') {
                return this.isFormError = true;

            } else {
                const userInput = {
                    name: this.insertedExpensesName,
                    sum: this.insertedValue,
                }

                this.isFormError = false;
                this.items.push(userInput);
                if (this.insertedValue !== null) {
                    this.expensesSummary.push(this.insertedValue);
                    this.savedFinanceItem()
                }

                this.insertedValue = null;
                this.insertedExpensesName = '';
            }
        },
        handleDelete(itemId: number) {
            this.items.splice(itemId, 1)
            this.savedFinanceItem();
        },

        // let sum = 0;
        // this.expensesSummary.forEach(num => sum += num)
        // return sum;

        savedFinanceItem() {
            localStorage.setItem('financeItems', JSON.stringify(this.items));
        }

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

    &__summary {
        margin: 20px 0 20px 0;
        display: flex;
        gap: 10px;

        &-paycheck {
            font-weight: bold;
            width: 140px;
            line-height: 13px;
            padding: 9px;
            border: 0;
            border-radius: 8px;
            background: $color-green;
            color: $color-white;
            cursor: pointer;
        }

        &-expenses {
            font-weight: bold;
            width: 140px;
            line-height: 13px;
            padding: 9px;
            border: 0;
            border-radius: 8px;
            background: $color-red;
            color: $color-white;
            cursor: pointer;
        }
    }

    &__input {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        &-form {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
        }

        &-addField {
            width: 250px;
            padding: 5px;
            border: 1px solid $color-black;
            border-radius: 5px;
        }

        &__buttons {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 15px;

            &-addButton {
                font-weight: bold;
                width: 80px;
                line-height: 15px;
                padding: 8px;
                border: 0;
                border-radius: 8px;
                background: $color-green;
                color: $color-white;
                cursor: pointer;
            }

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

        .error {
            padding: 5px;
            font-size: 14px;
            color: red;
        }
    }

    &__shopingList {
        width: 280px;
        text-align: left;

        &-box-item {
            display: flex;
            padding: 5px;


            .items {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px;
                border-radius: 5px;
                background: $color-light-blue-items;

                .items__icon {
                    display: flex;
                    align-items: center;

                }
            }



        }
    }

}
</style>