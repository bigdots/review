// 一种无序且唯一的数据结构。
// ES6中有集合，名为Set

// 常用操作： 去重、求交集

// 去重
const arr = [1,2,3,3]
const arr2 = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(3)

// 交集
const set2 = new Set([1,2]);
const set3 = new Set([...set].filter(item => set2.has(item)))