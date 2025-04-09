"use strict"

function MyPromise(callback) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.resolve = function (val) {
        if (this.state === "pending") {
            this.state = "fulfilled";
            this.value = val;
        }
    };

    this.reject = function (res) {
        if (this.state === "pending") {
            this.state = "rejected";
            this.reason = res;
        }
    };

    this.then = function (cb) {
		let reason = this.reason;
		let value = this.value;
        return new MyPromise((res,rej) => {
			if (this.state === "rejected") {
				rej(reason)
			}
			else if (this.state === "fulfilled") {
				try {
					let v = cb && cb(value);
					res(v);
				} catch (error) {
					rej(error);
				}
			}
		})
    };

    this.catch = function (cb) {
		let reason = this.reason;
		let value = this.value;
        return new MyPromise((res,rej) => {
			if (this.state === "fulfilled") {
				res(value);
			}
			else if (this.state === "rejected") {
				try {
					let v = cb && cb(reason);
					res(v);
				} catch (error) {
					rej(error);
				}
			}
		})
    };

    this.getState = function () {
        console.log(this.state, this.value, this.reason);
    };

	this.finally = function(cb) {
		cb && queueMicrotask(cb);
	}

	if (callback)
	{
		try {
			callback(this.resolve.bind(this), this.reject.bind(this));
		} catch (error) {
			this.reject(error);
		}
	}
}

let p = new MyPromise((res,rej) => {
	throw "adadd";
});

p.then(console.log).catch(console.log).then(console.log).finally()
