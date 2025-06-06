import { createRouter, createWebHistory } from 'vue-router'
import GamesView from '../views/GamesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'games',
      component: GamesView,
    },
    {
      path: '/game/:id',
      name: 'game',
      props: true,
      component: () => import('../views/GameDetailView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue'),
    },
  ],
})

export default router
