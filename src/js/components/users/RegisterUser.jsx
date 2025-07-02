import { useState } from 'react'
import UserService from '../../services/UserService'

function RegisterUserForm({ newUser, setNewUser, onRegister }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onRegister();
      }}
    >
      <label htmlFor="name">Username</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        name="password"
        value={newUser.password}
        onChange={e => setNewUser({ ...newUser, password: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

function RegisterUser({ user, setUser }) {
  const [newUser, setNewUser] = useState({ id: "", name: "", password: "" });
  const [error, setError] = useState(null);

  const handlePost = async () => {
    if (newUser) {
      setUser(null);
      setError(null);
      try {
        const user = await UserService.addUser(newUser);
        if (user) {
          setUser(user);
        } else {
          setError("Could not create user.");
        }
      } catch (e) {
        setError(e?.message || "Could not create user.");
      }
      
    }
  };

  return (
    <div className="card">
      {!user && !error && (
        <>
          <h2>Register</h2>
          <RegisterUserForm newUser={newUser} setNewUser={setNewUser} onRegister={handlePost} />
        </>
      )}
      {!user && error && (
        <span> {error} </span>
      )}
    </div>
  )
}

export default RegisterUser;
