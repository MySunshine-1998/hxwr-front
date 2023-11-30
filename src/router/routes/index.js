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
export const PAGE_NOT_FOUND_ROUTE = {
  path: '/:path(.*)*',
  name: 'PageNotFound',
  component: EXCEPTION_COMPONENT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true
  }
}

export const basicRoutes = [RootRoute, ...asyncRoutes, PAGE_NOT_FOUND_ROUTE]
