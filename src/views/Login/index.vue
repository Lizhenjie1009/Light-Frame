<template>
  <div id="login">
    <div class="login-from">
      <div class="from">
        <img class="login-logo" src="@/assets/img/logo-second.png" alt="">
        <img class="form-bg" src="@/assets/img/login-box.png" alt="">
        <span class="title">用户登录</span>
        <el-form class="from-user" :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input @keyup.enter.native="submitForm('loginForm')" v-model="loginForm.username" style="color: #15ebff" placeholder="账号"></el-input>
            <img src="@/assets/img/zh.png" class="l-img">
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon='iconfont nickname' @keyup.enter.native="submitForm('loginForm')" type="password" placeholder="密码" v-model="loginForm.password">
              <!-- <i
                class="el-icon-edit el-input__icon"
                slot="prefix"
                @click="handleIconClick">
              </i> -->
            </el-input>
            <img src="@/assets/img/mm.png" class="l-img">
          </el-form-item>
          <el-form-item>
            <el-button  size="small" type="primary" @click="submitForm('loginForm')" :loading="buttonLoading" >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from '@/api/login'
import { setStorage } from '@/utils/auth'
// let userinfo = await login({username: 'lzj', password: '123456'})

export default {
  components: {

  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      showLogin: false,
      buttonLoading: false
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
    submitForm () {
      // 获取用户信息 -- 储存信息

      // 获取权限 -- 存储权限
      this.$store.dispatch('user/setRoles', ['admin'])
      // this.$store.dispatch('user/setRoles', ['system', 'menu', 'shop', 'manager', 'car'])
      
      setStorage('token', 111111111)

      // 跳转
      // this.$router.push('/')
      // 解决因为没有回调函数而出现错误提示。
      this.$router.push('/', () => {}, () => {})
    },
    resetForm () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/login.scss'
</style>
