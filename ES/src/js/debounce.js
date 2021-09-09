// 防抖：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次
// 比如: 搜索输入框,用户连续输入停止后触发索引

function debounce(fn, delay = 0) {
    let timer = null;

    return function () {

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn();
        }, delay);
    }
}

// 处理函数
function handle() {
    console.log(Math.random());
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));