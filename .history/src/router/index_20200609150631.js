import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/first',
    name: 'First',
    component: () => import('../views/first/First')
  },
  {
    path: '/topone',
    name: 'Topone',
    component: () => import('../views/topone/Topone')
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
