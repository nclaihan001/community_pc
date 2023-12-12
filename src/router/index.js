import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }
    ,{
       path: '/home/post',
       name: 'post_home',
       component: () => import('../views/PostHomeView.vue')
     },{
      path: '/home/detail/:id',
      name: 'post_home',
      component: () => import('../views/HomeDetailView.vue')
    }
  ]
})

export default router
