import { Link } from 'react-router-dom'
import './Login.css'

export const Login = () => {
  return (
    <div className='login'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1>Red Dwarf</h1>
      </Link>
      <div className='login__container'>
        <h2>Sign-in</h2>
        <form>
          <h5>E-mail</h5>
          <input type='email' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInBtn'>Sign In</button>
        </form>
        <p>By signing-in you agree to Our Conditions of Use & Sale.</p>
        <p>Please to be notice it is not a real shop but Programming Project which was create as presentation of my skills.</p>

        <button className='login__registerBtn'>Create your Account</button>
      </div>
    </div>
  )
}