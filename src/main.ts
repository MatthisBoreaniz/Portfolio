import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import V3ScrollLock from 'v3-scroll-lock'

const app = createApp(App)

app.use(
  createRouter({
      history: createWebHistory(),

  routes,

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,

        behavior: 'smooth',

        top: -80 // Ajustement pour compenser la barre de défilement
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
)

app.use(V3ScrollLock, {})

app.mount('#app')


