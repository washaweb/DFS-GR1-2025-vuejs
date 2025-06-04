import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import du fichier router.js
import router from './router'

// déclaration une constante pour l'application
const app = createApp(App)
// utilisation du router
app.use(router)
// montage de l'application
app.mount('#app')
