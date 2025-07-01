import { useState } from 'react'
import PatchBook from './PatchBook';
import DeleteBookButton from './DeleteBook'

function GetAllBooks({ books, onBooksChanged }) {
  const [editingBookId, setEditingBookId] = useState(null);

  const handleDelete = () => {
    onBooksChanged()
  }

  const handlePatch = () => {
    setEditingBookId(null);
    onBooksChanged()
  }

  return (
    <>
      <div className="card">
        <h2>Books:</h2>
        <ul>
            {books.map(book => (
              <li key={book.id}>
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
            ))}
        </ul>
      </div>
    </>
  )
}

export default GetAllBooks;
