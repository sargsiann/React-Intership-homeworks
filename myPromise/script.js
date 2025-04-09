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

}

let p = new MyPromise((res,rej) => {
	throw "adadd";
});

let []

console.log(p.then());