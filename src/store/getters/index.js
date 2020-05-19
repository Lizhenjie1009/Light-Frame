const getters = {
  roles(state, getters) {
    return state.user.roles
  },
  routes (state, getters) {
    return state.permission.routes
  },
  addRoutes (state) {
    return state.permission.addRoutes
  },
  tags (state, getters) {
    return state.tagsbar.tags
  }
}

export default getters
