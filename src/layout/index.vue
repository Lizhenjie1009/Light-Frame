<template>
  <div class="layout">
    <el-container style="height: 100%">
      <!-- 导航栏 -->
      <el-header>
        <nav-bar></nav-bar>
      </el-header>

      <!-- body -->
      <el-container>

        <!-- 侧边栏 -->
        <el-aside>
          <aside-bar></aside-bar>
        </el-aside>

        <!-- 主体区域 -->
        <el-main>
          <!-- 导航标签 -->
          <tags-bar></tags-bar>
          <!-- 内容区域 -->
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import AsideBar from './components/AsideBar'
import TagsBar from './components/TagsBar'

export default {
  components: {
    NavBar,
    AsideBar,
    TagsBar
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

  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
}
aside {
  margin-bottom: 0;
  padding: 0;
  background: #003552;
  box-sizing: border-box;
}
.el-header {
  background-color: rgb(0, 53, 82);
  height: 60px !important;
}
.el-aside {
  width: 230px !important;
}
.el-main {
  padding: 0;
}
</style>
