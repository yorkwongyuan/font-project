import HttpRequest from './axios'
import config from '@/config/index'
console.log(process.env.NODE_ENV, 'env')
const baseURL = process.env.NODE_ENV === 'production' ? config.baseURL.prod : config.baseURL.dev
const axios = new HttpRequest(baseURL)

export default axios
