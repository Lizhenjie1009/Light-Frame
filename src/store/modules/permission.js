
import { constRoutes, asyncRoutes } from '@/router'

const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES (state, routes) {
      state.routes = constRoutes.concat(routes)
      state.addRoutes = routes
    }
  },
  actions: {
    setRoutes ({ commit }, roles) {
      return new Promise((resolve, reject) => {
        // 过滤用户权限
        let accessedRoutes
        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes
        } else {
          // 移除非权限子组件
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        commit('SET_ROUTES', accessedRoutes)
        // router.addRoutes(accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
}

// 移除非权限子组件
function filterAsyncRoutes(routes, roles) {
  return routes.filter(route => {
    if (route.meta && route.meta.role) {
      if (roles.includes(route.meta.role)) {
        if (route.children) {
          route.children = filterAsyncRoutes(route.children, roles)
        }
        return route
      }
    } else {
      return route
    }
  })
}

export default {
  namespaced: true,
  ...permission
}
