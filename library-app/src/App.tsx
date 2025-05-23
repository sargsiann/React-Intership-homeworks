import { useEffect, useRef, useState } from 'react'
import {getAllBooks,getBooks} from './apis/api.js'
import './App.css'

function	Books(props) {
	return props.books.map((i) => {
		return <div id={i.id} className='col-3 border border-primary'>
			<h4>{i.title}</h4>
			<p>{i.authors.join(' ,')}</p>
			<img src={i.coverURL} className='cover_image'></img>
			<p>{i.pub_year}</p>
			<button className={i.isFavorite ? 'btn btn-danger' : 'btn btn-success'} onClick={() => props.onToggleFavorite(i.id)}>{i.isFavorite ? 'del' : 'add'}</button>
		</div>
	})
}

function App() {
	let [theme,setTheme] = useState('black');
	let [books,setBooks] = useState([]);
	let [input,setInput] = useState('');
	let [filter,setFilter] = useState('');
	let [page,setPage] = useState(1);
	let [popup, setPopup] = useState('');
	let searchRef = useRef('');

	function loadFavorites() {
		let data = localStorage.getItem('favorites');
		return data ? JSON.parse(data) : [];
	}

	function saveFavorites(favorites) {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	useEffect(() => {
		if (popup) {
			const timer = setTimeout(() => {
				setPopup('');
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [popup]);

	useEffect(() => {
		let p = getBooks(filter, input);
		p.then((d) => {
			let favoriteIds = loadFavorites();
			let updatedBooks = d.map(book => ({
				...book,
				isFavorite: favoriteIds.includes(book.id)
			}));
			setBooks(updatedBooks);
			setPage(1);
		});
	}, [input]);

	// FUNCTIONS

	function handleInput(e) {
		setInput(e.target.value);
	}

	function handleTheme() {
		setTheme(theme === 'black' ? 'white' : 'black');
	}

	function handleFilter(e) {
		if (e.target.value === '')
			setInput('');
		setFilter(e.target.value);
	}

	function toggleFavorite(id) {
		let favoriteIds = loadFavorites();
		let isNowFavorite = false;

		let updatedBooks = books.map(book => {
			if (book.id === id) {
				book.isFavorite = !book.isFavorite;
				isNowFavorite = book.isFavorite;
			}
			return book;
		});
		setBooks(updatedBooks);

		if (isNowFavorite) {
			if (!favoriteIds.includes(id)) {
				favoriteIds.push(id);
				setPopup('Book added to favorites');
			}
		} else {
			favoriteIds = favoriteIds.filter(favId => favId !== id);
			setPopup('Book deleted from favorites');
		}
		saveFavorites(favoriteIds);
	}

	return (
		<div className={theme === 'black' ? 'bg-dark text-white' : 'bg-white text-dark'}>
			<button type="button" onClick={handleTheme} className="btn btn-dark">{theme === 'black' ? 'light' : 'dark'}</button>
			<h1>Lib App</h1>
			<div>
				<input ref={searchRef} type='text' value={input} onChange={handleInput} />
				<select value={filter} onChange={handleFilter}>
      				<option value="">All</option>
      				<option value="title">Title</option>
      				<option value="author">Author</option>
      				<option value="pub_year">Publication Year</option>
    			</select>
			</div>
			<div className='d-flex flex-wrap'>
				<Books books={books.slice((page - 1) * 10,page * 10)} onToggleFavorite={toggleFavorite}/>
			</div>
			<div className="d-flex justify-content-center my-3">
     	 	<button
     	   		className="btn btn-outline-primary mx-1"
     	   		disabled={page === 1}
     	   		onClick={() => setPage(page - 1)}
     	 	>
        	prev
      	</button>
      		<span className="btn mx-1 disabled">{page}</span>
      		<button
        		className="btn btn-outline-primary mx-1"
        		onClick={() => page * 10 < books.length ? setPage(page + 1) : undefined}
      		>
        		next
      		</button>
    		</div>
			{popup && (
	<div className="popup-message position-fixed bottom-0 end-0 m-3 p-3 bg-success text-white rounded shadow">
		{popup}
	</div>
)}
		</div>
  )
}


export default App
