import qs from 'qs'
import axios from '@/utils/request.js'

/**
 * 读取文章列表接口
 * @param {Object} options 文章列表接口参数
 */
const getLists = async (options) => {
  return axios.get('/public/list?' + qs.stringify(options))
}

/**
 * 温馨提示接口
 * @param {Object} options 获取温馨提示的参数
 */
const getTips = async (options) => {
  return axios.get('/public/tips')
}

/**
 * 友情链接接口
 * @param {Object} options 获取友情链接和温馨提醒接口的参数
 */
const getLinks = async () => {
  return axios.get('/public/links')
}

/**
 * 本周热议接口
 * @param {Object} options 获取本周热议接口的参数
 */
const getTop = async () => {
  return axios.get('/public/topWeek')
}

export { getLists, getTips, getLinks, getTop }
