"use strict"

// UTILS

const users = [
	{
	username: "Yuri Gagarin",
	lang: "ru",
	},
	{
	username: "Nil Armstrong",
	lang: "ENG",
	},
];


// 1.)


function	concateArrs(arr1,arr2){
	if (arguments.length == 2 && Array.isArray(arr1) && Array.isArray(arr2)){
		return arr1.concat(arr2);
	}
}

// console.log(concateArrs([1,2],[2,3]));

// 2.) 


function	phraseToAcr(str){
	if (typeof str == 'string'){
		return str.split(' ').map((s)=>s.toUpperCase()[0]).join('');
	}
}


// 3.)

function	scoreOfWord(str){
	if (typeof str == 'string'){
		let table = ["aeioulnrst","dg","bcmp","fhvwy","k","jx","qz"];
		let sum = 0;
		for (let i = 0; i < str.length; i++){
			for (let j = 0; j < table.length; j++){
				if (table[j].includes(str[i])){
					sum += j+1;
				}
			}
		}
		return sum;
	}
}

// 4.)

function	usernamesArr(arr){
	if (Array.isArray(arr)){
		return arr.map((s)=>s.username);
	}
}

// console.log(usernamesArr(users));

// 5.)

function	userNamesLen(arr){
	if (Array.isArray(arr)){
		return arr.map((s)=>s.username.length);
	}
}

// console.log(userNamesLen(users));

// 6.)

function	parseIntegers(arr){
	if (Array.isArray(arr)){
		return arr.map((s)=>{
			if (parseInt(s))
				return parseInt(s);
			return null;
		});
	}
}

// console.log(parseIntegers(["1", "px", "2323"]));

// 7.)

function	filterNums(arr){
	if (Array.isArray(arr)){
		return arr.filter((s)=>typeof s == 'number' && !isNaN(s));
	}
}

// console.log(filterNums([1, "a", "2", 3,NaN]));

// 8.)

function	filterUsers(arr){
	if (Array.isArray(arr)){
		return arr.filter((s)=>s.lang != 'ru');
	}
}

// 9.)

// I ADDED FOR VALUE CHECKIG ALSO

function	filterByField(arr,field,value){
	if (Array.isArray(arr)){
		return arr.filter((s)=>s[field] != value);
	}
}

// 10.)

function	sumMore18(arr){
	if (Array.isArray(arr)){
		return arr.reduce((acc,s)=>{
			if (s > 18)
				return acc + s;
			return acc;
		},0);
	}
}

// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

// console.log(sumMore18(arr));

// 11.)

function	getAverage(arr){
	if (Array.isArray(arr)){
		return arr.reduce((acc,s)=>acc + s,0)/arr.length;
	}
}

// 12.)

function	sortBy(arr,str){
	if (Array.isArray(arr)){
		if (str == 'desc'){
			return arr.sort((a,b)=>b-a);
		}
		if (str !== 'asc' && str !== 'desc')
			return 'Invalid argument';
		return arr.sort((a,b)=>a-b);
	}
}

// console.log(sortBy(arr,'desc'));
// console.log(sortBy(arr,'asc'));

// 13.

// UNSHIFT

function	myUnshift(arr,elem){
	let start_len = arr.length;
	arr.length += arguments.length - 1;
	for (let i = start_len - 1; i >= 0;i--)
		arr[i + arguments.length - 1] = arr[i];
	for (let i = 0; i < arguments.length - 1;i++)
		arr[i] = arguments[i + 1];
	return arr.length;
}

// myUnshift([1,2,3,4],-4,-3,-2,-1,0);

// SHIFT

function	myShift(arr){
	if (arr.length != 0){
		let ret = arr[0];
		arr[0] = undefined;
		for (let i = 1; i < arr.length;i++){
			arr[i - 1] = arr[i];
		}
		arr.length -= 1;
		return ret;
	}
}

// console.log(myShift([3]));

// POP

function	myPop(arr){
	if (arr.length != 0){
		let ret = arr[arr.length - 1];
		delete(arr[arr.length - 1]);
		arr.length -= 1;
		return ret;
	}
}
// console.log(myPop([1]));

// PUSH

function	myPush(arr,...args){
	let start_len = arr.length;
	arr.length += arguments.length - 1;
	for (let i = start_len;i < arr.length;i++)
		arr[i] = arguments[i + 1 - start_len];
	console.log(arr);
	return arr.length;
}

// console.log(myPush([],3));


// FOR EACH


function	myForEach(arr,callBack){
	for (let i = 0; i < arr.length; i++){
		callBack(arr[i],i,arr);
	}
}

// myForEach([1,2,3,4],(s)=>console.log(s));

// FIND INDEX

function	myFindIndex(arr,callBack){
	for (let i = 0; i < arr.length; i++){
		if (callBack(arr[i]))
			return i;
	}
	return -1;
}

// console.log(myFindIndex([1,2,3,4],(s)=>s % 2 == 0));

// FIND

function	myFind(arr,callBack){
	for (let i = 0; i < arr.length; i++){
		if (callBack(arr[i]))
			return arr[i];
	}
	return -1;
}

// EVERY

function	myEvery(arr,callBack){
	for (let i = 0; i < arr.length; i++){
		if (!callBack(arr[i]))
			return false;
	}
	return true;
}

// SOME

function	mySome(arr,callBack){
	for (let i = 0; i < arr.length; i++){
		if (callBack(arr[i]))
			return true;
	}
	return false;
}

// MAP

function	myMap(arr,callBack){
	let ret = [];
	for (let i = 0; i < arr.length; i++){
		ret[i] = callBack(arr[i]);
	}
	return ret;
}

// console.log(myMap([1,2,3,4],(s)=>s*2));

// FILTER

function	myFilter(arr,callBack){
	let ret = [];
	for (let i = 0; i < arr.length; i++){
		if (callBack(arr[i]))
			ret.push(arr[i]);
	}
	return ret;
}

// console.log(myFilter([1,2,3,4],(s)=>s % 2 == 0));

// REDUCE

function	myReduce(arr,callBack,init){
	let acc = init;
	for (let i = 0; i < arr.length; i++){
		acc = callBack(acc,arr[i]);
	}
	return acc;
}

// console.log(myReduce([1,2,3,4],(acc,s)=>acc+s,10));

// SLICE

function	mySlice(arr,start = 0,end = arr.length){
	let copy = [];
	start = start < 0 ? arr.length + start: start;
	end = end < 0? arr.length + end: end;
	for (;start < end;start++){
		if (start >= arr.length)
			break;
		copy.push(arr[start]);
	}
	return copy;
}

let arr = [1,2,3,4,5,6,7,8,9];


function	mySplice(arr, start = 0, count = arr.length - start, ...args){
	let removed = [];

	start = start < 0 ? arr.length + start: start;

	removed = arr.slice(start,start + count);

	let right = arr.slice(start + count);
	
	arr.length = start;
	arr.push(...args);
	arr.push(...right);
	
	console.log(removed);
	return removed;
}

// mySplice(arr,-2,1,"A","B","C");
// console.log(arr);

console.log(arr.splice(-2,1,"A","B","C"));
console.log(arr);


function	myFlat(arr,depth) {
	let newarr = [];
	if (depth <= 0)
		return arr;
	for (let i = 0; i < arr.length; i++){
		if (Array.isArray(arr[i])) {
			let tmp = myFlat(arr[i],--depth);
			for (let j = 0; j < tmp.length; j++){
				newarr.push(tmp[j]);
			}
		}
		else
			newarr.push(arr[i]);
	}
	return newarr;
}

// let arr = [1,2,3,[4,5,[6,7,[8,9]]]];

// console.log(myFlat(arr,1));
