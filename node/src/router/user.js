const { login } = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")
const { get, set } = require("../db/redis")

// 设置cookie有效期
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString();
}

const handleUserRouter = (req, res) => {
  const { method, url } = req;
  const path = url.split("?")[0]

  // 登录博客：/api/user/login
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    let result = login(username, password);
    return result.then((data) => {
      if (data.username) {
        // 操作cookie
        // res.setHeader("Set-Cookie", `username=${username};path='/';httpOnly;expires=${getCookieExpires()}`)
        req.session.username = data.username
        req.session.realname = data.realname
        // 同步到redis
        set(req.sessionId, req.session)
        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })
  }
}

module.exports = handleUserRouter