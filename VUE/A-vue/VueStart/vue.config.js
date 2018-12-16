module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: "http://datacenter.taichung.gov.tw",
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }

        }
      }
    }
  }