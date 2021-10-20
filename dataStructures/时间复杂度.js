// 时间复杂度
// 一个函数，用大O表示，比如O(1)、O(n)，O(logN)......
// 定性描述该算法的运行时间：就是运算次数

// O(1)
let i = 1;
i+=1;

// O(n)
for (let i = 0; i < n; i++) {
  console.log(i)
}


// O(n^2)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i,j)
  }
}

// O(logN)  logN:以2为底的对数，求2多少次为n
let i=1;
let n=8;
while (i<n) {
  console.log(i);
  i*= 2;
}