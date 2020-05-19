const tabsBar = {
  state: {
    tags: []
  },
  mutations: {
    ADD_TAG (state, tag) {
      state.tags.push(tag)
    },
    CLOSE_TAG (state, tag) {
      state.tags = state.tags.filter(item => item.path !== tag.path)
    }
  },
  actions: {
    addTags ({ commit, state }, tag) { // 添加标签
      return new Promise((resolve, reject) => {
        // 判断标签有没有添加，返回存在数组
        let isTag = state.tags.filter(tagItem => {
          return tagItem.path === tag.path
        })

        // 存在什么都不做，不存在添加route
        if (!isTag.length > 0) {
          commit('ADD_TAG', tag)
        }
        // (isTag.length > 0)
        //   ? ''
        //   : commit('ADD_TAG', tag)

        resolve(tag)
      })
    },
    closeTag ({ commit, state }, tag) { // 关闭标签
      return new Promise((resolve, reject) => {
        commit('CLOSE_TAG', tag)
        // 暴露修改后的tags数组
        resolve(state.tags)
      })
    }
  }
}

export default {
  namespaced: true,
  ...tabsBar
}
