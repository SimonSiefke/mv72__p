import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Accounting from 'accounting-js'
import { store } from './store/store'
import { routes } from './routes'
import { setTimeout } from 'timers';

Vue.use(VueRouter)

Vue.filter('currency', val => {
  return Accounting.formatMoney(val)
})

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

// Vue.component('global-component', ()=>  import('./components/Menu.vue')
// )


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

