import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views//Dashboard/DashView')
  },
  {
    path: '/Patient',
    name: 'Patient',
    component: () => import('@/views/Patient/PatientView.vue')
  },
  {
    path: '/Case',
    name: 'Case',
    component: () => import('@/views/Case/CaseView.vue')
  },
  {
    path: '/Systemlog',
    name: 'Systemlog',
    component: () => import('@/views/System/SystemView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
