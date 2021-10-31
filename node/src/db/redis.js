
const redis = require("redis");
const { REDIS_CONF } = require("../config/db")
const { port, host } = REDIS_CONF
const redisClient = redis.createClient(port, host)
redisClient.on("error", (err) => {
  console.log(err)
})

function set (key, value) {
  if (typeof value === "object") {
    value = JSON.stringify(value)
  }
  redisClient.set(key, value, redis.print)
}

function get (key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return
      }
      if (val === null) {
        resolve(null)
      }
      try {
        resolve( // 结果有可能是对象字符串
          JSON.parse(val)
        )
      } catch (e) {
        resolve(val)
      }
    })
  })
}

module.exports = {
  get,
  set
}