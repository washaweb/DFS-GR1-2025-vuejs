import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'

// import des composants globaux
import BButton from './components/BButton.vue'

// création de l'application
const app = createApp(App)

// définition des composants globaux
app.component('BButton', BButton)

app.mount('#app')
