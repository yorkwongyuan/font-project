import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    isLogin: false,
    userInfo: null
  },
  mutations: {
    setSid (state, sid) {
      state.sid = sid
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
  },
  modules: {}
})
