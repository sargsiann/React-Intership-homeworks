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
        if (this.state === "fulfilled") {
			let p = new MyPromise();	
			try {
				p.state = "fulfilled";
				p.value = queueMicrotask(() => cb(this.value))
			} catch (error) {
				p.state = "rejected";
				p.reason = error;
			}
			console.log(p);
			return p;
		}
    };

    this.catch = function (cb) {
        if (this.state === "rejected") {
			let p = new MyPromise();
			try {
				p.state = "fulfilled";
				p.value = queueMicrotask(() => cb(this.value))
			} catch (error) {
				p.state = "rejected";
				p.reason = error;
			}	
			return p;
		}
    };

    this.getState = function () {
        console.log(this.state, this.value, this.reason);
    };

	this.finally = function() {
		co
	}

	if (callback)
    	callback(this.resolve.bind(this), this.reject.bind(this));
}

let p = new MyPromise((res,rej) => {
	res(3);
});

p.then(console.log)

