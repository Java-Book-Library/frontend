import { useState, useEffect } from 'react'
import '../css/App.css'
import BookService from './services/BookService'
import AllBooks from './components/GetAllBooks'
import GetBook from './components/GetBook'
import PostBook from './components/PostBook'
import DeleteBook from './components/DeleteBook'
import DeleteAllBooks from './components/DeleteAllBooks'

function App() {
  const [books, setBooks] = useState([]);

  const refreshBooks = async () => BookService.getAllBooks().then(setBooks);

  useEffect(() => {
    refreshBooks();
  }, []);

  return (
    <>
      <AllBooks books={books} />
      <GetBook onBooksChanged={refreshBooks} />
      <PostBook onBooksChanged={refreshBooks} />
      <DeleteBook onBooksChanged={refreshBooks} />
      <DeleteAllBooks onBooksChanged={refreshBooks} />
    </>
  )
}

export default App
