import axios from 'axios'
import errorHandler from './errorHandler'

class HttpRequest {
  constructor (baseURL) {
    this.baseURL = baseURL
  }

  // 获取axios配置
  getInsideConfig () {
    const config = {
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  // 拦截器
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use((config) => {
      return config
    }, (error) => {
      errorHandler(error)
      return Promise.reject(error)
    })
    // 响应拦截器
    instance.interceptors.response.use((res) => {
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, (error) => {
      errorHandler(error)
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions) // 其实这里等同于instance.request()
  }

  // get请求的封装
  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url
    }, config)
    return this.request(options)
  }

  // post请求的封装
  post (url, data) {
    const options = Object.assign({
      method: 'post',
      url,
      data
    })
    return this.request(options)
  }
}

export default HttpRequest
