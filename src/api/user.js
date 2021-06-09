import axios from '@/utils/request.js'
import qs from 'qs'

// 签到接口
const userSign = async () => axios.get('/user/fav')

// 更新用户信息接口
const updateUserInfo = async (data) => axios.post('/user/basic', data)

// 更新用户名接口
const updateUserName = async (data) => axios.get(`/public/reset-email/?${qs.stringify(data)}`, data)

const changePwd = async (params) => {
  return axios.post('/user/change-password', { ...params })
}
export {
  userSign,
  updateUserInfo,
  updateUserName,
  changePwd

}
