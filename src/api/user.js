import axios from '@/utils/request.js'
import store from '@/store'
const headers = {
  Authorization: `Bearer ${store.state.token}`,
  'Content-Type': 'application/json'
}
// 签到接口
const userSign = async () => {
  return axios.get('/user/fav', { headers })
}

export {
  userSign
}
