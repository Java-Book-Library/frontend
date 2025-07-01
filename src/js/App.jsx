import '../css/App.css'
import { useState } from 'react'
import UserSection from './components/users/UserSection'
import BookSection from './components/books/BookSection'

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <UserSection user={user} setUser={setUser} />
      <BookSection />
    </>
  )
}

export default App
