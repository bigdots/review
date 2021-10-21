// 一个函数，用大O表示，比如O(1)、O(n)，O(n^2)......
// 算法在运行过程中临时占用存储空间大小的量度，就是存放变量的多少

// O(1)  只有一个变量
let i = 1;
i+=1;

// O(n)  存放n个变量
const list = [];
for (let i = 0; i < n; i++) {
  list.push(i)
}

// O(n^2)  存放n^2个变量，比如矩阵,二维数组，存放了n^2个变量
const matrix = [];
for (let i = 0; i < n; i++) {
  matrix.push([])
  for (let j = 0; j < n; j++) {
    matrix[i].push(j)
  }
}