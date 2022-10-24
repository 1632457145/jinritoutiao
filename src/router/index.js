import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/Mine',
    component: () => import('@/view/mine/Mine')
  },
  { // 我的作品
    path:'/my-article',
    component: () => import('@/view/user-articles')
  },
  { // 我的收藏
    path:'/my-article/collect',
    component: () => import('@/view/user-articles')
  },
  { // 我的历史
    path:'/my-article/history',
    component: () => import('@/view/user-articles')
  },
  { 
    path:'/user-chat',
    component: () => import('@/view/user-chat')
  },
]


const router = new VueRouter({
  routes
})

export default router