import DisplayBook from './DisplayBook';

function GetAllBooks({ books, refreshBooks }) {
  return (
    <>
      <div className="card">
        <h2>Books:</h2>
        <ul>
            {books.map(book => (
              <DisplayBook 
                key={book.id} 
                book={book} 
                refreshBooks={refreshBooks} 
              />
            ))}
        </ul>
      </div>
    </>
  )
}

export default GetAllBooks;
