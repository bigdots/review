const { SuccessModel, ErrorModel } = require("../model/resModel")
const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(ErrorModel('尚未登录'))
  }
  return true
}

module.exports = loginCheck