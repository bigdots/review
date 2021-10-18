
// 宏任务
// 1. 新程序或者子程序执行
// 2. 事件的回调函数
// 3. setTimeout() 和 setInterVal()

// 微任务
// 1. Promise.then().catch().finally()
// 2. MutationObserver
// 3. Object.observe

// 每次宏任务结束后，会清空一次微任务，进行页面渲染，再进行下一次宏任务