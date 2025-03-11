"use strict"

// UTILS 

function	checkValidNum(num)
{
	if (typeof num != "number" || isNaN(num)){
		console.log("Wrong argument, requires valid number");
		return false;
	}
	return true;
}

// EXERCISE 1

function	calcSum(n)
{
	if (!checkValidNum(n))
		return ;
	if (n <= 0){
		console.log("N must be natural");
		return ;
	}
	console.log(`${n * (n + 1) / 2}`); 
}

// calcSum(0);

// EXERCISE 2

function	includesDigit(digit, num)
{
	if (checkValidNum(digit) && checkValidNum(num)){
		if (digit < 0 || digit > 9){
			console.log("digit must be from 0 to 9");
			return ;
		}
		num += "";
		for (let i = 0; i < num.length;i++)
		{
			if (num[i] == digit){
				console.log("Yes");
				return ;
			}
		}
		console.log("No");
	}
}

// includesDigit(3,331414414)

// EXERCISE 3

function	sumOfDigits(num)
{
	if (checkValidNum(num)){
		let sum = 0;
		while (num != 0){
			sum += num % 10;
			num = Math.floor(num / 10);
		}
		console.log(sum);
	}
}

// sumOfDigits(2344);


// EXERCISE 4

function reverseFirstLast(num)
{
	if (checkValidNum(num)){
		let sign = 1;
		if (num < 0){
			sign = -1;
			num = -num;
		}
		if ((num + "").length == 1){
			console.log(num);
			return ;
		}
		let numLen = (num + "").length;
		let first = Math.floor(num / (10 ** (numLen - 1)));
		let last = num % 10;
		num = (num - first * (10 ** (numLen - 1))) - last + first + last * (10 ** (numLen - 1));
		num *= sign;
		console.log(num);
	}
}

// reverseFirstLast(-1223)

// EXERCISE 5

function sumMinMax(num)
{
	if (checkValidNum(num)) {
		if (num < 0)
			num *= -1;
		let strNum = num + "";
		let sum = 0;
		let min = strNum[0];
		let max = strNum[0];
		for (let i = 1;i < strNum.length; i++){
			if (strNum[i] > max)
				max = strNum[i];
			else if (strNum[i] < min)
				min = strNum[i];
		}
		sum = +min + +max;
		console.log(sum);
	}
}

// sumMinMax(-2123);

// EXERCISE 6

function	isQuotent(num)
{
	if (checkValidNum(num)){
		let sum = 0;
		let prod = 1;
		while (num != 0){
			sum += num % 10;
			prod *= num % 10;
			num = Math.floor(num / 10);
		}
		if (sum == 0){
			console.log("Cannot divide by zero");
			return ;
		}
		if (prod % sum == 0){
			console.log(`Quotient is ${prod / sum}`);
			return ;
		}
		console.log(`Remainder is ${prod % sum}`);
	}
}

// isQuotent(455);

// EXERCISE 7

function	printFibonnaci(n)
{
	if (checkValidNum(n)){
		if (n <= 0){
			console.log("N must be bigger than 0");
			return ;
		}
		let first = 0;
		let	sec = 1;
		let tmp;
		for (let i = 0; i < n;i++)
		{
			console.log(first);
			tmp = first;
			first = sec;
			sec = tmp + first;
		}
	}
}

// printFibonnaci(1);