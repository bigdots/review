// const mock = require('mockjs');
const ajaxData = require('./ajaxData.json')
const entry = require('../entry')

module.exports = (app)=>{
  app.get('/ajaxData', function(req, res) {
    res.json(ajaxData);
  });
  app.get('/pages',(req,res)=>{
    let urls = {}
    Object.keys(entry).forEach((item)=>{
      if(item!=='index'){ // 首页不需要返回链接
        urls[item] = `/${item}`
      }
    })
    // console.log(urls)
    res.json(urls)
  })
}