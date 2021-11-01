const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const { get, set } = require("./src/db/redis");
const { accessLog } = require('./logs/utils/log')

const getPOstData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({})
      return
    }

    if (req.headers['content-type' !== 'application/json']) {
      resolve({})
      return
    }

    let postData = ''
    req.on("data", chunk => postData += chunk.toString()) // 异步
    req.on("end", () => {
      if (!postData) {
        resolve({});
      } else {
        resolve(JSON.parse(postData))
      }
    })
  })
}

module.exports = (req, res) => {
  // 记录访问日志
  accessLog(`${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`)

  // 设置返回格式
  res.setHeader('content-type', 'application/json');

  // 获取path，解析query
  const { url } = req;
  req.query = querystring.parse(url.split('?')[1])

  // 解析cookie,并挂在到req
  const cookieStr = req.headers.cookie || '';
  req.cookie = {}
  cookieStr.split(";").forEach(item => {
    if (!item) {
      return
    }
    arr = item.split("=");
    const key = arr[0].trim()
    req.cookie[key] = arr[1].trim()
  });

  // 解析redis
  let needSetCookie = false;
  let userId = req.cookie.userid;
  if (!userId) {
    needSetCookie = true;
    userId = `${Date.now()}_${Math.random()}`
    set(userId, {})
  }
  req.sessionId = userId;
  get(userId).then(sessionData => {
    if (sessionData == null) {
      set(userId, {});
      req.session = {}
    } else {
      req.session = sessionData
    }
  })

  getPOstData(req).then((postData) => {
    req.body = postData;

    // 处理blog路由
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then((blogData) => {
        if (needSetCookie) {
          res.setHeader('Set-Cookie', `userid=${userId}`)
        }
        res.end(JSON.stringify(blogData));
      })
      return;
    }


    // 处理user路由
    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then((userData) => {
        res.end(JSON.stringify(userData));
      })
      return;
    }

    // 未命中
    res.writeHeader(404, { "content-type": "text/plain" })

    res.write("404,not found")
    res.end();
  })

}