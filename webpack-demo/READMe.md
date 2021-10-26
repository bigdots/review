# WebPack

## 基本配置
1. 环境拆分配置和merge
   ```js
   //common|dev|prod
   const { smart } = require( 'webpack-merge')
   {
     mode: "dev"
   }
   "dev": "webpack-dev-server --config build-base-conf/webpack.config"
   ```
2. 启动本地服务
   `devserver`
3. 处理样式
   ```js
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }
    ```
4. 处理图片
  ```js
  {
    test: /\.(jfif|jpg|gif)$/,
    use: {
      loader: 'file-loader' 
    }
  }
  ```
'file-loader': 会把图片放到dist目录，并返回一个地址
'url-loader'：可以设置文件大小限制，会把小文件转成base64码，大文件的处理同‘file-loader’

5. 处理ES6
   `babel-loader`

## 高级配置
1. 多入口
2. 赖加载
3. 抽离CSS文件
   ```js
   const MiniCssExtractPlugin = require('mini-css-extract-plugin')
   {
     test: /\. css$/, 
     Loader: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader'
  },
```
4. 抽离公共代码
5. 处理JSX
6. 处理Vue

## 性能优化

## 构建流程概述

## babel
1. 环境搭建&基本配置
2. babel-polyfill
3. babel-runtime

## 面试题

### 前端代码为何要进行构建和打包？
### module chunk bundle分别什么意思，有何区别？
### loader和plugin的区别？
### webpack如何实现懒加载？
### webpack常见性能优化
### babel-runtime和babel-polyfill的区别