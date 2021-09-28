# webpack
一个模块打包工具（可以识别各种模块规范）
Js模块 -> 可以打包任何资源

## loader
帮助识别非js文件模块，负责配置其它模块打包的策略
### 图片打包： file-loader、 url-loader
### 样式打包：
'style-loader',（挂在css到页面上） 
'css-loader'（分析各个css之间的关系，进行合并）
'sass-loader' （处理sass文件的）