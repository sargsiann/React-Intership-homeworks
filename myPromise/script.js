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
			queueMicrotask(cb(this.value));
		}
    };

    this.catch = function (cb) {
        if (this.state === "rejected") {
			queueMicrotask(cb(this.reason));
		}
    };

    this.getState = function () {
        console.log(this.state, this.value, this.reason);
    };

    callback(this.resolve.bind(this), this.reject.bind(this));
}

let p = new MyPromise((res,rej) => {
	res(3);
});

p.then(console.log)

