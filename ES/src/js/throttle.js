// 节流:当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
// 按照一定的时间间隔触发事件

function throttle(fn, delay) {
    let timer = null;
    if (!!timer) {
        return
    } else {
        timer = setTimeout(() => {
            fn();
            timer = null
        }, delay);
    }
}