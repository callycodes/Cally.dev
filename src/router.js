import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Boggle from './pages/projects/Boggle.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/boggle',
    name: 'Boggle',
    component: Boggle
  },

  ]
  /* ,
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue')
  } */
})

export default router