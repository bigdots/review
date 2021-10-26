const { getList, getDetail, newBLog, updateBLog, deleteBLog } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleBlogRouter = (req, res) => {
  const { method, url } = req;
  const path = url.split("?")[0]
  console.log(path)
  // 获取博客列表：api/blog/list
  if (method === "GET" && path === "/api/blog/list") {
    const { author = '', keyword = '' } = req.query;
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 获取博客详情：api/blog/detail
  if (method === "GET" && path === "/api/blog/detail") {
    const id = req.query.id
    const detailData = getDetail(id);
    return new SuccessModel(detailData)
  }

  // 新建博客：api/blog/new
  if (method === "POST" && path === "/api/blog/new") {
    const blogId = newBLog(req.body);
    return new SuccessModel(blogId)
  }
  // 更新博客：api/blog/update
  if (method === "POST" && path === "/api/blog/update") {
    const id = req.query.id
    const success = updateBLog(id, req.body);
    if (success) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新失败')
    }

  }

  // 删除博客：api/blog/delete
  if (method === "POST" && path === "/api/blog/delete") {
    const id = req.query.id
    const success = deleteBLog(id);
    if (success) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除失败')
    }
  }
}

module.exports = handleBlogRouter