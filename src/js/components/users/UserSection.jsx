import RegisterUser from './RegisterUser'

function UserSection({ user, setUser }) {

  return (
    <>
      <RegisterUser user={user} setUser={setUser} />
    </>
  )
}

export default UserSection
