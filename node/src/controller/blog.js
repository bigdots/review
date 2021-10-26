
const getList = (author, keyword) => {
  return [{
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1546610491112,
    author: 'zhangsan'
  },
  {
    id: 2,
    title: '标题B',
    content: '内容B',
    createTime: 1546610524373,
    author: 'lisi'
  }]
}

const getDetail = (author, keyword) => {
  return [{
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1546610491112,
    author: 'zhangsan'
  }]
}

const newBLog = (blogData = {}) => {
  // 数据库操作
  return {
    id: 3  // 新建后返回的ID
  }
}

const updateBLog = (id, blogData = {}) => {
  // 数据库操作
  return true;
}

const deleteBLog = (id) => {
  // 数据库操作
  return true;
}

module.exports = {
  getList,
  getDetail,
  newBLog,
  updateBLog,
  deleteBLog
}