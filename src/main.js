import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/theme/element-#0b0a3e/index.css'
import './assets/fonts/iconfont.css'

// import '@/utils/rem.js'
// rem等比适配配置文件

import 'normalize.css/normalize.css'
import '@/styles/index.scss'

import './permission'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
