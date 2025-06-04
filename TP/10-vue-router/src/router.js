import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// ici on décrit les routes de l'application
const routes = [
  // une route contient généralement un nom, un chemin et un composant
  { name: 'home', path: '/', component: HomeView },
  // on peut aussi utiliser une fonction asynchrone pour charger le composant
  { name: 'about', path: '/about', component: () => import('@/views/AboutView.vue') },
  { name: 'games', path: '/games', component: () => import('@/views/GameView.vue') },
  // on peut ajouter des paramètres dans les routes, ainsi que des metas-données
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
  // généralement on met la route 404 en dernier pour qu'elle fasse ramasse miettes...
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

// ...
// ici on écrit un navigation gard pour gérer les routes avant que la navigation ne soit effectuée
router.beforeEach((to, from, next) => {
  // console.log('onBefore Router', to, from)
  // si la route est une route de détail du jeu et que l'id est bien un nombre entier positif, je permet le passage
  if (to.name === 'game' && parseInt(to.params?.id) > 0) {
    console.log('OK')
    next()
    // sinon, je redirige vers la route /games (au passage il faut vérifier que nous ne sommes pas sur la route /games)
  } else {
    console.log('KO')
    if (to.path !== '/games') {
      next('/games')
    } else {
      // Si je suis déjà sur la route /games, je laisse passer
      next()
    }
  }
})

export default router
