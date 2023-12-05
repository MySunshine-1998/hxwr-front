import { h } from 'vue'
import SvgIcon from '../../../components/SvgIcon/index.vue'
export default {
  path: '/dataManagement',
  name: 'DataManagement',
  component: () => import('@/layouts/HeaderView.vue'),

  orderNo: 2,
  meta: {
    title: 'ZB数据管理',
    icon: h('img', { src: '/src/assets/image/menu/zbshujuguanli.png',   class: 'menu-icon' })
},
children: [
  {
    path: 'healthForce',
    name: 'HealthForce',
    component: () => import('../../../views/dataManagement/healthForce.vue'),
    meta: {
      title: '卫生力量数据'
    }
  },
  {
    path: 'medicalEquipment',
    name: 'medicalEquipment',
    component: () => import('../../../views/dataManagement/medicalEquipment.vue'),
    meta: {
      title: '卫生ZB数据'
    }
  },
  {
    path: 'biologyLab',
    name: 'biologyLab',
    component: () => import('../../../views/dataManagement/biologyLab.vue'),
    meta: {
      title: '生物实验室数据'
    }
  },
  {
    path: 'personnel',
    name: 'personnel',
    component: () => import('../../../views/dataManagement/personnel.vue'),
    meta: {
      title: '人员数据'
    }
  },
]
}
