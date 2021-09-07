

function noClone(value){
    const type = typeof value;
    return type !== "object" || type == null
}


function deepClone(tar){
    if(noClone(tar)){
        // 如果是基本类型值，直接返回
        return tar
    }


    // 初始化结果
    let result;
    if(tar instanceof Array){
        result =[];
    }else{
        result ={}
    }

    for (const key in tar) {
        // 判断是否为原型链上的属性
        if (Object.hasOwnProperty.call(tar, key)) {
            const element = tar[key];
            if(noClone(element)){
                result[key] = element
            }else{
                //递归
                result[key] = deepClone(element)
            }
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
console.log(b.address.city)  // beijing


