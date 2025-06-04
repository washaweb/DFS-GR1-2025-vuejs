import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

// ici on décrit les routes de l'application
const routes = [
  // une route contient généralement un nom, un chemin et un composant
  { name: 'home', path: '/', component: HomeView },
  // on peut aussi utiliser une fonction asynchrone pour charger le composant
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/AboutView.vue'),
    children: [
      {
        name: 'mentions',
        path: 'mentions',
        component: () => import('@/views/About/MentionView.vue'),
      },
      {
        name: 'author',
        path: 'author',
        component: () => import('@/views/About/AuthorView.vue'),
      },
      {
        path: '',
        redirect: { name: 'mentions' },
      },
    ],
  },
  {
    name: 'games',
    path: '/games',
    component: () => import('@/views/GameView.vue'),
  },
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
  if (to.name === 'game' && parseInt(to.params?.id) > 0) {
    console.log('OK')
  } else {
    console.log('KO')
  }
  next()
})

export default router
