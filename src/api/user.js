import axios from '@/utils/request.js'

// 签到接口
const userSign = async () => axios.get('/user/fav')
// 更新用户信息接口
const updateUserInfo = async (data) => axios.post('/user/basic', data)

export {
  userSign,
  updateUserInfo
}
