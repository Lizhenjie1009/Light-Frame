# Light-Frame

## Start

`npm install`

`yarn serve`

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

## 当前框架权限控制是通过前端动态添加
> 权限管理说明目录有后端返回路由规则方式说明，按需查看

## 框架配置
**eslint**：    使用的是vue原生配置的eslint配置文件
**环境变量**：  环境变量包括开发环境、生产环境、测试环境
