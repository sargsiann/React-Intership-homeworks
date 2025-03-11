"use strict"

// UTILS 

function	checkValidnum(num){
	if (typeof(num) != "number" || num !== num){
		console.log("Numeric Argument required");
		return false;
	}
	return true;
}

// EXERCISE 1

function oddOrEven(num)
{
	if (checkValidnum(num)){
		if (num % 2 == 0){
			console.log("even");
		}
		else
			console.log("odd");
	}
}

// EXERCISE 2

function	checkDividing(num)
{
	if (checkValidnum(num)){
		let message = `${num} is `
		if (num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
			if (num % 3 == 0){
				message += `multiplie of 3`
				if (num % 5 == 0){
					if (num % 7 == 0)
						message += `,5 or 7`;
					else
						message += ` and 5`;
				}
				else if (num % 7 == 0)
					message += ` and 7`;
			}
			else if (num % 5 == 0){
				message += 	`multiplie of 5`
				if (num % 7 == 0)
					message += ` and 7`;
			}
			else if (num % 7 == 0){
				message += `multiplie of 7`
			}
		} 
		else
			message += `not multiple of 3,5 or 7`;
		console.log(message);
	}
}

// checkDividing(49);

// EXERCISE 3

function	defineAge(num, age)
{
	if (checkValidnum(num)){
		if (age === "months"){
			if (num < 0 || num > 12){
				console.log("Months must be from 0  to 12");
				return ;
			}
			console.log("Baby");
		}
		else if (age === "years"){
			if (num < 0){
				console.log("Num cant be negative");
			}
			if (num >= 1 && num <= 2)
				console.log("Todler");
			else if (num >= 3 && num <= 12)
				console.log("Child");
			else if (num >= 13 && num < 18)
				console.log("Teenager");
			else
				console.log("Adult");
		}
		else 
			console.log("Invalid age type");
	}
}

// defineAge(12, "years");
// defineAge(12, "months");
// defineAge(32,"years");
// defineAge(32,"months");

// EXERCISE 4

function sortByAccending(num1, num2, num3)
{
	if (arguments.length != 3){
		console.log("3 arguments required");
		return ;
	}
	if (checkValidnum(num1) && checkValidnum(num2) && checkValidnum(num3)){
		let temp;
		if (num1 > num2){
			temp = num1;
			num1 = num2;
			num2 = temp;
		}
		if (num1 > num3){
			temp = num1;
			num1 = num3;
			num3 = temp;
		}
		if (num2 > num3){
			temp = num2;
			num2 = num3;
			num3 = temp;
		}
		console.log(num1, num2, num3);
	}
}

// sortByAccending(3, 2, 1);
// sortByAccending(3, 1, 2);
// sortByAccending(2, 3, 1);
// sortByAccending(2, 1, 3);
// sortByAccending(1, 2, 3);
// sortByAccending(1, 3, 2,4,5);

// EXERCISE 5

function	isPassed(mark1, mark2, mark3)
{
	if (arguments.length != 3){
		console.log("3 arguments required");
		return ;
	}
	if (checkValidnum(mark1) && checkValidnum(mark2) && checkValidnum(mark3)){
		if (mark1 >= 40 && mark2 >= 40 && mark3 >= 40)
			console.log("Passed");
		else if (mark1 < 40 && (mark2 >= 40 && mark3 >= 40)
		&& (mark1 + mark2 + mark3)/3 >= 50)
				console.log("Passed");
		else if (mark2 < 40 && (mark1 >= 40 && mark3 >= 40)
		&& (mark1 + mark2 + mark3)/3 >= 50)
			 console.log("Passed");
		else if (mark3 < 40 && (mark2 >= 40 && mark1 >= 40) 
		&& (mark1 + mark2 + mark3)/3 >= 50)
				console.log("Passed");
		else
			console.log("Failed");
	}
}

// isPassed(20, 40, 40);


// EXERCISE 6

function calcArea(shape, num1, num2)
{
	if (arguments.length != 3){
		console.log("3 arguments required");
		return ;
	}
	if (checkValidnum(num1) && checkValidnum(num2)){
		if (num1 <= 0 || num2 <= 0){
			console.log("Only natural numbers are allowed");
			return ;
		}
		if (shape === "rectangle"){
			console.log(`Area of rectangle is ${num1 * num2}`);
		}
		else if (shape === "triangle"){
			console.log(`Area of triangle is ${num1 * num2 / 2}`);
		}
		else
			console.log("Invalid shape");
	}
}

// calcArea("rectangle", 2, 3);
// calcArea("triangle", 2, 3);
// calcArea("triangle", 0, 3);
// calcArea("triangle", 2, -3);

// EXERCISE 7

function	solveQuadratic(a,b,c)
{
	if (arguments.length != 3){
		console.log("3 arguments required");
		return ;
	}
	if (checkValidnum(a) && checkValidnum(b) && checkValidnum(c)){
		if (a == 0){
			console.log("a cant be 0");
			return ;
		}
		let D = b * b - 4 * a * c;
		if (D > 0){
			let x1 = (-b + Math.sqrt(D)) / (2 * a);
			let x2 = (-b - Math.sqrt(D)) / (2 * a);
			console.log(`Solutions are ${x1} and ${x2}`);
		}
		else if (D == 0){
			let x = -b / (2 * a);
			console.log(`Solution is ${x}`);
		}
		else
			console.log("Solution does not exist");
	}
}

// solveQuadratic(1, 5, 6);
// solveQuadratic(1, 2, 1);
// solveQuadratic(1, 2, 3);
// solveQuadratic(0, 2, 3);

// EXERCISE 8

/* CANT CHANGE CONSTANS IN JS 

		let n = +prompt("Enter a number");

		const i = 0;
		const j = 0;

		if (n % 2 == 0 && !Math.floor(n/10))
			i += 1; 

		if (n % 3 === 0 && n % 10 === 1)
			j += 1;
*/

// EXERCISE 9

function	getMonthDays(month)
{
	if (checkValidnum(month)){
		if (month < 1 || month > 12){
			console.log("Month must be from 1 to 12");
			return ;
		}
		if (month == 2)
			console.log("28 or 29 days");
		else if (month == 4 || month == 6 || month == 9 || month == 11)
			console.log("30 days");
		else
			console.log("31 days");
	}
}

// getMonthDays(2);
// getMonthDays(4);