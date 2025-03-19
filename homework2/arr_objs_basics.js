"use strict"

let student = {
	name: "David Rayy",
	sclass : "VI",
	rollno : 12 
  };

// 1.)

// console.log(Object.keys(student));

// 2.)

// delete student.rollno;

// 3.)

// if there is an property we can get by student.length else we can get by Object.keys(student).length

// console.log(student.length ?? Object.keys(student).length);

// 4.)

// let key = prompt("key");

// console.log(student.hasOwnProperty(key));

// 5.)

let library = [ 
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true
	},
	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: true
	},
	{
		author: 'Suzanne Collins',
		title:  'Mockingjay: The Final Book of The Hunger Games', 
		readingStatus: false
	}];

// let book = prompt("book");
// let item = library.find((item) => item.title === book);

// if (item) {
// 	console.log(item.readingStatus);
// 	console.log(item.author);
// }

// 6.)

let arr = [['a',2],['b',3],['c',4]];

// obj = Object.fromEntries(arr);

// 7.)

function	cleanArr(arr) {
	return arr.filter((item) => Boolean(item));
}

// console.log(cleanArr([NaN, 0, 15, false, -22, '',undefined, 47, null]));

// 8.)

function	uniqueArr(arr) {
	let unique = [];
	for (let item of arr) {
		if (!unique.includes(item)) {
			unique.push(item);
		}
	}
	return unique;
}

// 9.)

function	reverseArr(arr) {
	let reversed = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		reversed.push(arr[i]);
	}
	// or reversed = arr.reverse
	return reversed;
}

let teamsData = [
	{ team: 'A', name: 'John', score: 12 },
	{ team: 'B', name: 'Mary', score: 13 },
	{ team: 'A', name: 'Karine', score: 15 },
	{ team: 'A', name: 'Aram', score: 34 },
	{ team: 'B', name: 'Davit', score: 12 },
	{ team: 'B', name: 'Tigran', score: 39 },
	{ team: 'A', name: 'Gayane', score: 9 },
	{ team: 'B', name: 'Elina', score: 12 },
];

function	groupByTeam(arr,team){
	let grouped = {};
	for (let item of arr) {
		if (item.team === team) {
			grouped[item.name] = item.score;
		}
	}
	return grouped;
}

let a = groupByTeam(teamsData,'A');
let b = groupByTeam(teamsData,'B');

// console.log(a);
// console.log(b);