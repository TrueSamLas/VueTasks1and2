import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/toggle',
      name: 'toggle',
      component: () => import('../views/1.vue')
    },
    {
      path:'/toggle2',
      name:'toggle2',
      component: () => import('../views/2.vue'),
    },
    {
      path:'/toggle3',
      name:'toggle3',
      component: () => import('../views/3.vue'),
    },
    {
      path:'/summ',
      name:'summ',
      component: () => import('../views/4.vue'),
    },
    {
      path:'/threeArgs',
      name:'threeArgs',
      component: () => import('../views/5.vue'),
    },
    {
      path: '/multipleNumber',
      name: 'multipleNumber',
      component: () => import('../views/6.vue'),
    },
    {
      path: '/hipotenuse',
      name: 'hipotenuse',
      component: () => import('../views/7.vue'),
    },
    {
      path: '/cycles',
      name: 'cycles',
      component: () => import('../views/8.vue'),
    },
    {
      path: '/cyclesANDmassives',
      name: 'cyclesANDmassives',
      component: () => import('../views/9.vue'),
    }
  ]
})

export default router
