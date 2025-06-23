import { useState } from 'react'
import BookService from '../services/BookService'

function SearchBookForm({ setId, onSearch }) {
  return (
    <>
    <label htmlFor="book-id">Id</label>
    <input 
      type="number" 
      id="book-id" 
      name="book-id"
      onChange={e => setId(e.target.value)}
    />
    <button onClick={onSearch}>Search</button>
    </>
  )
}

function HideBook({ setId, onSearch }) {
  return (
    <div className="card">
      <h2>Search a Book</h2>
      <SearchBookForm setId={setId} onSearch={onSearch} />
    </div>
  )
}

function ShowBook({ book, setId, onSearch }) {
  if (!book) return null;
  return (
    <div className="card">
      <h2>Search a Book</h2>
      <SearchBookForm setId={setId} onSearch={onSearch} />
      <h3>Searched Book:</h3>
      <ul>
        <li key={book.id}>
            {book.id}: {book.title} by {book.author}
        </li>
      </ul>
    </div>
  )
}

function GetBook() {
  const [id, setId] = useState('');
  const [book, setBook] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (id) {
      setBook(null);
      setSearched(false);
      const foundBook = await BookService.getBookById(id);
      setBook(foundBook);
      setSearched(true);
    }
  };

  if (book) {
    return <ShowBook book={book} setId={setId} onSearch={handleSearch} />;
  } 
  else if (searched) {
    return (
      <div className="card">
        <h3>Not Found</h3>
      </div>
    )
  }
  return <HideBook setId={setId} onSearch={handleSearch} />;
}

export default GetBook;
