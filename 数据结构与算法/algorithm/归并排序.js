// 分：把数组劈成两半，再递归地对子数组进行"分”操作，直到分成一个个单独的数。
// 合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组。
// 时间复杂度：O(n*logN)
// 分的时间复杂度是O(logN)，
// 和的时间复杂度是O(n)

// 新建一个空数组res，用于存放最终排序后的数组。
// 比较两个有序数组的头部，较小者出队并推入res中。
// 如果两个数组还有值，就重复第二步。

Array.prototype.mergeSort = function () {

  // 合并操作
  const merge = function (orderLeft, orderRight) {
    const res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else {
        res.push(orderRight.shift())
      }
    }
    return res;
  }
  // 分割操作，分割完后要执行merge
  const slice = (arr) => {
    if (arr.length === 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(slice(left), slice(right))
  }

  const temp = slice(this); // 缓存数据
  // this表示当前对象，不能直接赋值改变，但对其内部属性赋值
  temp.forEach((item, index) => {
    this[index] = item
  });;
}

const arr = [5, 3, 2, 4, 1]
arr.mergeSort()
console.log(arr)