import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
// vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? 'http://www.mydomain.com' : 'http://localhost:3000'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
