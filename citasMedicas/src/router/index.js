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
      path: '/paciente',
      name: 'paciente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Paciente.vue')
    },
    {
      path: '/medico',
      name: 'medico',
      component: () => import('../views/Medico.vue')
    },
    {
      path: '/citas',
      name: 'citas',
      component: () => import('../views/Citas.vue')
    },
    {
      path: '/reporte',
      name: 'reporte',
      component: () => import('../views/Reporte.vue')
    },
    {
      path: '/citapaciente',
      name: 'citapaciente',
      component: () => import('../views/CitaPaciente.vue')
    }
  ]
})

export default router
