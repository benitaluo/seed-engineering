module.exports = {
  publicPath:  './' ,
  productionSourceMap: false,
  devServer: {
    port: 8080
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/helpers/mixin.scss";`
      }
    }
  },
  configureWebpack: config =>{

    // 浏览器：web, electron : electron-renderer
    config.target = 'web'
  }
};
