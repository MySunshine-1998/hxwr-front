import { asyncRoutes } from '../routes/index'
import { cloneDeep } from 'lodash-es'
import { isUrl } from '@/utils/is'
import { useMenuStoreWithOut } from '@/store/modules/menu'

const menuStore = useMenuStoreWithOut()

// 路径处理
function joinParentPath(menus, parentPath = '') {
  for (let index = 0; index < menus.length; index++) {
    const menu = menus[index]
    // 请注意，以 / 开头的嵌套路径将被视为根路径。
    // 这允许你利用组件嵌套，而无需使用嵌套 URL。
    if (!(menu.path.startsWith('/') || isUrl(menu.path))) {
      // 路径不以 / 开头，也不是 url，加入父路径
      menu.path = `${parentPath}/${menu.path}`
    }
    if (menu.children && menu.children.length) {
      joinParentPath(menu.children, menu.meta.hidePathForChildren ? parentPath : menu.path)
    }
  }
}

// 将路由转换成菜单
export function transformRouteToMenu(routeModList) {
  const routeList = cloneDeep(routeModList)
  // 提取树指定结构
  const list = treeMap(routeList, {
    conversion: (node) => {
      const { meta: { title, hideMenu = false } = {} } = node
      return {
        ...(node.meta || {}),
        meta: node.meta,
        label: title,
        hideMenu,
        key: node.name,
        name: node.name,
        path: node.path,
        ...(node.redirect ? { redirect: node.redirect } : {})
      }
    }
  })
  // 路径处理
  joinParentPath(list)
  return cloneDeep(list)
}
export function generateMenu(to) {
  const menuList = transformRouteToMenu(asyncRoutes)  
  menuStore.setMenuList(menuList)
}
export function treeMap(treeData, opt) {
  return treeData.map((item) => treeMapEach(item, opt))
}

/**
 * @description: Extract tree specified structure
 * @description: 提取树指定结构
 */
export function treeMapEach(data, { children = 'children', conversion }) {
  const haveChildren = Array.isArray(data[children]) && data[children].length > 0
  const conversionData = conversion(data) || {}
  if (haveChildren) {
    return {
      ...conversionData,
      [children]: data[children].map((i) =>
        treeMapEach(i, {
          children,
          conversion
        })
      )
    }
  } else {
    return {
      ...conversionData
    }
  }
}