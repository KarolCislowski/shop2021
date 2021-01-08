import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { auth } from './firebase'

//Stripe
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import './App.css'

//Components
import { Header } from './Components/Header/Header'
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute'

//Pages
import { Home } from './Pages/Home/Home'
import { Checkout } from './Pages/Checkout/Checkout'
import { Login } from './Pages/Login/Login'
import { useStateValue } from './State/StateProvider'
import { Payment } from './Pages/Payment/Payment'
import { Orders } from './Pages/Orders/Orders'

const promise = loadStripe('pk_test_51I5vbRJeBHPKbMlwLnIPJvXh2vhxLW0hAuwxuYyJuaXc56dSBqMcTjOOgAZMuqHc0bRAbwlbSHygLVNimxWHfvhY00JpV0MiuE')

function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
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
          <PrivateRoute path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </PrivateRoute>
          <PrivateRoute path='/orders'>
            <Header />
            <Orders />
          </PrivateRoute>
          <Route path='/products/:catName'>
            <Header />
            <Home />
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
