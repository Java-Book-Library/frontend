import { useState } from 'react'
import BookService from '../services/BookService';

function PatchBookForm({ book, onPatch }) {
  const [newBook, setNewBook] = useState({ title: book.title, author: book.author, price: book.price });

  const handleSubmit = (e) => {
    e.preventDefault();
    onPatch(newBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="book-title"> Title </label>
      <input 
        type="text" 
        id="book-title" 
        name="book-title" 
        value={newBook.title} 
        onChange={e => setNewBook({ ...newBook, title: e.target.value })}
      />
      <label htmlFor="book-author"> Author </label>
      <input 
        type="text" 
        id="book-author" 
        name="book-author" 
        value={newBook.author}
        onChange={e => setNewBook({ ...newBook, author: e.target.value })} 
      />
      <label htmlFor="book-price"> Price </label>
      <input 
        type="number" 
        id="book-price" 
        name="book-price" 
        value={newBook.price}
        onChange={e => setNewBook({ ...newBook, price: e.target.value })}
      />
      <button type="submit"> Update Book </button>
    </form>
  )
}

function PatchBook({ book, onPatch }) {

  const handlePatch = async (updatedBook) => {
    const updated = await BookService.updateBook(book.id, updatedBook);
    if (updated) {
      onPatch();
    }
  };
  
  return <PatchBookForm book={book} onPatch={handlePatch} />
}

export default PatchBook;
