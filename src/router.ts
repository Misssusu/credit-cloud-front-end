import { createRouter, createWebHistory } from 'vue-router'
import Login from '@system/views/login/Login.vue'
import portalRoutes from '@portal/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: Login,
    },
    ...portalRoutes,
  ],
})

export default router
