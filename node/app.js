const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
// const env = process.env.NODE_ENV

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
  const { method, url } = req;
  // 设置返回格式
  res.setHeader('content-type', 'application/json');
  req.query = querystring.parse(url.split('?')[1])

  getPOstData(req).then((postData) => {
    req.body = postData;

    // 处理blog路由
    const resData = handleBlogRouter(req, res);
    if (resData) {
      res.end(JSON.stringify(resData));
      return;
    }
    // 处理user路由
    const userData = handleUserRouter(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }

    // 未命中
    res.writeHeader(404, { "content-type": "text/plain" })
    res.write("404,not found")
    res.end();
  })

}