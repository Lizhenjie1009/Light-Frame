# 框架文档

## 目录结构

* public                静态资源目录
* src                   文件目录
  * api                   后端接口api
  * assets                静态文件
  * components            组件
  * directive             全局指令
  * filter                全局过滤器
  * layout                项目页面入口
  * store                 状态数据库
  * style                 全局样式
  * utils                 工具库
  * views                 页面组件
  * App.vue               入口组件
  * mian.js               入口文件
  * permission.js         全局路由守卫
  * settings.js           项目设置文件
* .editorconfig         编码样式文件
* .env                  生产环境配置
* .env.test             测试环境配置
* babel.config.js       babel配置文件
* package-lock.json     锁定安装时的包的版本号
* package.json          项目依赖配置信息
* vue.config.js         项目配置信息
  
------

## 目录信息

### api

> api接口目录以单个页面组件为一个js文件
> 每个js文件包含单个组件所有的api请求接口

```
<!-- 模板 -->
export function getUserInfo (token) {
  return service({
    url: '/getUserInfo',
    method: 'get',
    params: { token }
  })
}
```

### components

> 组件目录包含两个子目录为 ->
> `common`    公共组件目录
> `content`   页面组件目录

### layout

> 项目页面入口文件目录，`components` **layout**组件目录
> `AsideBar`  侧边栏组件
> `NavBar`    导航栏组件
> `TagsBar`   导航面包屑组件

### router

> 路由规则目录，包含基本路由和权限路由

### store

> 该目录以单个功能为一个模块文件 ->
> `getters` 包含所有的状态计算数据
> `modules` 模块文件

### utils

> 项目工具库目录
> `auth`          会话存储
> `format-date`   格式化时间
> `rem`           响应式
> `request`       axios配置
> `watermark`     水印

### permission

> 全局路由守卫配置文件

### settings

> 项目设置文件

------

## 框架配置

**eslint**：    使用的是vue原生配置的eslint配置文件
**环境变量**：  环境变量包括开发环境、生产环境、测试环境