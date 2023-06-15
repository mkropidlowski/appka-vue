<template>
    <ul class="navigation">
        <li v-for="link in navigationMock" :key="link.id" class="navigation__item">
            <RouterLink :to="link.linkHref" :id="link.id" class="navigation__button">
                <button class="navigation__button-label">{{ link.label }} </button>
            </RouterLink>
        </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

interface NavigationProps {
    id: string,
    label: string,
    linkHref: string,
}

export default defineComponent({
    data() {
        return {
            navigationMock: [] as NavigationProps[],
        }
    },
    mounted() {
        this.generateNavigationList()
    },
    methods: {
        generateNavigationList() {
            this.navigationMock = [
                { id: 'shopingList', label: 'Lista zakupów', linkHref: '/shoping-list' },
                { id: 'financeManager', label: 'Zarządzanie finansami', linkHref: '/finance-manager' },
                { id: 'notebook', label: 'Lista notatek', linkHref: '/notebook' }
            ]
        }
    }

})
</script>
<style lang="scss">
@import '../assets/breakpoints.scss';
@import '../assets/variables.scss';

.navigation {
    max-width: 320px;
    display: flex;
    flex-direction: column;

    &__item {
        width: 250px;
        padding-top: 10px;
        text-align: center;
    }

    &__button {
        &-label {
            font-weight: bold;
            width: 200px;
            line-height: 20px;
            padding: 8px;
            border: 0;
            border-radius: 8px;
            background: $color-green;
            color: $color-white;
            cursor: pointer;

            &:hover {
                background: $color-green-btn-border;

            }
        }
    }
}
</style>