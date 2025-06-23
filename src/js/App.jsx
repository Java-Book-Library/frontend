import '../css/App.css'
import AllBooks from './components/GetAllBooks'
import GetBook from './components/GetBook'
import PostBook from './components/PostBook'
import DeleteBook from './components/DeleteBook'

function App() {
  return (
    <>
      <AllBooks />
      <GetBook />
      <PostBook />
      <DeleteBook />
    </>
  )
}

export default App
