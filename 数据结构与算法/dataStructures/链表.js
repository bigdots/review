// linkedList
//多个元素组成的列表。
//元素存储不连续，用next指针连在一起。
//数组：增删非首尾元素时往往需要移动元素。
//链表：增删非首尾元素，不需要移动元素，只需要更改next的指向即可。
// js中没有链表的结构，我们可以用对象来模仿

let a = { value: "a" }
let b = { value: "b" }
let c = { value: "c" }
let d = { value: "d" }

a.next = b;
b.next = c;
c.next = d;
console.log(a)

// 遍历链表
let p = a;
while (p) {
  console.log(p.value);
  p = p.next
}

// 插入值
let e = { value: "e" }
c.next = e;
e.next = d;

// 删除e
c.next = d;


// f(i, j) = max{f(i - 1, j), f(i, j - 1)} + grid[i][j]
var maxValue = function (grid) {
  let row = grid.length;
  let col = grid[0] ? grid[0].length : 0;
  // let profit = 0;
  const dp = (i, j) => {
    let top = i === 0 ? 0 : dp(i - 1, j)
    let left = j === 0 ? 0 : dp(i, j - 1)
    return Math.max(top, left) + grid[i][j]
  }

  return dp(row - 1, col - 1)

};

maxValue([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
])


