import { useEffect, useRef, useState } from 'react'
import {getAllBooks,getBooks} from './apis/api.js'
import './App.css'

function	Books(props) {
	return props.books.map((i) => {
		return <div id={i.id} className='col-3 border border-primary"'>
			<h4>{i.title}</h4>
			<p>{i.authors.join(' ,')}</p>
			<img src={i.coverURL} className='cover_image'></img>
			<p>{i.pub_year}</p>
		</div>
	})
}

function App() {
	let [theme,setTheme] = useState('black');
	let [books,setBooks] = useState([]);
	let	[input,setInput] = useState('');
	let [filter,setFilter] = useState('');
 
	useEffect(() => {
		console.log(filter,input);
		let p = getBooks(filter,input);
		p.then((d) => {
			setBooks(d);
		} );
	},[input]);

	function	handleInput(e) {
		setInput(e.target.value);
	}

	function	handleTheme() {
		setTheme(theme === 'black' ? 'white' : 'black');
	}

	function	handleFilter(e) {
		if (e.target.value === '')
			setInput('');
		setFilter(e.target.value);
	}

	return (
		<div className={theme === 'black' ? 'bg-dark text-white' : 'bg-white text-dark'}>
			<button type="button" onClick={handleTheme} className="btn btn-dark">{theme === 'black' ? 'light' : 'dark'}</button>
			<h1>Lib App</h1>
			<div>
				<input type='text' value={input} onChange={handleInput} />
				<select value={filter} onChange={handleFilter}>
      				<option value="">All</option>
      				<option value="title">Title</option>
      				<option value="author">Author</option>
      				<option value="pub_year">Publication Year</option>
    			</select>
			</div>
			<div className='d-flex flex-wrap'>
				<Books books={books} />
			</div>
		</div>
  )
}

export default App
