import Vue from 'vue'
import App from './App.vue'

import router from './router'

import store from './store/store.js'

import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(LottieAnimation)

Vue.config.productionTip = false


import './assets/css/global.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
