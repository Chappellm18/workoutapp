import { createApp } from 'vue'

import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma'

import '@oruga-ui/oruga-next/dist/oruga-full.css'


import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')