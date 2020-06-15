import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/first/First'


Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // 公共路由
  {
    path: '/',
    name: 'First',
    component: First,
    children:[
      // 加载
      {
        path: '',
        name: 'Home',
        component: Home
      },
      // 首页
      {
        path: '/first',
        name: 'Firsttwo',
        component: () => import('../views/first/Firsttwo')
      },
      {
        path: '/first',
        name: 'Firstthree',
        component: () => import('../views/first/Firstthree')
      },
    ]
  },
  // 注册路由
  {
    path: '/topone',
    name: 'Topone',
    component: () => import('../views/topone/Topone')
  },
  // 登录路由
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
// 路由守卫
  router.beforeEach((to, Form, next) => {
   // to and from are both route objects. must call `next`.
   let username = localStorage.getItem('user')
   if(to.path==='/Login' || to.path==='/Topone'){
     next()
   }else{
     username ? next():next('/Login')
   }
 })

export default router
