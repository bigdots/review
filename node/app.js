const querystring = require('querystring')
// const env = process.env,NODE_

module.exports = (req, res) => {
  const { method, url } = req;
  // 设置返回格式
  res.setHeader('content-type', 'application/json')

  if (method === 'GET') {
    const query = querystring.parse(url.split('?')[1])
    res.end(JSON.stringify({
      a: 2
    }))
  }

  if (method === 'POST') {
    // 数据格式
    // console.log('content-type', req.headers['content-type'])
    //接收数据
    let postData = req.on('data', chunk =>
      postData += chunk.toString()
    )
    // 数据接受完毕
    req.on('end', () => {
      res.end(JSON.stringify({
        a: 1
      }))
    })
  }

}