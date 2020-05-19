import { getStorage, setStorage } from '@/utils/auth'

const user = {
  state: {
    roles: []
  },
  mutations: {
    SET_ROLES(state, role) {
      setStorage('roles', role)
      state.roles = role
    }
  },
  actions: {
    setRoles({ commit }, role) {
      commit('SET_ROLES', role)
    }
  }
}

export default {
  namespaced: true,
  ...user
}