// 数组扁平化

Array.prototype._flat = function () {
  const temp = [];
  const rec = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
        rec(arr[i])
      } else {
        temp.push(arr[i])
      }
    }
  }
  rec(this)
  temp.forEach((item, index) => {
    this[index] = item
  });
}


const arr = [[1, 2, 3], 4, 5, [6, [7, 8], { a: 1 }]]
arr._flat();


