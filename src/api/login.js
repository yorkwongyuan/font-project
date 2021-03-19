import axios from '@/utils/request.js'

const getCode = async (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid
    }
  })
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
