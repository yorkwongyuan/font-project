import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Alert from '../src/components/modules/Alert'
// vuelidate
import '@/utils/veevalidate.js'
Vue.config.productionTip = false
Vue.use(Alert)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
