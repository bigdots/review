
Function.prototype.myCall = function (obj = window) {
  // this 指向调用函数
  obj.func = this;
  // arguments 类数组，第一位是this，后面是参数
  let args = Array.prototype.slice.call(arguments, 1)
  let result = obj.func(...args);
  delete obj.func;
  return result;
}

function sayHello (a, b, c, d) {
  console.log(a, b, c, d);
  return {
    a: 1
  }
}
let a = sayHello.myCall({
  name: "goudan"
}, "1", "2", "3", "4");
console.log(a)

Function.prototype.myApply = function (obj = window, arr) {
  // this 指向调用函数
  obj.func = this;
  let result = obj.func(...arr);
  delete obj.func;
  return result;
}

let b = sayHello.myApply({
  name: "goudan"
}, ["1", "2", "3", "4"]);
console.log(b);


Function.prototype.myBind = function (obj = window) {
  var self = this;
  // arguments 类数组，第一位是this，后面是参数
  let args1 = Array.prototype.slice.call(arguments, 1)
  return function () {
    let args2 = Array.prototype.slice.call(arguments);
    self.apply(obj, [...args1, ...args2]);
  }
}

let c = sayHello.myBind({
  name: "goudan"
}, "1", "2", "3")("5");
console.log(c);