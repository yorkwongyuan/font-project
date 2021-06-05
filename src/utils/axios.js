import axios from 'axios'
import errorHandler from './errorHandler'
import store from '@/store'
import publicConfig from '@/config/index'
const CancelToken = axios.CancelToken
class HttpRequest {
  constructor (baseURL) {
    this.baseURL = baseURL
    this.pendding = {}
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

  // 移除请求
  removePendding (key, isRepeat = false) {
    if (this.pendding[key] && isRepeat) {
      // console.log('HttpRequest -> removePendding -> this.pendding[key] && isRepeat', this.pendding[key] && isRepeat)
      this.pendding[key]('取消重复请求')
    }
    delete this.pendding[key]
  }

  // 拦截器
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use((config) => {
      const publicPath = publicConfig.publicPath
      console.log('HttpRequest -> interceptors -> publicPath', publicPath)
      let isPublic = false
      // 如果isPublic一旦为true,则后续其他的都为true
      publicPath.forEach(path => {
        isPublic = isPublic || path.test(config.url)
      })
      // 带上token
      const token = `Bearer ${store.state.token}`
      if (!isPublic && token) {
        config.headers.Authorization = token
      }
      const key = config.url + '&' + config.method
      // console.log('HttpRequest -> interceptors -> key', key)
      this.removePendding(key, true)
      config.cancelToken = new CancelToken((c) => {
        this.pendding[key] = c
        // console.log('HttpRequest -> interceptors -> c', c)
      })
      return config
    }, (error) => {
      errorHandler(error)
      return Promise.reject(error)
    })
    // 响应拦截器
    instance.interceptors.response.use((res) => {
      const key = res.config.url + '&' + res.config.method
      this.removePendding(key)
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
