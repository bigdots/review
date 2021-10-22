
// 必须是有序数组
// 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束。
// 如果目标值大于或者小于中间元素，则在大于或小于中间元素的那一半数组中搜索。

// 每一次比较都使搜索范围缩小一半。时间复杂度：O（logN）

Array.prototype.binarySearch = function (value) {
  let low = 0;
  let high = this.length - 1
  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2);
    const mid = this[midIndex]
    if (value < mid) {
      high = mid - 1; // mid 本身也可以剔除
    } else if (value > mid) {
      low = mid + 1
    } else {
      return midIndex
    }
  }
  return -1;
}

const arr = [5, 3, 2, 4, 1]
const index = arr.binarySearch(2)
console.log(index)