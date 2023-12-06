/*
 * @Author: sunyue
 * @Date: 2023-12-05 14:07:39
 * @LastEditors: sunyue
 * @LastEditTime: 2023-12-06 10:08:06
 * @Description: 描述
 * Copyright (c) 2023 by 中国科学院软件研究所, All Rights Reserved. 
 */
import { defHttp } from '@/utils/axios'

export function getPollutantCoordinates({ coordinate, radius }) {
    return defHttp.post({
        url: '/createPointsByCenter',
        params: {
            coordinate,
            radius
        }
    })
}