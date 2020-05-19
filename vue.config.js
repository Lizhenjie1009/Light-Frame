// Vue.config.js 配置选项

module.exports = {
  // 选项
  // 基本路径
  publicPath: './',
  // 构建时的输出目录
  outputDir: process.env.outputDir,
  // 放置静态资源的目录
  //     assetsDir: "static",
  //  html 的输出路径
  //     indexPath: "index.html",
  // 文件名哈希

  filenameHashing: true,

  // 用于多页配置，默认是 undefined
  //     pages: {
  //         index: {
  //             // page 的入口文件
  //             entry: 'src/index/main.js',
  //             // 模板文件
  //             template: 'public/index.html',
  //             // 在 dist/index.html 的输出文件
  //             filename: 'index.html',
  //             // 当使用页面 title 选项时，
  //             // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //             title: 'Index Page',
  //             // 在这个页面中包含的块，默认情况下会包含
  //             // 提取出来的通用 chunk 和 vendor chunk。
  //             chunks: ['chunk-vendors', 'chunk-common', 'index']
  //         },

  //         // 当使用只有入口的字符串格式时，
  //         // 模板文件默认是 `public/subpage.html`
  //         // 如果不存在，就回退到 `public/index.html`。
  //         // 输出文件默认是 `subpage.html`。
  //         subpage: 'src/subpage/main.js'
  //     },

  //  是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: true,

  //  是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,

  //  babel-loader 默认会跳过 node_modules 依赖。
  //     transpileDependencies: [ /* string or regex */ ],

  //  是否为生产环境构建生成 source map？
  productionSourceMap: true,

  //  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  //     crossorigin: "",

  //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  integrity: false,

  //  调整内部的 webpack 配置
  configureWebpack: () => {
    // resolve: {
    // extensions: [],
    // alias: {
    //   'assets': '@/assets',
    //   'components': '@/components',
    //   'views': '@/views',
    // }
    // }
  }, // (Object | Function)

  chainWebpack: () => {

  },

  // 配置 webpack-dev-server 行为。
  //     devServer: {
  //         open: process.platform === 'darwin',
  //         host: '0.0.0.0',
  //         port: 8080,
  //         https: false,
  //         hotOnly: false,
  //         // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
  //         proxy: {
  //             '/api': {
  //                 target: "http://app.rmsdmedia.com",
  //                 changeOrigin: true,
  //                 secure: false,
  //                 pathRewrite: {
  //                     "^/api": ""
  //                 }
  //             },
  //             '/foo': {
  //                 target: '<other_url>'
  //             }
  //         }, // string | Object
  //         before: app => {}

  //     },

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,
    // 是否开启 CSS source map？
    sourceMap: false,
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // Css-loader 时，使用 `{ Css: { ... } }`。
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          // 设计稿宽度为375px
          require('postcss-px2rem-exclude')({ remUnit: 16 })
        ]
      }
    },

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {},

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
