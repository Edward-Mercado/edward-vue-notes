import { createRouter, createWebHistory } from 'vue-router'
import CookieClicker from '@/views/CookieClicker.vue'
import UserCreate from '@/views/UserCreate.vue'
import ViewLists from '@/views/ViewLists.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CookieClicker,
    }, {
      path: '/user-create',
      name: 'user-create',
      component: UserCreate,
    }, {
      path: '/view-lists',
      name: 'view-lists',
      component: ViewLists,
    }
  ],
})

export default router