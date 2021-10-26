const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 入口文件
  // entry: './src/index.js',
  entry: {
    main: './src/index.js'
  },
  devtool: 'eval-cheap-module-source-map',
  // production;development;none
  mode: 'development',
  devServer: {
    static: './dist',
  },
  // 不同的模块打包策略
  module: {
    rules: [{
      test: /\.(jfif|jpg|gif)$/,
      use: {
        loader: 'file-loader'
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  // 输出
  output: {
    // publicPath:'', //给资源设置一个域名
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}

// src 源文件