const exec = require("../db/mysql")
const login = (username, password) => {
  // 数据库验证拿取数据验证
  const sql = `select username,realname from users where username='${username}' and password='${password}'`

  return exec(sql).then((rows) => {
    if (rows[0]) {
      return rows[0]
    }
    return {};
  });

}

module.exports = {
  login
}