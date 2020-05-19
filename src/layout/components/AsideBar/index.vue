<template>
  <div class="aside-bar">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#3EC0E6"
      background-color="#003552"
      active-text-color="#69fdfa"
      router
    >
      <!-- :collapse="isCollapse" -->
      <template
        v-for='(routes, index) in $store.state.permission.routes'
      >
        <el-submenu
          :key='index'
          :index="routes.path"
          v-if="routes.hidden !== true && routes.name !== 'home'"
        >
          <span slot="title">
            <template v-if="routes.meta">
              {{routes.meta.title}}
            </template>
          </span>

          <template v-for="(child) in routes.children">
            <el-menu-item
              :key='child.path'
              v-if="child.meta"
              :index="routes.path + '/' + child.path">
                {{child.meta.title}}
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item
          :key='routes.path'
          :index="routes.path"
          v-if="routes.name === 'home'"
        >
          <span slot="title">
            <template v-if="routes.meta">
              {{routes.meta.title}}
            </template>
          </span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
