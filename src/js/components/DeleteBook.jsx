import { useState } from 'react'
import BookService from '../services/BookService'

function DeleteBookButton({ book, onDelete }) {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!window.confirm(`Delete book "${book.title}" by ${book.author}?`)) return

    setDeleting(true);
    setError(null);
    try {
      const result = await BookService.deleteBookById(book.id);
      if (result) {
        onDelete();
      } else {
        setError("Book not found or could not be deleted.");
      }
    } catch (e) {
      setError(e?.message || "Error deleting book");
    }
    setDeleting(false);
  };

  return (
    <>
      <button
        onClick={handleDelete}
        disabled={deleting}
      >
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
      {error && (
        <span> {error} </span>
      )}
    </>
  )
}

export default DeleteBookButton;
