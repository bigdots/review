const { login } = require("../controller/user")

const handleUserRouter = (req, res) => {
  const { method, url } = req;
  const path = url.split("?")[0]

  // 登录博客：/api/user/login
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    let res = login(username, password)
    if (res) {
      return new SuccessModel()
    } else {
      return new ErrorModel('登录失败')
    }
  }
}

module.exports = handleUserRouter