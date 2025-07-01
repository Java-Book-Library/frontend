import { useState } from 'react'
import BookService from '../services/BookService'
import DisplayBook from './DisplayBook'

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

function GetBook({ refreshBooks }) {
  const [id, setId] = useState('');
  const [book, setBook] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    setBook(null);
    setSearched(false);
    if (id) {
      const foundBook = await BookService.getBookById(id);
      setBook(foundBook);
      setSearched(true);
    }
  };

  const handleBookChanged = async () => {
    await refreshBooks();
    setBook(null);
    setSearched(false);
  };

  return (
    <div className="card">
      <h2>Search a Book</h2>
      <SearchBookForm setId={setId} onSearch={handleSearch} />
      {book && (
        <>
          <h3>Searched Book:</h3>
          <ul>
            <DisplayBook
              book={book}
              refreshBooks={handleBookChanged}
            />
          </ul>
        </>
      )}
      {!book && searched && (
        <h3>Not Found</h3>
      )}
    </div>
  )
}

export default GetBook;
