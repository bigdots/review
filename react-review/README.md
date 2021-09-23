# react语法 回顾

## 生命周期函数
1、初始化（Initialization）
2、挂载（Mounting）
    a、componentWillMOunt
    b、render
    c、componentDidMount
3、更新（Updation）
    a、componentWillReceiveProps: 当接受的props改变时会触发（第一次渲染不会执行）
    b、shouldComponentUpdate：当state和props改变时会触发
    c、componentWillUpdate
    d、render
    e、componentDidUpdate
4、卸载（Unmounting）
    a、componentWillUnmount

## diff算法
1、同级比较，不同则更改后级所有的DOM
2、key值比较，实现对应比较，而不是按照顺序比较，所以要才用唯一且不变的值作为key

## 虚拟DOM
虚拟DOM就是一个JS对象
```
<div id="vm">
    <span>Hello World</span>
</div>
```

```
{
    tag："div"
    data:{
        id:"vm"
    },
    children:[{
        tag:"span",
        data:{},
        children:["Hello World"]
    }]
}
```

## 提升代码性能
1、虚拟DOM，diff算法
2、事件函数作用域绑定放到constructor里面
3、shouldComponentUpdate 的使用
4、setState 异步执行，会合并一些操作
