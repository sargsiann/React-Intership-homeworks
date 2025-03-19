"use strict"

 
//  1 .) 
//  DECLARING MESSAGE AT TOP
 
let message;
function greet() {
	message = "Hello, world!";
  }
greet();


// console.log(message);

// 2. )


function square(num) {
	// WE NEED TO ADD RETURN STATEMENT FOR RETURNING THE VALUE
	return num * num;
}
// console.log(square(4));




// 3.)

function divide(a, b) {
	// IN CASE IF B  == 0
	if (b == 0){
		console.log("Cant divide 0");
		return null;
	}
	return a / b;
}

// console.log(divide(10, 0));

// 4 .)


function printAge(age) {
	// USING THE SAME AGE 
	console.log(age);
}
//   printAge(25);

// 5.)

function calc() {
	return 10 * 10;
}

// WE CAN  JUST CHANGE THE NAME OF TWO S

function mul(x) {
	return x * x;
}

//   console.log(calc(5));


// 6.)

let x = 10;
function test() {
  let x = 20;
}
test();
// console.log(x);

// WILL BE LOGED 10 BECAUSE CONSOLE.LOG SEE S GLOBAL SCOPE


// 7.)

// console.log(add(10, 5));
function add(a, b) {
  return a + b;
}

// WILL BE LOGGED 15 WITHOUT ANY ERRORS BECAUSE FUNCTION DECLARATION ALLOWS US USE FUNCTION BEFORE DEFINITION

//  8.)


let num = 30;
function showNum() {
  let num = 20;
  console.log(num);
}
// showNum(); // What will be logged? will be logged 20 for the scope of fucntion
// console.log(num); // What will be logged? will be logged 30

// 9.)


function outer() {
	let count = 1;
	function inner() {
	  return count++;
	}
	return inner;
  }
  let counter = outer(); // will be returned inner function (not the result) and scope will use outer s scope 
//   console.log(counter()); // What will be logged? adding count will be logged 1 at this time because it postfix count = 2
//   console.log(counter()); // What will be logged? in this case will logged 2 and count became 3

// 10.)

(function immediate(number) {
	const message = "Number is: ";
	console.log(message + number);
  })(5); 

// WILL BE IMEDIATLY LOGGED NUMBER IS 5 and after we cant use that func

// 11.)

function	factorial(n){
	if (typeof n !== "number" || isNaN(n)){
		console.log("Please enter a number");
		return;
	}
	if (n < 0){
		console.log("Please enter a positive number");
		return;
	}
	if(n === 0){
		return 1;
	}
	return n * factorial(n-1);
}

// 12 .)

function	isPalindrame(str){
	if (typeof str !== "string"){
		console.log("Please enter a string");
		return;
	}
	let len = str.length;
	if (!len){
		return false;
	}
	for (let i = 0; i < len / 2; i++){
		if (str[i] !== str[len - 1 - i]){
			return false;
		}
	}
	return true;
}

// console.log(isPalindrame("a"));

// 13.)

function	isLeapYear(y){
	if (typeof y !== "number" || isNaN(y)){
		console.log("Please enter a number");
		return;
	}
	if (y % 4 === 0){
		if (y % 100 === 0){
			if (y % 400 === 0){
				return true;
			}
			return false;
		}
		return true;
	}
	return false;
}

// 14.)

function	myPow(num,base){
	if (typeof num !== "number" || isNaN(num) || typeof base !== "number" || isNaN(base)){
		console.log("Please enter a number");
		return;
	}
	if (base > 0){
		return num ** base;
	}
	if (base < 0){
		return 1 / (num ** base);
	}
	return 1;
}

// 15.)

// let a = (()=>()=>1)();

// THE RESULT WILL be arrow function ()=>1 because we are returning arrow function