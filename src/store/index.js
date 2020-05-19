import Vue from 'vue'
import Vuex from 'vuex'

import getters from '@/store/getters'

import user from '@/store/modules/user'
import permission from '@/store/modules/permission'
import tagsbar from '@/store/modules/tagsbar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {
    ...getters
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user,
    permission,
    tagsbar
  }
})
