# webpack
一个模块打包工具（可以识别各种模块规范）
Js模块 -> 可以打包任何资源

## loader
帮助识别非js文件模块，负责配置其它模块打包的策略

### 图片打包
'file-loader': 会把图片放到dist目录，并返回一个地址
'url-loader'：可以设置文件大小限制，会把小文件转成base64码，大文件的处理同‘file-loader’

### 样式打包：
'style-loader',（挂在css到页面上） 
'css-loader'（分析各个css之间的关系，进行合并）
'sass-loader' （处理sass文件的）
'postcss-loader' 自动补齐浏览器兼容性前缀

### 字体打包
'file-loader'

## plugins 插件
可以在webpack运行到某一时刻，帮我们干一些事情

### HtmlWebpackPlugin 
会在打包结束后自动生成一个html文件，并且把打包后的js引入到这个html中

### clean-webpack-plugin
打包后会清除旧文件

## sourceMap
一个映射关系，能够把打包后的代码位置对应到源文件的位置；
`devtool:'sourceMap'`
cheap:只定位到行，不定位到列
inline：map文件放入打包后的js，否则自成一个文件
moudle：还定位第三方模块的错误
eval：效率快，但是错误提示可能不太全；

最佳实践：
1、开发环境 `cheap-module-eval-source-map`
2、线上环境 `cheap-module-source-map`

## devServer

