const path = require('path');
const entry = require('./entry');
const plugins = require('./plugins')
const mockFn = require('./mock/mockFn')

module.exports = {
  entry,
  mode:'development',
  output: {
      path: path.join(__dirname,'./dist'),
      filename: "[name]/index.js"
  },
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
  devServer:{
    static: "./dist",
    compress: true,
    // mockData
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      mockFn(devServer.app)
    },
  },
  plugins
};