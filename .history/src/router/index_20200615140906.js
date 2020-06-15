import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/first/First'


Vue.use(VueRouter)

  const routes = [
    {
      path:'/home',
      name:''
    },
  
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
      // 一进网页就加载
      {
        path: '',
        name: 'Home',
        component: Home
      },
       // 已发布
       {
        path: '/published',
        name: 'Published',
        component: () => import('../views/published/Published.vue')
      },
      // 发布文章
      {
        path: '/post',
        name: 'Post',
        component: () => import('../views/post/Post')
      },
      // 标签页
      {
        path: '/biaoqian',
        name: 'Biaoqian',
        component: () => import('../views/biaoqian/Biaoqian.vue')
      },
      // 导出excel
      {
        path: '/export',
        name: 'Export',
        component: () => import('../views/export/Export')
      },
      // 图片上传
      {
        path: '/upload',
        name: 'Upload',
        component: () => import('../views/upload/Upload')
      },
      // 分页表格
      {
        path: '/table',
        name: 'Table',
        component: () => import('../views/table/Table')
      },
      // 退出系统
      {
        path: '/signout',
        name: 'Signout',
        component: () => import('../views/signout/Signout')
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
