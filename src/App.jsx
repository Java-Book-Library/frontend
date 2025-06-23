import { useState, useEffect } from 'react'
import './App.css'

async function getAllBooks() {
  const url = "http://localhost:8080/api/books";
  try {
  const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(setBooks);
  }, []);

  return (
    <>
      <div className="card">
        <h2>Books:</h2>
        <ul>
            {books.map(book => (
            <li key={book.id}>
                {book.id}: {book.title} by {book.author}
            </li>
            ))}
        </ul>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <AllBooks/>
    </>
  )
}

export default App
