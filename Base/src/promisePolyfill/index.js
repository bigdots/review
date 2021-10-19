//Promise A+ 规范 https://promisesaplus.com/#notes
function PromisePolyfill(fn){
    // pending;fulfilled;rejected
		this.id = Math.random();
    this.state = "pending";
    this.result = null;
    this.onFulfilleds = [];//成功的回调
    this.onRejecteds = []; //失败的回调
		// promise会捕获错误，传入reject
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

PromisePolyfill.prototype.then = function(success, failed){
	let prePromise = this;
	let promise2 =  new PromisePolyfill((resolve,reject)=>{
		// 将下一个promise的resolve操作放入到当前promise的resolve中
		let onFulfilled = ()=>{
			try{
				setTimeout(() => {
					 // 如果传入的不是函数，直接将本次接收到的值返回，实现then穿透
					 const preResult = prePromise.result
					 this.result = typeof success === 'function'? success(preResult) : preResult;
					 resolve(this.result)
				});
			}catch(err){
				reject(err)
			}
		}

		let onRejected = ()=>{
			try{
				setTimeout(() => {
					const preResult = prePromise.result
					this.result = typeof failed === 'function'? failed(preResult) : preResult;
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

console.log("第一次")
let p = new PromisePolyfill((resolve,reject)=>{
	console.log("第二次")
	setTimeout(() => {
		console.log("第四次")
		resolve(1)
	});
})
.then("")
.then((res)=>{
	console.log("第五次")
	return 3;
}).then((res)=>{
	console.log("第六次")
})

console.log("第三次")

