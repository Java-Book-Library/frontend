import { useState, useEffect } from 'react'
import BookService from '../../services/BookService'
import GetAllBooks from './GetAllBooks'
import GetBook from './GetBook'
import PostBook from './PostBook'
import DeleteAllBooks from './DeleteAllBooks'

function BookSection() {
  const [books, setBooks] = useState([]);

  const refreshBooks = async () => BookService.getAllBooks().then(setBooks);

  useEffect(() => {
    refreshBooks();
  }, []);

  return (
    <>
      <GetAllBooks books={books} refreshBooks={refreshBooks} />
      <GetBook refreshBooks={refreshBooks} />
      <PostBook refreshBooks={refreshBooks} />
      <DeleteAllBooks refreshBooks={refreshBooks} />
    </>
  )
}

export default BookSection
