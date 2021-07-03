import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Boggle from './pages/projects/Boggle.vue'
import Blog from './pages/Blog.vue'
import Projects from './pages/Projects.vue'
import store from './store/store.js'

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
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
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

router.beforeEach((to, from, next) => {

  if (from.name) {
    store.dispatch('setRouting', true);
    setTimeout(() => {
      store.dispatch('setRouting', false);
    }, 2500);

    setTimeout(() => {
      next();
    }, 1000);
  } else {
    next();
  }

  
  
});

// eslint-disable-next-line no-unused-vars
/*router.afterEach((to, from) => {
  store.dispatch('setRouting', false);
});*/

/* Vue Router is not meant to handle absolute urls. */
/* So whenever we want to deal with those, we can use this.$router.absUrl(url) */
router.absUrl = function(url, newTab = true) {
  const link = document.createElement('a')
  link.href = url
  link.target = newTab ? '_blank' : ''
  if (newTab) link.rel = 'noopener noreferrer' // IMPORTANT to add this
  link.click()
}

export default router