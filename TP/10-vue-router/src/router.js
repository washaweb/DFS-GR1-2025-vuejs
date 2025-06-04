import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes = [
  { name: 'home', path: '/', component: HomeView },
  { name: 'about', path: '/about', component: () => import('@/views/AboutView.vue') },
  { name: 'games', path: '/games', component: () => import('@/views/GameView.vue') },
  {
    name: 'game',
    path: '/games/:id',
    component: () => import('@/views/GameDetailView.vue'),
    props: true, // permet de passer :id via une props du composant GameDetailView
    meta: {
      title: 'Game Detail',
      description: 'Game Detail Page',
      requiresAuth: false,
    },
  },
  {
    name: 'error',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
