
// const UglifyPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath:"./",
  configureWebpack: config=>{
    if(process.env.NODE_ENV=='production'){
      return{
        plugins:[
          new CompressionPlugin({
            test:/\.js$|\.html$|\.css/,
            threshold: 10240,
            deleteOriginalAssets: false
          })
        ]
      }
    }
  },
  pluginOptions: {

  }
}
