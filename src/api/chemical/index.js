import { defHttp } from '@/utils/axios'
import { useGlobSetting } from '@/hooks'
let { chemicalUrl } = useGlobSetting()
/**
 * @description: 获取化学品的列表
 */
export function getChemical() {
    return defHttp({ requestOptions: { apiUrl: chemicalUrl } }).get({
        url: '/typeList'
    },{isTransformResponse:false})
}
