import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router'

import FinanceAPI from '../services/finance.js'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)


Vue.prototype.$finance_api = FinanceAPI

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
