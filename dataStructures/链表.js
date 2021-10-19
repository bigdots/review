// linkedList
//多个元素组成的列表。
//元素存储不连续，用next指针连在一起。
//数组：增删非首尾元素时往往需要移动元素。
//链表：增删非首尾元素，不需要移动元素，只需要更改next的指向即可。

let a= {value: "a"}
let b= {value: "b"}
let c= {value: "c"}
let d= {value: "d"}

a.next = b;
b.next = c;
c.next = d;
console.log(a)

// 遍历链表
let p = a;
while(p){
  console.log(p.value);
  p = p.next
}

// 插入值
let e= {value: "e"}
c.next = e;
e.next = d;

// 删除e
c.next = d;