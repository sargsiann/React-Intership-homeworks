import { LIB_URL,PAGE_LIMIT,BOOKS_LIMIT } from "./consts"

let	req_id = undefined;

function	getCover(cover_id) {

}

export async	function	getAllBooks() {
	// INITIALS
	let url = LIB_URL + BOOKS_LIMIT + PAGE_LIMIT;
	let f = fetch(url);
	return f.then((d) => d.json());
}

function	getFilteredArr(field,param,arr) {
	switch (field) {
		case 'author':
			return arr.filter((i) => {
				for (let elem of i.author_name)
				{
					if (elem.includes(param))
						return i;				
				}
		});  
		case 'title' :
			return arr.filter((i) => i.title.includes(param));
		case 'pub_year' :
			return arr.filter((i) => i.first_publish_year === +param);
		default :
			return arr;
	}
}

function	getBookCoverURL(cover_id,cover_ed_key) {

	return `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
}

export	async	function	getBooks(field,param) {
	if (req_id)
		clearTimeout(req_id);
	let p = new Promise((res,rej) => {
		req_id = setTimeout(() => {
			let f = fetch(LIB_URL);
			f.then((d) => d.json()).then((d) => {
				let arr = getFilteredArr(field,param,d.docs);
				res(arr.map((i) => {
					let a = {
						title : i.title,
						id : i.cover_i,
						coverURL : getBookCoverURL(i.cover_i,i.cover_edition_key),
						pub_year : i.first_publish_year,
						authors : i.author_name,
					}
					return a;
				}));
			});
		},1000);
	})
	return p;
}



// https://openlibrary.org/search.json?q=all&limit=100&page=1
// https://openlibrary.org/search.json?q=all&limit=100&page=1
