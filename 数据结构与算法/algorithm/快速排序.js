// 分区：从数组中任意选择一个"基准"，所有比基准小的元素放在基准前面，比基准大的元素放在基准的后面。
// 递归：递归地对基准前后的子数组进行分区。

// 时间复杂度O(n*logN)
// 递归的时间复杂度是O(logN)，分区操作的时间复杂度是O(n)。

Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const base = arr[0];
    const small = [];
    const big = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= base) {
        big.push(arr[i])
      } else {
        small.push(arr[i])
      }
    }
    return [...rec(small), base, ...rec(big)]
  }

  const temp = rec(this);
  temp.forEach((item, index) => {
    this[index] = item
  });

}

const arr = [5, 3, 2, 4, 1]
arr.quickSort()
console.log(arr)