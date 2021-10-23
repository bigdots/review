// 定义一个目标对象
class Subject {
  constructor() {
    this.Observers = [];
  }
  add (observer) {
    //添加
    this.Observers.push(observer);
  }
  remove (observer) {
    //移除
    this.Observers.filter((item) => item !== observer);
  }
  notify () {
    //通知所有观察者
    this.Observers.forEach((item) => {
      item.update();
    });
  }
}
//定义观察者对象
class Observer {
  constructor(name) {
    this.name = name;
  }
  update () {
    console.log(`my name is:${this.name}`);
  }
}

let sub = new Subject(); // 发布者
let obs1 = new Observer("observer11"); // 观察者
let obs2 = new Observer("observer22");
sub.add(obs1);
sub.add(obs2);
sub.notify();



// Object.definePropertys实现
let friend = {}
let age = 26;

//定义 name 属性及 set 和 get 方法
//存取描述符（get，set）
//数据描述符（value，writable）
//Object.defineProperty(obj, prop, descriptor)
Object.defineProperty(friend, "age", {
  //当且仅当该属性的enumerable为true时，
  // 该属性才能够出现在对象的枚举属性中。默认为 false。
  enumerable: true,
  //当且仅当该属性的 configurable 为 true 时，
  // 该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。
  // 默认为 false。
  configurable: true,

  get () {
    return age
  },

  set (newValue) {
    //调用改变时的函数
    // 当被观察者改变时，观察者做出反应
    observe.say(newValue);
    age = newValue
  }

})

// 观察者
let observe = {
  age: 23,
  say: function (age) {
    console.log(this)
    if (this.age > age) {
      console.log("you are younger than me")
    } else {
      console.log("you are older than me")
    }
  }
};

friend.age = 60

