module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }

      }
    }
  },
  // 不打包map文件
  productionSourceMap: false,
  // 删除预加载，真正实现按需加载
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}
