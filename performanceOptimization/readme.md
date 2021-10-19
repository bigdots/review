# 前端性能优化

## RAIL 模型
### R：response 响应
事件应在50ms内处理完成
### A: Animation 动画
每10ms产生一帧
### I：Ideal 空闲
尽可能让浏览器空闲
### L：Load 加载
在5s内完成内容加载并且可以进行交互

## 性能测试工具

### Chrome DevTools 开发调试，性能测试

### lighthouse 网站整体质量评估

### WebPagesTest 多测试地点，全面性能报告
Waterfall 请求瀑布图
First View 首次访问
Repeat View 二次访问

## Wep API
关键时间节点（Navigation Timing，Resource Timing）
网络状态（Network APIs）
imooo客户端服务端协商（HTTP Client Hints）&网页显示状态（UI APIs）

## 性能优化

### 渲染优化
1、浏览器渲染过程
JavaScript（触发视觉变化）->Style（计算样式）->Layout(布局)->Paint（绘制）->Composite（复合）

2、重构（回流，重排）和重绘
引起重构的操作：（元素的位置和大小）
- 添加/删除元素
- 操作styles 
- display：none
- 读取offsetLeft，scrollTop，clientWidth时
- 移动元素位置
- 修改浏览器大小，字体大小

布局抖动：layout thrashing
- 避免回流 【requestAnimationFrame】
- 读写分离（FastDom.js）

仅影响复合步骤的属性，不会进行重构和重绘
- Position：transform：- translate（npx，npx）
- Scale transform：scale（n）；
- Rotation transform：rotate（ndeg）；
- Opacity opacity：0...1；

### 代码优化
#### JS: 加载 -> 解析和编译 -> 执行
- Code splitting代码拆分，按需加载
- Tree shaking代码减重
- 避免长任务
- 避免超过1kB的行间脚本
- 使用rAF和rIC进行时间调度
- 可见不可交互vs最小可交互资源集

代码规范
- 以相同顺序初始化对象成员，避免隐藏类的调整
- 实例化后避免添加新属性
- 尽量使用Array代替array-like对象
- 避免读取超过数组的长度
- 避免元素类型转换：比如[1,'2',2.2]

#### HTML
- 减小iframes使用
- 避免节点深层级嵌套
- 避免table布局
- 删除元素默认属性
- 压缩空白符
- 删除注释
- CSS&Javascript尽量外链

#### CSS
- 降低CSS对渲染的阻塞
- 利用GPU进行完成动画
- 使用contain属性
- 使用font-display属性

### 资源优化
- html\css\js优化：压缩
HTML Minifier
clean-css
webpack

- 图片优化
1、选择合适的格式：
jpg：体积较小，但边缘可能出现锯齿感，适合大图展示【imagemin】
PNG: 质量高,但体积较大，适合小图，logo等；【imagemin-pngquant】
webP:兼具了jpg和png的优点，但兼容性不佳
2、懒加载：
verlok/lazyload 
yall.js 
Blazy
3、渐进式图片
progressive-image
ImageMagick
libjpeg
ipegtran
jpeg-recompress
imagemin
4、响应式图片
img标签的Srcset、Sizes属性
picture标签，兼容性不好

- 字体优化
字体闪烁现象：使用自定义字体时，浏览器会白屏，直到字体加载完成；
解决：使用font-display

### 构建优化
1. 减小代码量：
- 压缩：
```
Terser压缩JS
mini-css-extract-plugin、optimize-css-assets-webpack-plugin拆分、压缩CSS
HtmlWebpackPlugin-minify压缩HTML
```
- 按需引入
根据浏览器目标按需转化代码

2. 提高构建速度
```
noParse: 直接通知webpack忽略较大的库,被忽略的库不能有import，require，define的引入方式;比如loadsh
DLLPLugin: 避免打包时对不变的库重复构建
```

3. 缓存
- 使用hash值
每个打包的资源文件有唯一的hash值，修改后hash才会改变
```
filename: '[name].[contenthash].bundLe.js', 
chunkFilename: '[name].[contenthash:8].bundlLe.js'
```

4、webpack 监测与分析
- Webpack Chart 文件体积分析，可视化视图
- source-map-explorer 文件体积分析
- webpack-bundle-analyzer 文件体积分析
- peed-measure-webpack-plugin 构建速度检测

### 传输加载优化
1. 启用Gzip
与之前的压缩资源文件不是一个概念；在传输阶段进行

2. Keep Alive
...
Response Headers
Connection：Keep-Alive
...

服务器设置：
keepalive_timeout 65; 65s后关闭
keepalive_requests 100; 达到100个链接后关闭tcp链接

3. http缓存
   浏览器缓存分为强缓存和协商缓存，浏览器加载一个页面的简单流程如下：

  - 浏览器先根据这个资源的http头信息来判断是否命中强缓存。如果命中则直接加在缓存中的资源，并不会将请求发送到服务器。
  - 如果未命中强缓存，则浏览器会将资源加载请求发送到服务器。服务器来判断浏览器本地缓存是否失效。若可以使用，则服务器并不会返回资源信息，浏览器继续从缓存加载资源。
  - 如果未命中协商缓存，则服务器会将完整的资源返回给浏览器，浏览器加载新资源，并更新缓存。
  ----
  主要实现：
   - Cache-Control/Expires 强缓存
   - Last-Modified + If-Modified-Since 协商缓存
   - Etag + If-None-Match 协商缓存

4. ServiceWorker 离线缓存
WorkboxWebpackPlugin
MainfestPlugin

5. http2
   - 二级制传输
   - 多路复用
   - Server push

6. SSR - 服务端渲染


## 前沿优化方案
1. png -> Icon-Font -> Svg
2. flexbox布局
3. 优化资源加载顺序
   - Preload：提前加载较晚出现，但对当前页面非常重要的资源【Link标签属性】
   - Prefetch：提前加载后继路由需要的资源，优先级低【Link标签属性】
   - `import(/*vebpackPreload: true*/,ModuleName)`【webpack预加载】
4. 预渲染 react-snap
   大型单页应用的性能瓶颈：JS下载+解析+执行
   SSR的主要问题：牺牲TTFB来补救First Paint；实现复杂
   Pre-rendering打包时提前渲染页面，没有服务端参与
5. Windowing（窗口化）提高列表性能
   - react-window 只渲染可见的行，渲染和滚动的性能都会提升
6. 使用骨架组件减少布局移动（Layout Shift）
   - react-placeholder

## 面试题
1. 从地址栏输入到页面展现发生了什么
   - UI thread：搜索or URL？=搜索引擎or请求的站点
   - Network thread
   - Renderer process
2. 首屏加载优化
   指标
   - First Contentful Paint (FCP) 控制在2s之类
   - Largest Contentful Paint (LCP) 控制2.5s之类
   - Time to Interactive (TTI) 控制在4秒内

   解决：
   - 资源体积太大？
   资源压缩，传输压缩，代码拆分，Tree shaking，HTTP/2，缓存
   - 首页内容太多？
   路由/组件/内容lazy-loading，预渲染/SSR，Inline CSS
   - 加载顺序不合适
   prefetch，preload
3. JS内存
   - 引用计数-无法解决循环引用的问题
   - 标记清除-Markandsweep
   解决： 避免意外的全局变量产生；避免大量的闭包；避免脱离的DOM元素