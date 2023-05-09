import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/handschoenen',
      name: 'handschoenen',
      component: () => import('../views/HandSchoenen.vue')
    },
    {
      path: '/onderhoud',
      name: 'onderhoud',
      component: () => import('../views/Onderhoud.vue')
    }
  ]
})

export default router
