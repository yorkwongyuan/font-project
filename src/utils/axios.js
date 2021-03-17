import axios from 'axios'
import errorHandler from './errorHandler'
import config from '@/config/index'
const instance = axios.create({
  baseURL: (process.env.NODE_ENV === 'production') ? config.baseUrl.prod : config.baseUrl.dev,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 10000
})

// axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? config.baseUrl.prod : config.baseUrl.dev

instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  errorHandler(error)
  return Promise.reject(error)
})

// 响应请求拦截器
instance.interceptors.response.use((res) => {
  console.log('res is', res)
  if (res.status === 200) {
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res)
  }
}, (error) => {
  console.log(error, 'ror')
  errorHandler(error)
  return Promise.reject(error)
})

export default instance
