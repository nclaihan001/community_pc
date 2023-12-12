import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/HomeView.vue')
    }
    ,{
       path: '/home/post',
       name: 'home_post',
       component: () => import('../views/PostHomeView.vue')
     },{
      path: '/home/detail/:id',
      name: 'home_detail',
      component: () => import('../views/HomeDetailView.vue')
    },{
      path: '/square/:type/:page',
      name: 'square',
      component: () => import('../views/SquareView.vue')
    }
  ]
})

export default router
