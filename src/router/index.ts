import ShopingList from '@/components/ShopingList.vue'
import NoteList from '@/components/NoteList.vue'
import FinanceManager from '@/components/FinanceManager.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NavigationViewVue from '@/views/NavigationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NavigationViewVue
    },
    {
      path: '/shoping-list',
      name: 'todo',
      component: ShopingList
    },
    {
      path: '/notebook',
      name: 'notebook',
      component: NoteList
    },
    {
      path: '/finance-manager',
      name: 'financeManager',
      component: FinanceManager
    }
  ]
})

export default router
