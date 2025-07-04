import RegisterUser from './RegisterUser'
import LoginUser from './LoginUser'
import UserHeader from './UserHeader'
import UserBookSection from '../user-book/UserBookSection'

function UserSection({ user, setUser }) {

  return (
    <div>
      {!user && (
        <>
          <RegisterUser user={user} setUser={setUser} />
          <LoginUser user={user} setUser={setUser} />
        </>
      )}
      {user && (
        <>
          <UserHeader user={user} />
          <UserBookSection user={user} />
        </>
      )}
    </div>
  )
}

export default UserSection
