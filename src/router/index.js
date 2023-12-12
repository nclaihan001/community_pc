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
       path: '/post_home',
       name: 'post_home',
       component: () => import('../views/PostHomeView.vue')
     }
  ]
})

export default router
