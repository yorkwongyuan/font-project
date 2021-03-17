import HttpRequest from './axios'
import config from '@/config/index'

const baseURL = process.env.NODE_ENV === 'prodcution' ? config.baseURL.prod : config.baseURL.dev
const axios = new HttpRequest(baseURL)

export default axios
