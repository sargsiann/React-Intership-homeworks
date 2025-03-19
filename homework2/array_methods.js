"use strict"

const products = [{ name: 'Անձեռոցիկ', price: '400դրամ', producer: 'Ախթամար ՍՊԸ', count: 300 }, { name: 'Ատամի  մածուկ', price: '1250դրամ', producer: 'Քոլգեյթ ՍՊԸ', count: 234 }, { name: 'Զուգարանի թուղթ', price: '200դրամ', producer: 'Զիվա ՍՊԸ', count: 120 }, { name: 'Տուփ', price: '10դրամ', producer: 'Յունիփաք գրուփ', count: 1000 }, { name: 'Թաց անձեռոցիկ', price: '600դրամ', producer: 'Ախթամար ՍՊԸ', count: 600 }, { name: 'Ատամի խոզանակ', price: '960 դրամ', producer: 'Քոլգեյթ ՍՊԸ', count: 333 }, { name: 'Սպունգ', price: '300դրամ', producer: 'Զիվա ՍՊԸ', count: 340 }, { name: 'Գտդալ', price: '7դրամ', producer: 'Յունիփաք գրուփ', count: 2000 }];

// UTIL FUNCS

function	myRandom(min, max)
{
	let rand = min + Math.random() * (max - min);
	return Math.floor(rand);
}

// 1.)

function	filterByPrice(arr,price){
	if (Array.isArray(arr) && typeof price === 'number' && !isNaN(price)) {
		return arr.filter((item) => parseInt(item.price) > price);
	}
	console.log('Invalid input');
}

let filteredProducts = filterByPrice(products, 500);
// console.log(filteredProducts);

// 2.)

let specific = findFirstSpecific(products, 'Ախթամար ՍՊԸ', 400);

function	findFirstSpecific(arr, producer, price)
{
	// FIND RETURN FIRST MATCHING ELEM
	if (Array.isArray(arr) && typeof producer === 'string' && typeof price === 'number' && !isNaN(price)) {
		return arr.find((item) => item.producer == producer && parseInt(item.price) == price);
	}
	console.log('Invalid input');
}

// console.log(specific);

// 3.)

function	giveIds(arr){
	if (Array.isArray(arr)) {
		return arr.map((item, index,array) => {
			item.id = myRandom(1, array.length);
			return item;
		});
	}
	console.log('Invalid input');
}

let productsWithIds = giveIds(products);

// console.log(productsWithIds);

// 4.)
function	simplifyArr(arr){
	if (Array.isArray(arr)) {
		return arr.map((item) => {
			return {name: item.name, count: item.count};
		});
	}
	console.log('Invalid input');
}

// 5.)

// let elem  =	products.find((item) => parseInt(item.price) == 7);

// 6.)

function	groupByProducer(arr){
	if (Array.isArray){
		let o =  arr.reduce((obj,elem)=>{
			if (obj[elem.producer] == undefined){
				obj[elem.producer] = {};
				obj[elem.producer][elem.producer] = [];
			}
			else
				obj[elem.producer][elem.producer].push(elem);
			return obj;
		},{})
		return Object.values(o);
	}
	console.log("Invalid input");
}

let newArr = groupByProducer(products);

// console.log(newArr)

// 7.)

let armenianAlphabet = "ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ";

// HOPE IT IS THE OPTIMAL WAY

function	makeEnglishfromArmenian(armenianAlphabet)
{
	if (Array.isArray(armenianAlphabet)){
		let obj = {
			'Ա': 'A',
			'Բ': 'B',
			'Գ': 'G',
			'Դ': 'D',
			'Ե': 'YE',
			'Զ': 'Z',
			'Է': 'E',
			'Ը': 'Y',
			'Թ': 'TH',
			'Ժ': 'ZH',
			'Ի': 'I',
			'Լ': 'L',
			'Խ': 'KH',
			'Ծ': 'TS',
			'Կ': 'K',
			'Հ': 'H',
			'Ձ': 'DZ',
			'Ղ': 'GH',
			'Ճ': 'CH',
			'Մ': 'M',
			'Յ': 'Y',
			'Ն': 'N',
			'Շ': 'SH',
			'Ո': 'VO',
			'Չ': 'CH',
			'Պ': 'P',
			'Ջ': 'J',
			'Ռ': 'R',
			'Ս': 'S',
			'Վ': 'V',
			'Տ': 'T',
			'Ր': 'RY',
			'Ց': 'TC',
			'ՈՒ': 'U',
			'Փ': 'P',
			'ԵՎ' : 'YEV',
			'Ք': 'Q',
			'Օ': 'O',
			'Ֆ': 'F'
		};
		return armenianAlphabet.map((item,index)=>{
			obj[item];
		})
	}
}