
import { defineStore } from 'pinia'
import { store } from '@/store' 

export const usePageFunStore = defineStore({
  id: 'pageFun',
  state: () => ({
    isPageClose: true,//信息管理页面的开关
    isPageknowledgeBaseClose: true,//信息管理页面的开关
  }),
  getters: {
    getPageClose() {
      return this.isPageClose
    },
    getPageknowledgeBaseClose() {
      return this.isPageknowledgeBaseClose
    }
  },
  actions: {
    setPageClose(val) { 
      this.isPageClose = val
    },
    setPageknowledgeBaseClose(val) { 
      this.isPageknowledgeBaseClose = val
    },
  }
}
)

// Need to be used outside the setup
export function usePageFunStoreWithOut() {
  return usePageFunStore(store)
}
