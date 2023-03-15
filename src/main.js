import { createApp } from 'vue'
import './utils/flexible'
import 'reset.css'
import './style.css'
import App from './App.vue'
import countTo from 'vue3-count-to'

createApp(App).use(countTo).mount('#app')
