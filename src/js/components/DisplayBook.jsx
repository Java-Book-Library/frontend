import { useState } from 'react';
import PatchBook from './PatchBook';
import DeleteBookButton from './DeleteBook'

function DisplayBook({ book, refreshBooks }) {
  const [editingBookId, setEditingBookId] = useState(null);

  const handleDelete = async () => {
    await refreshBooks();
  }

  const handlePatch = async () => {
    setEditingBookId(null);
    await refreshBooks();
  }

  return (
    <li>
      {editingBookId === book.id ? (
        <PatchBook book={book} onPatch={handlePatch} />
      ) : (
        <>
          {book.id}: {book.title} by {book.author}
          <button onClick={() => setEditingBookId(book.id)} >
            Edit
          </button>
          <DeleteBookButton book={book} onDelete={handleDelete} />
        </>
      )}
    </li>
  )
}

export default DisplayBook;
