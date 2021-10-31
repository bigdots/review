const { getList, getDetail, newBLog, updateBLog, deleteBLog } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("./loginCheck")

const handleBlogRouter = (req, res) => {
  const { method, url } = req;
  const path = url.split("?")[0]

  // 获取博客列表：api/blog/list
  if (method === "GET" && path === "/api/blog/list") {
    const { author = '', keyword = '' } = req.query;
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData)
    })

  }

  // 获取博客详情：api/blog/detail
  if (method === "GET" && path === "/api/blog/detail") {
    const id = req.query.id
    const result = getDetail(id);
    return result.then(([detailData]) => {
      return new SuccessModel(detailData)
    })
  }

  // 新建博客：api/blog/new
  if (method === "POST" && path === "/api/blog/new") {
    // 验证登录
    const isLogin = loginCheck(req);
    if (!isLogin) {
      return isLogin
    }

    req.body.author = req.session.username
    const result = newBLog(req.body);

    return result.then((blogId) => {
      return new SuccessModel(blogId)
    })
  }
  // 更新博客：api/blog/update
  if (method === "POST" && path === "/api/blog/update") {
    const isLogin = loginCheck(req);
    if (!isLogin) {
      return isLogin
    }

    const id = req.query.id
    const result = updateBLog(id, req.body);
    return result.then((success) => {
      if (success) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新失败')
      }
    })
  }

  // 删除博客：api/blog/delete
  if (method === "POST" && path === "/api/blog/delete") {
    const isLogin = loginCheck(req);
    if (!isLogin) {
      return isLogin
    }

    const id = req.query.id
    const author = req.session.username
    const result = deleteBLog(id, author);
    return result.then((success) => {
      if (success) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除失败')
      }
    })
  }
}

module.exports = handleBlogRouter