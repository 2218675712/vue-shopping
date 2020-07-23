module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }

      }
    }
  },

  lintOnSave: false
}
