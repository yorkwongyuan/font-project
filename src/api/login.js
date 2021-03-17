import axios from '@/utils/request.js'

const getCode = async () => {
  return axios.get('/public/getCaptcha')
}
const login = async (params) => {
  return axios.post('/login/login', params)
}

const sendMail = async (params) => {
  return axios.post('/loginController', params)
}

export {
  getCode,
  sendMail,
  login
}
