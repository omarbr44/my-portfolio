import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    } ,
    {
      path: '/siteprojects/:id',
      name: 'siteprojects',
      component: () => import('../views/siteProjects.vue')
    } ,
    
  ] 
})

export default router
