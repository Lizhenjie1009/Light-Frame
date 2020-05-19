import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

/* 第一层if判断生产环境和开发环境 */
if (process.env.NODE_ENV === 'production') {
  /* 第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境 */
  if (process.env.VUE_APP_FLAG === 'pro') {
    // production 生产环境
    axios.defaults.baseURL = 'http://api.xinggeyun.com'
  } else {
    // test 测试环境
    axios.defaults.baseURL = 'http://192.168.0.152:8102/test'
  }
} else {
  // dev 开发环境
  axios.defaults.baseURL = 'http://192.168.0.152:8102'
}

const service = axios.create({
  // baseURL: 'http://localhost:8080',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
