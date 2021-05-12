import Vue from 'vue'
import VueRouter from 'vue-router'
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
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
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
    name: 'Center',
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
        name: 'userPost',
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
        name: 'userSetting',
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

export default router
