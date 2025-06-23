import { useState } from 'react'
import BookService from '../services/BookService'

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

function PostBook() {
  const [newBook, setNewBook] = useState({ title: "", author: "", price: "" });
  const [createdBook, setCreatedBook] = useState(null);

  const handlePost = async () => {
    if (newBook) {
      const foundBook = await BookService.addBook(newBook);
      setCreatedBook(foundBook);
    }
  };

  if (createdBook) {
    return (
      <>
        <div className="card">
          <h2>Create a book:</h2>
          <PostBookForm newBook={newBook} setNewBook={setNewBook} onPost={handlePost} />

          <h3>Created book</h3>
          <ul>
            <li key={createdBook.id}>
                {createdBook.id}: {createdBook.title} by {createdBook.author}
            </li>
          </ul>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="card">
          <h2>Create a book:</h2>
          <PostBookForm newBook={newBook} setNewBook={setNewBook} onPost={handlePost} />
        </div>
      </>
    )
  }
}

export default PostBook;
