import { useState } from 'react'
import BookService from '../services/BookService'

function DeleteBookForm({ setId, onDelete }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onDelete();
      }}
    >
    <label htmlFor="book-id">Id</label>
    <input 
      type="number" 
      id="book-id" 
      name="book-id"
      onChange={e => setId(e.target.value)}
    />
    <button type="submit">Delete</button>
    </form>
  )
}

function HideBook({ setId, onDelete }) {
  return (
    <div className="card">
      <h2>Delete a Book</h2>
      <DeleteBookForm setId={setId} onDelete={onDelete} />
    </div>
  )
}

function ShowBook({ id, setId, onDelete }) {
  return (
    <div className="card">
      <h2>Delete a Book</h2>
      <DeleteBookForm setId={setId} onDelete={onDelete} />
      <p>Book with id: {id} deleted</p>
    </div>
  )
}

function DeleteBook({ onBooksChanged }) {
  const [id, setId] = useState('');
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (id) {
      setDeleted(false);
      setError(null);
      const result = await BookService.deleteBookById(id);
      if (result) {
        setDeleted(true);
      } else {
        setError("Book not found or could not be deleted.");
      }
    }
  };

  if (deleted) {
    onBooksChanged();
    return <ShowBook id={id} setId={setId} onDelete={handleDelete} />;
  }
  else if (error) {
    return (
      <div className="card">
        <h3>{error}</h3>
      </div>
    )
  }
  return <HideBook setId={setId} onDelete={handleDelete} />;
}

export default DeleteBook;
