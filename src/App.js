import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { auth } from './firebase'

import './App.css'

//Components
import { Header } from './Components/Header/Header'

//Pages
import { Home } from './Pages/Home/Home'
import { Checkout } from './Pages/Checkout/Checkout'
import { Login } from './Pages/Login/Login'
import { useStateValue } from './State/StateProvider'


function App() {

  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: auth.user
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch >
          <Route path='/checkout' >
            <Header />
            <Checkout />
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
