import './assets/main.css'
import BButton from '@/components/BButton.vue'

import { createApp } from 'vue'
import App from './App.vue'
// import du fichier router.js
import router from './router'

// déclaration une constante pour l'application
const app = createApp(App)
// utilisation du router
app.use(router)
app.component('BButton', BButton)
// montage de l'application
app.mount('#app')
