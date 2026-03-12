import { createRouter, createWebHistory } from 'vue-router'
import CookieClicker from '@/views/CookieClicker.vue'
import UserCreate from '@/views/UserCreate.vue'
import ViewLists from '@/views/ViewLists.vue'
import PokemonData from '@/views/PokemonData.vue'
import PokemonInfo from '@/components/PokemonInfo.vue'

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
    }, {
      path: '/pokemon-data',
      name: 'pokemon-data',
      component: PokemonData,
    }, {
      path: '/pkmn/:id',
      name: 'pokemon-info',
      component: PokemonInfo
    }
  ],
})

export default router