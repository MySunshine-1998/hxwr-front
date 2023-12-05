// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.globEager('./modules/**/*.js')
const routeModuleList = []

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

export const asyncRoutes = [...routeModuleList]

// 根路由
export const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: '/home/index',
  meta: {
    title: 'Root'
  }
}

export const EXCEPTION_COMPONENT = () => import('@/views/exception/Exception.vue')

// 404 on a page
// 导出一个常量PAGE_NOT_FOUND_ROUTE，它是一个路由对象
export const PAGE_NOT_FOUND_ROUTE = {
  // 路由路径
  path: '/:path(.*)*',
  // 路由名称
  name: 'PageNotFound',
  // 路由组件
  component: EXCEPTION_COMPONENT,
  // 路由元数据
  meta: {
    // 页面标题
    title: 'ErrorPage',
    // 是否隐藏面包屑
    hideBreadcrumb: true,
    // 是否隐藏菜单
    hideMenu: true
  }
}

export const basicRoutes = [RootRoute, ...asyncRoutes, PAGE_NOT_FOUND_ROUTE] 