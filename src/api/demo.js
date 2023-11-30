import { defHttp } from '@/utils/axios'

/**
 * @description: 登录前置
 */
export function preLogin() {
  return defHttp.get({
    url: '/prelogin'
  })
}

/**
 * @description: 登录
 */
export function loginApi(params) {
  return defHttp.post({
    url: '/login',
    params
  })
}

/**
 * @description: 登出
 */
export function doLogout() {
  return defHttp.get({ url: 'logout' })
}
