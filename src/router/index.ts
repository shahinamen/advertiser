import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdvertiseView from '../views/AdvertiseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Vue - Tailwind | Home' }
    },
    {
      path: '/advertise',
      name: 'advertise',
      component: AdvertiseView,
      meta: { title: 'Vue - Tailwind | Advertise' }
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: 'Vue - Tailwind | Login' },
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: { title: 'Vue - Tailwind | Register' },
      component: () => import('../views/RegisterView.vue'),
    },
  ],
})

export default router
