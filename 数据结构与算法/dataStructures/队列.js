// queue: 一个先进先出的数据结构。
// JavaScript中没有队列，但可以用Array实现队列的所有功能。

const queue = [];
// 入队
queue.push(1)
queue.push(2)

// 出队
queue.shift();





var lengthOfLongestSubstring = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = '';
    for (let j = i; j < s.length; j++) {
      console.log(s[j])
      if (temp.indexOf(s[j]) === -1) {
        temp = temp.concat(s[j]);
      } else {
        break;
      }
    }
    res = Math.max(res, temp.length);
    temp = '';
  }

  return res;
};

console.log(lengthOfLongestSubstring(" "))
