// 节流:当持续触发事件时，保证间隔一定时间段内只调用一次事件处理函数。
// 按照一定的时间间隔触发事件
// 场景，拖拽事件中获取元素的位置，导致过于频繁的触发函数

const dragDiv = document.querySelector("#dragDiv");


// dragDiv.addEventListener("drag", function () {
//     console.log("拖拽")// 会一直触发
// })


// let timer = null;
// dragDiv.addEventListener("drag", function () {
//     if (timer) {
//         return
//     }
//     timer = setTimeout(function () {
//         console.log("拖拽")// 会间隔触发
//         timer = null;
//     }, 1000)
// })
/**
 * 
 * @param {*} fn 执行函数
 * @param {*} delay 函数执行时间间隔
 * @returns 
 */

function throttle (fn, delay = 100) {
  let timer = null;

  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null
    }, delay);
  }
}
// 传入的throttle是立即执行的，会返回一个回调函数
dragDiv.addEventListener("drag", throttle(function (e) {
  console.log(e)
}, 1000))
