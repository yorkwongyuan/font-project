import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import jwt from 'jsonwebtoken'
import moment from 'moment'
const Login = () => import(/* webpackChunkName: 'Login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'Reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'Forget' */ '../views/Forget.vue')
const Home = () => import(/* webpackChunkName: 'Home' */ '../views/Home.vue')
const Index = () => import(/* webpackChunkName: 'Index' */ '../views/channels/Index.vue')
const Template1 = () => import(/* webpackChunkName: 'Template1' */ '../views/channels/Template1.vue')
const Center = () => import(/* webpackChunkName: 'Center' */ '../views/Center.vue')
const userCenter = () => import(/* webpackChunkName: 'userCenter' */ '../components/user/Center.vue')
const userMsg = () => import(/* webpackChunkName: 'userMsg' */ '../components/user/Msg.vue')
const userOther = () => import(/* webpackChunkName: 'userOther' */ '../components/user/Others.vue')
const userPost = () => import(/* webpackChunkName: 'userPost' */ '../components/user/Posts.vue')
const userSetting = () => import(/* webpackChunkName: 'userSetting' */ '../components/user/Settings.vue')
const user = () => import(/* webpackChunkName: 'user' */ '../views/User.vue')
Vue.use(VueRouter)
const MyInfo = () => import(/* webpackChunkName: 'MyInfo' */ '../components/user/common/MyInfo.vue')
const Account = () => import(/* webpackChunkName: 'Account' */ '../components/user/common/Account.vue')
const Password = () => import(/* webpackChunkName: 'Password' */ '../components/user/common/Password.vue')
const PicUpload = () => import(/* webpackChunkName: 'PicUpload' */ '../components/user/common/PicUpload.vue')
const MyPost = () => import(/* webpackChunkName: 'MyPost' */ '../components/user/common/MyPost.vue')
const MyCollection = () => import(/* webpackChunkName: 'MyCollection' */ '../components/user/common/MyCollection.vue')
const NoFound = () => import(/* webpackChunkName: 'NoFound' */ '../views/NoFound.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Index',
        component: Index
      },
      {
        path: '/index/:catalog',
        name: 'catalog',
        component: Template1
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'NoFound',
    component: NoFound
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Reg,
    beforeEnter: (to, from, next) => {
      if (from.path === '/login') {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  },
  {
    path: '/user/',
    name: 'user',
    component: user
  },
  {
    path: '/center',
    meta: { isRequireAuth: true },
    component: Center,
    linkActiveClass: 'layui-this',
    children: [
      {
        path: '',
        name: 'userCenter',
        component: userCenter
      },
      {
        path: 'user-msg',
        name: 'userMsg',
        component: userMsg
      },
      {
        path: 'user-other',
        name: 'userOther',
        component: userOther
      },
      {
        path: 'user-post',
        component: userPost,
        children: [{
          path: '',
          name: 'MyPost',
          component: MyPost
        }, {
          path: 'my-collection',
          name: 'MyCollection',
          component: MyCollection
        }]
      },
      {
        path: 'user-setting',
        component: userSetting,
        children: [{
          path: '',
          name: 'info',
          component: MyInfo
        },
        {
          path: 'account',
          name: 'account',
          component: Account
        },
        {
          path: 'password',
          name: 'password',
          component: Password
        },
        {
          path: 'pic-upload',
          name: 'picUpload',
          component: PicUpload
        }]
      }
    ]
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'layui-this',
  routes
})
router.beforeEach((to, from, next) => {
  // 先把登录状态确认清楚
  const token = localStorage.getItem('token')
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (token !== '' && token !== null) {
    const res = jwt.decode(token)
    // token是否没过期
    const isTokenAvailable = moment().isBefore(moment(res.exp * 1000))
    console.log('isTokenAvailable', isTokenAvailable)
    if (isTokenAvailable) {
      store.commit('setToken', token)
      store.commit('setUserInfo', userInfo)
      store.commit('setIsLogin', true)
    } else {
      localStorage.clear()
    }
  }
  /**
   * 检查进入的页面是否需要鉴权, 注意, /login不在鉴权范围内,
   * 因而不会出现反复进入/login的死循环
   */
  if (to.matched.some(record => record.meta.isRequireAuth)) {
    if (store.state.isLogin) {
      next()
    } else {
      next('/login')
    }
  } else {
    // 不需要校验的公共页面
    next()
  }
})
export default router
