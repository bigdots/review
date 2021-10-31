
## 浏览器输入url会发生什么
DNS解析，建立TCP连接，发送http请求
server接收到http请求，处理，并返回客户端接收到返回数据，
客户端处理数据（如渲染页面，执行js）

## TCp为啥需要三次握手
为了确保服务端和客户端都能确认对方收得到信息

## cookie
- 存储在浏览器的一段字符串（最大5kb）
- 跨域不共享
- 每次发送http请求，会将请求域的cookie一起发送给server
- server可以修改cookie并返回给浏览器
- 浏览器中也可以通过javascript修改cookie（有限制）

查看cookie
```JS
document.cookie
```
设置cookie，会自动累加
```JS
document.cookie = "a=2"
```

## session
- cookie里直接带有用户信息太不安全
- 使用一个变量将用户id存起来，不暴露过多用户信息
  
缺点：
- 进程较多的时候，需要存多份session
- 与sever的内存在一起，相互影响

## redis
- web server最常用的缓存数据库，数据存放在内存中
- 相比于mysql，访问速度快（内柠和硬盘不是一个数量级的）
- 但是成本更高，可存储的数据量更小（内存的硬伤）,断电就没了
- 将web server和redis拆分为两个单独的服务，双方都是独立的，都是可扩展的（例如都扩展成集群）

为什么session适合redis
- session访问频繁，对性能要求极高
- session可不考虑断电丢失数据的问题（内存的硬伤）
- session数据量不会太大（相比于mysql中存储的数据）

分离后的服务端
![](public/server.png)