import { useState, useEffect } from 'react'
import './App.css'

async function getData() {
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

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData().then(setBooks);
  }, []);

  return (
    <>
      <div className="card">
        <h2>Books:</h2>
        <ul>
            {books.map(book => (
            <li key={book.id}>
                {book.title} by {book.author}
            </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default App
