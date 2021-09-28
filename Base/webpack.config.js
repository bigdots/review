const path = require('path');
// import router from './router'
const router = require('./router')

module.exports = {
  entry: router,
  output: {
      path: path.join(__dirname,'../dist'),
      filename: "js/[name].js"
  },
  module: {
      loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
  },
  devServer:{
    contentBase: '/html',
    // 监听页面
    inline:true
  }
};