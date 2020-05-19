<template>
  <div id="tags-view-container" class="tags-view-container">
    <!-- 超出滚动 -->
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <!-- tags -->
      <router-link
        v-for="tag in $store.getters.tags"
        :key='tag.path'
        :to='tag.path'
        tag='span'
        class="tags-view-item"
        :class="tag.path == $route.path ? 'active' : ''"
      >
        {{tag.meta && tag.meta.title}}
        <span v-if="tag.name !== 'room'" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
      </router-link>
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from '@/components/common/ScrollPane'

export default {
  components: {
    ScrollPane
  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {
    $route (val) {
      this.$store.dispatch('tagsbar/addTags', val)
    }
  },
  created () {
    this.$store.dispatch('tagsbar/addTags', this.$route)
  },
  mounted () {

  },
  methods: {
    closeSelectedTag (tag) {
      if (tag.name === 'room') return
      this.$store.dispatch('tagsbar/closeTag', tag)
        .then(tags => { // 接收新的标签数组
          if (tags.length > 0) {
            if (this.$route.path === tag.path) {
              this.$router.push(tags[tags.length - 1].path)
            }
          }
          // tags.length > 0
          //   // 判断是否删除当前页面路由的tag
          //   //  是 -> 跳转到最后一个tag
          //   //  否 -> nothing
          //   ? this.$route.path === tag.path ? this.$router.push(tags[tags.length - 1].path) : ''
          //   : ''
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
      .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        transform-origin: 100% 50%;
        &:before {
          transform: scale(.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
  }
}
</style>
