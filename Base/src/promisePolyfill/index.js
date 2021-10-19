
function PromisePolyfill(fn){
    // pending;fulfilled;rejected
		this.id = Math.random();
    this.state = "pending";
    this.result = null;
    this.onFulfilleds = [];//成功的回调
    this.onRejecteds = []; //失败的回调
		// 原生promise会捕获错误，传入reject
		try{
			fn(resolve.bind(this),reject.bind(this))
		}catch(error){
			reject(error)
		}
    
    // 需要在事件循环末尾执行
    function resolve(result){
			setTimeout(() => {
				if(this.state === 'pending'){
					this.state = 'fulfilled'
					this.result = result;
					this.onFulfilleds.forEach(fn => fn(result))
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

PromisePolyfill.prototype.then = function(fulfilledcall, rejectedcall){
	let prePromise = this;
	let promise2 =  new PromisePolyfill((resolve,reject)=>{
	
		// 将下一个promise的resolve操作放入到当前promise的resolve中
		let onFulfilled = ()=>{
			try{
				setTimeout(() => {
					 // 如果传入的是值，直接返回
					 this.result = typeof fulfilledcall === 'function'? fulfilledcall(prePromise.result) : fulfilledcall;
					 resolve(this.result)
				});
			}catch(err){
				reject(err)
			}
		}

		let onRejected = ()=>{
			try{
				setTimeout(() => {
					this.result = typeof rejectedcall === 'function'? rejectedcall(prePromise.result) : rejectedcall;
			    resolve(this.result)
				});
			}catch(err){
				reject(err)
			}
			
		}
		if(prePromise.state === 'fulfilled'){
			onFulfilled();
		}
		if(prePromise.state === 'rejected'){
			onRejected();
		}
		if(prePromise.state === 'pending'){
			this.onFulfilleds.push(onFulfilled)
			this.onRejecteds.push(onRejected)
		}
	})
	return promise2;
}


let self = new PromisePolyfill((resolve,reject)=>{
	resolve(1)
}).then((result)=>{
	console.log(result)
	return 2;
})
.then((res)=>{
	console.log(res)
	return 3;
}).then((res)=>{
	console.log(res)
})


