import router, { resetRouter } from '@/router'
import { getStorage } from '@/utils/auth.js'
import store from '@/store'

router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  if (getStorage('token')) {
    if (store.getters.routes.length > 0) {
      next()
    } else {
      // 重置路由
      resetRouter()
      // 权限转数组
      let roles = getStorage('roles').split(',');
      // 获取权限路由
      let accessedRoutes = await store.dispatch('permission/setRoutes', roles || store.getters.roles)
      // 合并异步路由
      router.addRoutes(accessedRoutes)
      // hack方法--使页面可以正常跳转
      next({ ...to, replace: true })
    }
  } else {
    next('/login')
  }
})
