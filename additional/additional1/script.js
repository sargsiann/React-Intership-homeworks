let	obj1 = {
	a : "Davo",
	b	: "Harut",
	c : {
		a : "Goqor",
		d : {
			b : "Garik",
			d : "Surik",
			e : {
				a : "AAA",
			}
		}
	},
	d : "Vazgen",
}

// DEEP CLOENING

function	recursiveClone(obj)
{
	let	obj2 = {};

	for (let keys in obj)
	{
		if (typeof obj[keys] == 'object')
		{
			obj2[keys] = recursiveClone(obj[keys]);
			continue ;
		}
		obj2[keys] = obj[keys];
	}
	return obj2;
}

// UTIL FUNCTIONS

function	isValidNum(num)
{
	if (typeof num != 'number' || isNaN(num)){
		console.log("Wrong Number");
		return false;
	}
	return true;
}

function	isValidString(str){
	if (typeof str != 'string' || str == ""){
		console.log("Invalid String");
		return false;
	}
	return true;
}

function	myRandom(a,b)
{
	return Math.floor(Math.random() * (b - a) + a);
}

function	numIsPrime(num)
{
	if (isValidNum(num)){
		if (num < 2)
			return false;
		for (let i = 2; i <= Math.sqrt(num); i++){
			if (num % i == 0)
				return false;
		}
		return true;
	}
}

function	compareObjs(obj1,obj2){
	if (typeof obj1 != 'object' || typeof obj2 != 'object'){
		console.log("Arguments must be objects");
		return ;
	}
	for (let key in obj1){
		if (obj1[key] != obj2[key])
			return false;
	}
	return true;
}

function	hasThisObj(arr,obj)
{
	for (let elem of arr){
		if (compareObjs(elem,obj))
				return true;
	}
	return false;
}

// --------------------------------------------------------------------------------

// JS BASICS LEVEL

// EVEN OR ODD

function evenOrOdd(num)
{
	if (isValidNum(num)){
		return num % 2 == 0 ?  "Even" : "Odd";
	}
}

// console.log(evenOrOdd("a"))

// FIND MAXIMUM OF TWO S

function	findMax(a,b)
{
	if (isValidNum(a) && isValidNum(b)){
		if (arguments.length != 2){
			console.log("Arguments must be 2");
			return ;
		}
		return a > b ? a : b;
	}
}

// RECTANGLE AREA

function	rectArea(a,b)
{
	if (isValidNum(a) && isValidNum(a) ){
		if (a <= 0 || b <= 0){
			console.log("Side cant be less or equal to 0");
			return ;
		}
		return a * b;
	}
}

// RANDOM GAME

function	guessRandom()
{
	
		let random = myRandom(1,100);
		let num;
		do{
			num = prompt("Guess the num");
			if (!num)
				return ;
			if (!isValidNum(+num)){
				console.log("Type numeric");
				continue;
			}
			if (num > random)
				console.log("Too high");
			if (num < random)
				console.log("Too low");
		}while(num != random);
		console.log("YESS!");
}

// console.log(myRandom(1,20));

// guessRandom();

// POWER OF NUM

function	myPow(num,exp)
{
	if (isValidNum(num) && isValidNum(exp)){
		let pow = 1;
		if (exp > 0){
			for (let i = 0; i < exp; i++)
				pow *= num; 
		}
		if (exp < 0){
			for (let i = 0; i != exp; i--)
				pow /= num;
		}
		return pow;
	}
}

// console.log(myPow(2,0));

// LEAP YEAR CHECKER 

function	isLeapYear(year)
{
	if (isValidNum(year)){
		if (year % 4 == 0){
			if (year % 100 == 0 && year % 400 == 0){
				return true;
			}
			if (year % 100 == 0)
				return false;
			return true;
		}
	}
}

// console.log(isLeapYear(24));

// CALCULATOR

function	calc(a,b,op){
	if (isValidNum(a) && isValidNum(b)){
		if (op == '+')
			return a + b;
		if (op == '-')
			return a - b;
		if (op == '*')
			return a * b;
		if (op == '/'){
			if (b == 0){
				console.log("Division by 0");
				return ;
			}
			return a / b;
		}
		console.log("Wrong operator");
	}
}

// PRIME NUMS SUMMARY

function	primeNumsSummary(num)
{
	if (num <= 1){
		console.log("Number must be greater than 1");
		return ;
	}
	if (isValidNum(num)){
		let sum = 0;
		for (let i = 2; i <= num; i++){
			if (numIsPrime(i))
				sum += i;
		}
		return sum;
	}
}

// console.log(primeNumsSummary(10));

// PYRAMID PATTERN OF *

function	pyramidPattern(rows)
{
	let str;
	let half = Math.ceil((2 * rows - 1) / 2);
	console.log(half);
	for (let i = 0;i < rows;i++){
		str = "";
		for (let j = 0; j < 2 * rows - 1; j++){
			if (j >= half - i - 1 && j <= half + i - 1)
				str += "*";
			else
				str += " ";
		}
		console.log(str);
	}
}

// pyramidPattern(5);

// ------------------------------------------------------------------------------
// OBJECTS,ARRAYS,FUNCTIONS

// CAR FACTORY

function	carFactory(brand,model,year){
	let car ={};
	if (isValidString(brand) && isValidString(model) && isValidNum(year))
	{
		car.brand = brand;
		car.model = model;
		car.year = year;
		return car;
	}
	return ;
}

// MERGE OBJECTS

function	mergeObjs(o1,o2){
	if (typeof o1 != 'object' || typeof o2 != 'object'){
		console.log("Arguments must be objects");
		return ;
	}
	let merged = {};
	for (let key in o1)
		merged[key] = o1[key];
	for (let key in o2)
		merged[key] = o2[key];
	return merged;
}

// let o1 = {a :2};
// let o2 = {a :3};
// 
// console.log(mergeObjs(o1,o2));

// COUNT ELEMENTS FREQUENCY

function	countEachName(arr){
	let obj = {};
	for (let elem of arr){
		if (obj[elem] != undefined)
			obj[elem]++;
		else
			obj[elem] = 1;
	}
	return obj;
}

// console.log(countEachName(["d","d","d","x","a","a"]));

// GROUP USERS

function	groupUsers(obj){
	if (typeof obj == 'object'){
		let arr = [];
		for (let key in obj){
			let tmp = {
				name : key,
				age : obj[key].age
			};
			arr.push(tmp);
		}
		return arr;
	};
	console.log("Wrong Argument");
}

// console.log(groupUsers({
// 	"John" : {
// 		age : 25
// 	},
// 	"Jane" : {
// 		age : 23
// 	}
// }));

function	removeDuplicates(arr){
	if (Array.isArray(arr)){
		let cleanArr = [];
		for (let elem of arr){
			if (hasThisObj(cleanArr,elem) == false)
				cleanArr.push(elem);
		}
		return cleanArr;
	}
	console.log("Wrong Argument Must be Array");
}

let arr = [{name : "Davo"},{name : "Davo"},{name : "Harut"},{name : "Harut"},{name : "Harut"},];

// console.log(removeDuplicates(arr));

// --------------------------------------------------------------------------------

// VARIABLES AND CONDITIONALS

// 1).
// var a = 10;
// a++;

// YETE ANENQ CONSOLE LOG A-N KLINI 11 ISK ETE ANENQ CONSOLE LOG A++ KLINI 10

// 2).
// let userName = 'da2kdhaad';
// console.log(username);


// KTA ERROR VOROVHETEV CHKA username js y Case sensitive a reference error kta

// 3).
// const USER_TYPE = 'admin';
// USER_TYPE = 'user';

// kta error vorovhetev chka consti arjeq@ chi kareli poxel

// 4).
// let 3name = 'adda'

// kta error vorovhetev popoxakani anuny chi kara sksi tvov

// 5).
// 2 === 3 || 2 === '2' || 2 == '2'

// KTA TRUE ARAJI 2 Y KLINEN FALSE 3RDY TRUE XIST HAMEMATUM CHI

// 6).
// 1 && !null - undefined || 4

// !null - undefinedy kta NaN u ete miacnen NaN || 4 kta 4


// 7).
// 3 < 3 < 2 || !('2' + 1/NaN)

// yst prioritetneri skzbic kstananq 3 < 3 -> false heto false < 2 -> 0 < 2 -> true miangamic true sax

// !typeof typeof 1 || 5 === '5' || 'krecir'

// typeof 1 -> number typeof number -> string !string -> false verjum klini 'krecir' et kveradardzni


// 'help' && typof 'addaadad'

// ERROR TYPOF OPERATOR CHKA

// nuynnel hajordum typoef operator@ chka

// let name = prompt("Enter your name");
// 
// console.log("Hello dear" + name);

// let season = prompt("Enter the season");

// if (season == "winter"){
// 	console.log("Take warm clothes");
// }
// else if (season == "summer"){
// 	console.log("you can go to the beach");
// }
// else if (season == "spring"){
// 	console.log("trees are blossoming");
// }
// else if (season == "autumn"){
// 	console.log("too many colors outside");
// }
// else{
// 	console.log("Invalid season");
// }
