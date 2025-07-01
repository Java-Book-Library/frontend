import { useState, useEffect } from 'react'
import '../css/App.css'
import BookService from './services/BookService'
import GetAllBooks from './components/GetAllBooks'
import GetBook from './components/GetBook'
import PostBook from './components/PostBook'
import DeleteAllBooks from './components/DeleteAllBooks'

function App() {
  const [books, setBooks] = useState([]);

  const refreshBooks = async () => BookService.getAllBooks().then(setBooks);

  useEffect(() => {
    refreshBooks();
  }, []);

  return (
    <>
      <GetAllBooks books={books} onBooksChanged={refreshBooks} />
      <GetBook onBooksChanged={refreshBooks} />
      <PostBook onBooksChanged={refreshBooks} />
      <DeleteAllBooks onBooksChanged={refreshBooks} />
    </>
  )
}

export default App
