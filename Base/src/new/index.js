/**
 * 1. 创建一个新对象
 * 2. 将这个新对象的_proto_指向构造函数
 * 2. 执行构造函数，并且将新对象绑定到构造函数的this上
 * 3. 返回这个新对象
 */
function _new(){
    // 取到构造函数
    var constructor = Array.prototype.shift.call(arguments)
    // 创建一个新对象，并将constructor.prototype作为这个对象的_proto_
    var obj = Object.create(constructor.prototype);
    var args = Array.prototype.slice.call(arguments,1)
    constructor.apply(obj,args)
    return obj;
}

// 测试
function Person(name,age){
    this.name = name;
    this.age = age
}

let o = _new(Person,"sean","23");
let b = new Person("sean","23")
console.log(o,b)