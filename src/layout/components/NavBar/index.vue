<template>
  <div class="nav-bar">
    <el-menu
      router
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#3EC0E6"
      background-color="#003552"
      active-text-color="#69fdfa"
      @select="handleSelect">
      <template v-for='(routes, index) in $store.getters.routes'>
        <!-- 首页 -->
        <el-menu-item
          :key='routes.path'
          :index="routes.path"
          v-if="routes.name == 'home'"
        >
          {{routes.meta && routes.meta.title}}
        </el-menu-item>
        <!-- 其他组件 -->
        <template v-else>
          <el-submenu
            :key='index'
            v-if='routes.children && routes.children.length >= 1'
            :index="routes.path"
          >
            <template slot="title">{{routes.meta && routes.meta.title}}</template>
            <el-menu-item
              v-for="(child) in routes.children"
              :key='child.path'
              :index="routes.path + '/' + child.path"
            >
              {{child.meta && child.meta.title}}
            </el-menu-item>
          </el-submenu>
        </template>

      </template>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      activeIndex: '/home'
    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {
    // console.log(this.$store.getters.routes)
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  padding-left: 200px;
  background-color: rgb(0, 53, 82);
}
.el-menu.el-menu--horizontal {
  background-color: rgb(0, 53, 82);
  border-bottom: none;
}
/deep/.el-menu-item:hover {
  background-color: rgb(0, 53, 82);
}
</style>
