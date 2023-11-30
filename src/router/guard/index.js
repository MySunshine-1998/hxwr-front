export function setupRouterGuard(router) {
  router.beforeEach(async (to, from, next) => {
    next()
  })
}
