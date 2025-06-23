function AllBooks({ books }) {
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

export default AllBooks;
