import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
// imports des données seeds
import { platforms, games } from '@/seeds/datas'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/platform/:platformId',
      name: 'platform',
      component: () => import('@/views/PlatformView.vue'),
      props: true,
      // Guard de validation
      beforeEnter: (to) => {
        // teste les arguments de la route et vérifie si la plateforme existe
        if (!platforms.filter((platform) => platform.id === to.params.platformId)) {
          return { name: 'NotFound' }
        }
        return true
      },
      children: [
        {
          path: '',
          name: 'games',
          component: () => import('@/views/GamesListView.vue'),
        },
        {
          path: 'game/:gameId',
          name: 'game',
          component: () => import('@/views/GameDetailView.vue'),
          beforeEnter: (to) => {
            // teste les arguments de la route et vérifie si le jeu existe
            const { platformId, gameId } = to.params
            if (!games[platformId]?.filter((game) => game.id === gameId)) {
              return { name: 'NotFound' }
            }
            return true
          },
        },
        {
          path: 'stats',
          name: 'stats',
          component: () => import('@/views/PlatformStatsView.vue'),
        },
      ],
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFoundView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})

export default router
