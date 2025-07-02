import { useState, useEffect } from 'react'
import DisplayUserBook from './DisplayUserBook';
import UserBookService from '../../services/UserBookService';

function GetAllUserBooks({ user, books, error }) {
  return (
    <>
      <div className="card">
        <h2>{user.name}'s Books:</h2>
        {error && (
          <h3>{error}</h3>
        )}
        {books && !error && (
          <ul>
            {books.map(book => (
              <DisplayUserBook 
                key={book.id} 
                book={book}
              />
            ))}
          </ul>
        )}
        {books.length === 0 && !error && (
          <h3>No books found.</h3>
        )}
      </div>
    </>
  )
}

function UserBookSection({ user }) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      setError('');
      UserBookService.getAllUserBooks(user)
        .then(data => {
          setBooks(data);
        })
        .catch(err => {
          if (err?.message) {
            setError(err.message);
          } else if (typeof err === 'string') {
            setError(err);
          } else {
            setError('An unexpected error occurred.');
          }
          setBooks([]);
        });
    }
  }, [user]);

  return <GetAllUserBooks user={user} books={books} error={error} />
}

export default UserBookSection;
