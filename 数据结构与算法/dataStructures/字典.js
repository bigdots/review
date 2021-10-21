
// 与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式来存储。
// ES6中有字典，名为Map

const m = new Map();

// 增
m.set("a","aa")
m.set("b","bb")

// 删
m.delete("b")
// m.clear() 删除所有键

// 改
m.set("a","aaaa")

// 查
m.get("a")
