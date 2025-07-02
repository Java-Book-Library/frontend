function DisplayUserBook({ book, refreshBooks }) {

  return (
    <li>
        {book.id}: {book.title} by {book.author}
    </li>
  )
}

export default DisplayUserBook;
