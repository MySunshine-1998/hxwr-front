import { defineStore } from 'pinia'
import { store } from '@/store'
import { cloneDeep } from 'lodash-es'
export const useMenuStore = defineStore({
  id: 'menu',
  state: () => ({
    menuList: [],
    currentHeaderMenu: '',
    headerMenuList: [],
    currentSideMenu: '',
    currentSideOpenKey: ''
  }),
  getters: {
    getMenuList() {
      return this.menuList
    },
    getCurHeaderMenu() {
      return this.currentHeaderMenu
    },
    getHeaderMenuList() {
      return this.headerMenuList
    },
    getCurSideMenu() {
      return this.currentSideMenu
    },
    getCurSideOpenKey() {
      return this.currentSideOpenKey
    },
    getSideMenuList() {
      const cur = this.menuList.find((menu) => menu.key === this.currentHeaderMenu)
      if (cur && cur.children.length) {
        return [cur]
      }
      return []
    }
  },
  actions: {
    setMenuList(menuList) {
      this.menuList = menuList
      this.headerMenuList = cloneDeep(menuList).map((menu) => {
        menu.children = []
        return menu
      })
      // this.currentHeaderMenu = this.headerMenuList[0].key
    },
    setCurSideOpenKey(currentSideOpenKey) {
      this.currentSideOpenKey = currentSideOpenKey
    },
    setCurHeaderMenu(currentHeaderMenu) {
      this.currentHeaderMenu = currentHeaderMenu
    },
    setCurSideMenu(currentSideMenu) { 
      this.currentSideMenu = currentSideMenu
    }
  }
})

// Need to be used outside the setup
export function useMenuStoreWithOut() {
  return useMenuStore(store)
}
