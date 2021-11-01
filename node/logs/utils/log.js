const path = require('path');
const fs = require('fs');


function createWriteStream (fileName) {
  const filename = path.join(__dirname, '../', fileName)
  return fs.createWriteStream(filename, {
    flags: 'a' // 添加的方式写入，而不是覆盖
  })
}

function accessLog (log) {
  const w = createWriteStream('access.log')
  w.write(log + '\n')
}

module.exports = {
  accessLog
}