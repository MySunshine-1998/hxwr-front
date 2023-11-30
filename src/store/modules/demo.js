import { defineStore } from 'pinia'
import { store } from '@/store'

export const useStore = defineStore({
  id: 'demo',
  state: () => ({}),
  getters: {},
  actions: {}
})

// Need to be used outside the setup
export function useStoreWithOut() {
  return useStore(store)
}
