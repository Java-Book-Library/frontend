import { useState } from 'react'
import BookService from '../services/BookService'

function DeleteAllBooks() {
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteAll = async () => {
    setDeleted(false);
    setError(null);
    const result = await BookService.deleteAllBooks();
    if (result) {
      onBooksChanged();
      setDeleted(true);
    } else {
      setError("Failed to delete all books.");
    }
  };

  if (deleted) {
    return (
      <div className="card">
        <p>Successfully deleted all books</p>
      </div>
    )
  }
  else if (error) {
    return (
      <div className="card">
        <h3>{error}</h3>
      </div>
    )
  }
  return (
    <button onClick={handleDeleteAll}>
      Delete All Books
    </button>
  )
}

export default DeleteAllBooks;
