import { h } from 'vue'
import SvgIcon from '../../../components/SvgIcon/index.vue'
export default {
    path: '/knowledgeBase',
    name: 'knowledgeBase',
    component: () => import('@/layouts/HeaderView.vue'),
    orderNo: 2,
    meta: {
        title: '知识库',
        // icon: h('img', { src: '/src/assets/image/menu/zbshujuguanli.png', class: 'menu-icon' })
    },
    children: [
        {
            path: 'index',
            name: 'index',
            component: () => import('../../../views/knowledgeBase/index.vue'),
            meta: {
                title: '知识库'
            }
        },

    ]
}
