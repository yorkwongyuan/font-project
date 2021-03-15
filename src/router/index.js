import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName: 'Login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'Reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'Forget' */ '../views/Forget.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  }
]

const router = new VueRouter({
  routes
})

export default router
