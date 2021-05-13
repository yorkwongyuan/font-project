import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    isLogin: false,
    userInfo: null,
    token: null
  },
  mutations: {
    setSid (state, sid) {
      state.sid = sid
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    setIsLogin (state, isLogin) {
      state.isLogin = isLogin
    },
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
  },
  modules: {}
})
