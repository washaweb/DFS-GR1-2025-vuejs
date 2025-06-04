import './assets/main.css'
import '@vuepic/vue-datepicker/dist/main.css'

import { createApp } from 'vue'

import App from './App.vue'

// import des composants globaux
import BButton from './components/BButton.vue'
import VueDatePicker from '@vuepic/vue-datepicker'

// création de l'application
const app = createApp(App)

// définition des composants globaux
app.component('BButton', BButton)
app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
