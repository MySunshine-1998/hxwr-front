import { axios } from 'axios'
/**
 * @description: 登录前置
 */
export function getMenuList() {
    return axios.get('/static/menu')
} 