"use strict"

// WORKING CHAINING ERROR GETTING REMAINS ADDING CB S TO MICRO TASKS

function MyPromise(callback) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

	function	resolve(val) {
		if (this.state !== 'pending') return ;
		this.state = "fulfilled";
		this.value = val;
	}

	function	reject(res) {
		if (this.state !== 'pending') return ;
		this.state = "rejected";
		this.reason = res;
	}

	this.then = function(onResolve, onError) {
		let state = this.state;
		let val = this.value;
		let reason = this.reason;
	
		return new MyPromise((res, rej) => {
			queueMicrotask(() => {
				if (state === "fulfilled") {
					try {
						let v = val;
						if (onResolve !== undefined)
							v = onResolve(val);
						if (v instanceof MyPromise)
						{
							if (v.state == "fulfilled")
								res(v.value);
							else if (v.state == "rejected") {
								rej(v.reason);
							}
							else
								return ;
						}
						res(v);
					} catch (error) {
						rej(error);
					}            
				}
				else if (state === "rejected") {
					try {
						let v = reason;
						if (onError !== undefined)
							v = onError(reason);
						if (v instanceof MyPromise)
						{
								if (v.state == "fulfilled")
									res(v.value);
								else if (v.state == "rejected") {
									rej(v.reason);
								}
								else
									return ;
						}
						rej(v);
					} catch (error) {
						rej(error);
					}
				}
			});
		});
	};
	

	this.catch = function(onError) {
		return this.then(undefined,onError);
	}

	this.finally = function(cb) {
		queueMicrotask(() => cb);
	} 

	try {
		callback(resolve.bind(this),reject.bind(this));
	} catch (error) {
		reject.call(this,error);
	}
}

let p1 = new Promise((res,rej) => {
	res(1);
	throw 2;
});
let p2 = new MyPromise((res,rej) => {
	res(1);
	throw 2;
})


// console.log(p2.then((v) => console.log(v * 2)).then((v) => {throw 2}).catch(console.log).finally(console.log("addaad")));

console.log(p2.then(() => new MyPromise((r,s) => r(2))));

// console.log(p1.catch(() => undefined));