// 函数的作用域是执行时的，不是声明时的；
// ES5只有函数作用域和全局作用域，没有块级作用域

for (var i = 0; i <= 3; i++) {  // 全局作用域
    setTimeout(function () { // 回调函数推入回调队列，执行时，该函数处于全局中
        console.log(i)  // 4,4,4,4
    }, 1000)
}

// ES6的let和const声明会形成块级作用域
for (let k = 0; k <= 3; k++) {  // 块级作用域
    setTimeout(function () { // 回调函数推入回调队列，但是执行时，该函数处于块级作用域中
        console.log(k) //0,1,2,3
    }, 1000)
}


