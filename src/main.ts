import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import vuesax from 'vuesax-alpha'
import 'vuesax-alpha/theme-chalk/index.css'
// dark mode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'
import 'boxicons/css/boxicons.min.css';

const app = createApp(App)

app.use(router)
app.use(vuesax)

app.mount('#app')