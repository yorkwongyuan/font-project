import axios from 'axios'

const getCode = async () => {
  let result
  try {
    result = await axios.get('/public/getCaptcha')
    if (result.status === 200) {
      return result.data
    }
  } catch (e) {
    console.log(e)
  }
  return result
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
