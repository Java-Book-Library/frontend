import { useState } from 'react'
import BookService from '../services/BookService'
import DisplayBook from './DisplayBook'

function PostBookForm({ newBook, setNewBook, onPost }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onPost();
      }}
    >
      <label htmlFor="book-title">Title</label>
      <input
        type="text"
        id="book-title"
        name="book-title"
        value={newBook.title}
        onChange={e => setNewBook({ ...newBook, title: e.target.value })}
        required
      />
      <label htmlFor="book-author">Author</label>
      <input
        type="text"
        id="book-author"
        name="book-author"
        value={newBook.author}
        onChange={e => setNewBook({ ...newBook, author: e.target.value })}
        required
      />
      <label htmlFor="book-price">Price</label>
      <input
        type="number"
        id="book-price"
        name="book-price"
        value={newBook.price}
        onChange={e => setNewBook({ ...newBook, price: e.target.value })}
        required
      />
      <button type="submit">Create Book</button>
    </form>
  )
}

function PostBook({ refreshBooks }) {
  const [newBook, setNewBook] = useState({ title: "", author: "", price: "" });
  const [createdBook, setCreatedBook] = useState(null);
  const [created, setCreated] = useState(false);

  const handlePost = async () => {
    if (newBook) {
      setCreatedBook(null);
      setCreated(false);
      const foundBook = await BookService.addBook(newBook);
      if (foundBook) {
        await refreshBooks();
        setCreatedBook(foundBook);
      }
      setCreated(true);
    }
  };

  const handleBookChanged = async () => {
    await refreshBooks();
    setCreatedBook(null);
    setCreated(false);
  };

  return (
    <div className="card">
      <h2>Create a Book</h2>
      <PostBookForm newBook={newBook} setNewBook={setNewBook} onPost={handlePost} />
      {createdBook && (
        <>
          <h3>Created Book:</h3>
          <ul>
            <DisplayBook
              book={createdBook}
              refreshBooks={handleBookChanged}
            />
          </ul>
        </>
      )}
      {!createdBook && created && (
        <h3>Not Found</h3>
      )}
    </div>
  )
}

export default PostBook;
