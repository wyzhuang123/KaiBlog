import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
      path: "",
      component: () => import('@/components/index.vue'),
      children:[
          {
            path: "",
            component: () => import('@/components/container/article/articleList.vue')
          },
          {
            path:"/article/:articleId",
            name:'article',
            component: () => import('@/components/container/article/articleContent.vue'),
            props: true
          },
          {
            path: "/about",
            component: () => import('@/components/header/component/about.vue')
          },
          {
            path:"/articles",
            component: () => import('@/components/container/articles/index.vue')
          },
          {
            path:"/comment",
            component: () => import('@/components/container/comment/index.vue')
          },
          {
            path:"/login",
            component: () => import('@/components/user/login.vue')
          },
          {
            path:'/edituser',
            component: () => import('@/components/user/edituser.vue')
          }
      ]
    },
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
