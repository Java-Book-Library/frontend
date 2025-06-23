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

function ShowBook({ newBook, createdBook, setNewBook, onPost }) {
  return (
    <div className="card">
      <h2>Create a book:</h2>
      <PostBookForm newBook={newBook} setNewBook={setNewBook} onPost={onPost} />

      <h3>Created book</h3>
      <ul>
        <li key={createdBook.id}>
            {createdBook.id}: {createdBook.title} by {createdBook.author}
        </li>
      </ul>
    </div>
  )
}

function HideBook({ newBook, setNewBook, onPost }) {
  return (
    <div className="card">
      <h2>Create a book:</h2>
      <PostBookForm newBook={newBook} setNewBook={setNewBook} onPost={onPost} />
    </div>
  )
}


function PostBook() {
  const [newBook, setNewBook] = useState({ title: "", author: "", price: "" });
  const [createdBook, setCreatedBook] = useState(null);
  const [created, setCreated] = useState(false);

  const handlePost = async () => {
    if (newBook) {
      const foundBook = await BookService.addBook(newBook);
      setCreatedBook(foundBook);
      setCreated(true);
    }
  };

  if (createdBook) {
    return (
      <ShowBook newBook={newBook} createdBook={createdBook} setNewBook={setNewBook} onPost={handlePost} />
    )
  } 
  else if (created) {
    return (
      <div className="card">
        <h3>Not Found</h3>
      </div>
    )
  }
  else {
    return (
      <HideBook newBook={newBook} setNewBook={setNewBook} onPost={handlePost} />
    )
  }
}

export default PostBook;
