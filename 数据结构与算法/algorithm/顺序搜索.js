// 遍历数组。
// 找到跟目标值相等的元素，就返回它的下标。
// 遍历结束后，如果没有搜索到目标值，就返回 - 1。

// 遍历数组是一个循环操作。时间复杂度：O（n）

Array.prototype.sequeuetialSearch = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return i;
    }
  }
  return -1
}

const arr = [5, 3, 2, 4, 1]
const index = arr.sequeuetialSearch(6)
console.log(index)