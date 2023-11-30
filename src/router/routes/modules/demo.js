export default {
  path: '/home',
  name: 'Home',
  component: () => import('@/layouts/index.vue'),
  orderNo: 1,
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
}
