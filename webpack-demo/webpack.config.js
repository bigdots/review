const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 入口文件
  // entry: './src/index.js',
  entry:{
    main: './src/index.js'
  },
  devtool:'source-map',
  // production;development;none
  mode:'development', 
  devServer: {
    static: './dist',
  },
  // 不同的模块打包策略
  module:{
    rules:[{
      test:/\.(jfif|jpg|gif)$/,
      use:{
        loader: 'file-loader'
      }
    },{
      test:/\.css$/,
      use:[
        'style-loader', 
        {
          loader: 'css-loader',
          options: {importLoaders: 1}
        },
        // 'css-loader',
        'postcss-loader'
      ]
    }]
  },
  // 输出
  output: {
    publicPath:'', //给资源设置一个域名
    filename: 'index.js',
    path: path.resolve(__dirname,'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}

// src 源文件