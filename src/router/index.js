import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tHome from '../tests/thome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thome',
    name: 'tHome',
    component: tHome
  }
]

const router = new VueRouter({
  routes
})

export default router
