const path = require("path");

module.exports = {
  // 入口文件
  // entry: './src/index.js',
  entry:{
    main: './src/index.js'
  },
  // production;development;none
  mode:'development', 
  // 不同的模块打包策略
  module:{
    rules:[{
      test:/\.(jfif|jpg|gif)$/,
      use:{
        loader: 'file-loader'
      }
    },{
      test:/\.css$/,
      use:['style-loader', 'css-loader']
    }]
  },
  // 输出
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist')
  }
}

// src 源文件