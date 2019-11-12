const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '//cdn.jr.jd.com/eternal/animation' : '/eternal/animation',
  outputDir: '../animationBuild', // 打包后的输出目录
  assetsDir: 'static', // 静态资源目录 默认为空即直接将assets里的目录结构放在dist下 我现在修改为static
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  filenameHashing: true, // 生成带hash的静态资源
  pages: undefined, // 多页模式配置 默认值为undefined
  lintOnSave: true, // 开发期间校验eslint
  runtimeCompiler: false, // Vue组件中使用模板选项
  transpileDependencies: [], // babel-loader 默认忽略 node_modules
  productionSourceMap: false, // 生产map文件
  crossorigin: undefined, // 设置vue注入的link和script的crossorigin属性
  integrity: false, // 设置vue注入的link和script的integrity属性
  configureWebpack: {}, // 如果值是Object，则它将使用webpack-merge合并到最终配置中
  chainWebpack: (config) => { // 对webpack进行细粒度更改
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('./src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('./src/components'))
      .set('utils', resolve('./src/utils'))
  },
  css: {
    modules: false, // false 只把文件名为 *.module.[ext] 的文件当做modules处理
    sourceMap: false, // 是否为CSS启用源映射 将此设置为true可能会影响构建性能
    loaderOptions: {} // 将选项传递给与CSS相关的加载器 修改css相关加载器配置 css-loader postcss-loader sass-loader less-loader stylus-loader
  },
  devServer: { // 支持webpack-dev-server的所有选项
    host: 'pc.jd.com',
    port: '80'
  },
  parallel: require('os').cpus().length > 1, // 是否使用线程加载器进行Babel或TypeScript转换
  pwa: {}, // pwa设置
  pluginOptions: {} // 给插件传值
}
