
function PromisePolyfill(fn){
    // pending;fulfilled;rejected
    this.state = "pending";
    this.result = null;
    this.onFulfilled = [];//成功的回调
    this.onRejected = []; //失败的回调
		// 原生promise会捕获错误，传入reject
		try{
			fn(resolve.bind(this),reject.bind(this))
		}catch(error){
			this.reject(error)
		}
    
    // 需要在事件循环末尾执行
    function resolve(result){
			setTimeout(() => {
				if(this.state === 'pending'){
					this.state = 'fulfilled'
					this.result = result;
					this.onFulfilled.forEach(fn => fn(result))
			  }
			});   
    }
		// 需要在事件循环末尾执行
    function reject(result){
			setTimeout(() => {
				if(this.state === 'pending'){
					this.state = 'rejected'
					this.result = result;
					this.onRejected.forEach(fn => fn(result))
			  }
			}); 
    }
}

PromisePolyfill.prototype.then = function(onFulfilled, onRejected){
	let p2 =  new PromisePolyfill((resolve,reject)=>{
		if(this.state === 'fulfilled'){
			console.log(1111)
			setTimeout(() => {
				let result = typeof onFulfilled === 'function' && onFulfilled(this.result);
			});
			
			resolve(result)
		}
		if(this.state === 'rejected'){
			setTimeout(() => {
				let result = typeof onRejected === 'function' && onRejected(this.result);
				resolve(result)
			});
		}

		if(this.state === 'pending'){
			typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled)
			typeof onRejected === 'function' && this.onRejected.push(onRejected)
		}
	})
	return p2;
}

console.log("第1次")
let self = new PromisePolyfill((resolve,reject)=>{
	console.log("第2次")
    setTimeout(() => {
      resolve("success")
			console.log("第4次")
    }, 1000);
}).then((result)=>{
	console.log(result)
})

console.log("第3次")
