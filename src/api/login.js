import axios from '@/utils/axios.js'

const getCode = async () => {
  return axios.get('/public/getCaptcha123')
}
const login = async (params) => {
  let result
  try {
    result = await axios.post('/login/login', params)
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
}

const sendMail = async (params) => {
  let result
  try {
    result = await axios.post('/loginController', params)
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
}

export {
  getCode,
  sendMail,
  login
}
