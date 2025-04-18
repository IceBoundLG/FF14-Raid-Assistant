import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EternalQueen from '../views/EternalQueen.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eternal-queen',
    name: 'EternalQueen',
    component: EternalQueen
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 