
// 基本类型判断
function IsBasicType(value) {
    const type = typeof value;
    return type !== "object" || type == null
}

function deepClone(tar) {
    if (IsBasicType(tar)) {
        // 如果是基本类型值，直接返回
        return tar
    }


    // 初始化结果
    let result;
    if (tar instanceof Array) {
        result = [];
    } else {
        result = {}
    }

    for (const key in tar) {
        // 判断是否为原型链上的属性
        if (Object.hasOwnProperty.call(tar, key)) {
            const element = tar[key];
            // 递归
            result[key] = deepClone(element)
        }
    }

    return result;
}

let a = {
    name: "sean",
    age: 22,
    address: {
        city: "hangzhou"
    }
}


// let b = a;
// a.address.city = "beijing";
// console.log(b.address.city)  // beijing

let b = deepClone(a);
a.address.city = "beijing";
a.name = "shifei"
console.log(b.address.city)  // beijing
console.log(b.name)