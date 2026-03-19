import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SquirrelData from '@/views/SquirrelData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/info/:id',
      name: 'SquirrelData',
      component: SquirrelData,
    },
  ],
})

export default router
