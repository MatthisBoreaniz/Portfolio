import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import V3ScrollLock from 'v3-scroll-lock'

const app = createApp(App)

app.use(createRouter({
    history: createWebHistory(),
    routes
})
)

app.use(V3ScrollLock, {})

app.mount('#app')
