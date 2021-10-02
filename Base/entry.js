// 读取src下所有的文件夹
const path = require('path');
const fs = require('fs');
let pages = {
  // index: path.join(__dirname,'src/index.js')
}
const files = fs.readdirSync('src/')
files.forEach(function (item, index) {
    let stat = fs.lstatSync("src/" + item)
    if (stat.isDirectory() === true) { 
      pages[item] = path.join(__dirname,'src/',item,'index.js')
    }
})

module.exports = pages;