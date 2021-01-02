import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import './Login.css'

export const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
    setEmail('')
    setPassword('')
  }

  const handleRegister = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
    setEmail('')
    setPassword('')
  }

  return (
    <div className='login'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1>Red Dwarf</h1>
      </Link>
      <div className='login__container'>
        <h2>Sign-in</h2>
        <form>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            className='login__signInBtn'
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>
        <p>By signing-in you agree to Our Conditions of Use & Sale.</p>
        <p>Please notice it is not a real shop but Programming Project which was create as presentation of my skills.</p>

        <button
          className='login__registerBtn'
          onClick={handleRegister}
        >
          Create your Account
        </button>
      </div>
    </div>
  )
}