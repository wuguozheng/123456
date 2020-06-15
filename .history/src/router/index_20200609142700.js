import Vue from 'vue'
import VueRouter from 'vue-router'
import Topone from '../views/topone/Topone'

Vue.use(VueRouter)

  const routes = [
 
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Topone',
    component: Topone,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
