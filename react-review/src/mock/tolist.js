import Mock from 'mockjs';

// 使用 Mock
// var Mock = require('mockjs')
let data = Mock.mock("/todolist.json",{
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [Mock.Random.csentence(4,8)]
})

export default data;
// 输出结果
// console.log(JSON.stringify(data, null, 4))