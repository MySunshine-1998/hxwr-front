import { generateMenu } from '../helper/index'
export function setupRouterGuard(router) {
  router.beforeEach(async (to, from, next) => {
    generateMenu(to)
    next()
  })
}
