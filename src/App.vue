<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import watermark from './utils/watermark'
import { formatDate } from './utils/format-date'
import remFn from './utils/rem'

export default {
  mounted () {
    remFn()
    // // 基准大小
    // const baseSize = 16
    // // 设置 rem 函数
    // function setRem () {
    //   // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
    //   const scale = document.documentElement.clientWidth / 1920
    //   // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
    //   document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
    // }
    // // 初始化
    // setRem()

    // window.addEventListener( 'resize' , function(){
    //  clearTimeout( hotcss.tid );
    //  hotcss.tid = setTimeout( hotcss.mresize , 33 );
    // } , false );
    // //绑定resize的时候调用

    // window.addEventListener( 'load' , hotcss.mresize , false );
    // //防止不明原因的bug。load之后再调用一次。

    // setTimeout(function(){
    //  hotcss.mresize();
    //  防止某些机型怪异现象，异步再调用一次
    // },333)

    // 改变窗口大小时重新设置 rem
    // 水印
    watermark(formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'), 'lizhenjie')
    // window.onresize = () => (watermark(formatDate(new Date(), 'yyyy-MM-dd h:m:s'), 'lizhenjie'))
    window.onresize = () => {
      watermark(formatDate(new Date(), 'yyyy-MM-dd h:m'), 'lizhenjie')
      remFn()
    }
  }
}
</script>

<style lang="scss">

</style>
