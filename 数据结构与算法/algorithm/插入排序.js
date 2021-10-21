// 从第二个数开始往前比。
// 比它大就往后排。
// 以此类推进行到最后一个数。

Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    this[j] = temp;
  }

}

const arr = [5, 3, 2, 4, 1]
arr.insertionSort()
console.log(arr)

// 时间复杂度 O(n ^ 2)