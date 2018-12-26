module.exports = {
    devServer: {
      proxy: {
        '/pizza': {
          target: "https://pizza-d48df.firebaseio.com/",
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/pizza': ''
          }

        }
      }
    },
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
  }