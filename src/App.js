import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'

//Components
import { Header } from './Components/Header/Header'

//Pages
import { Home } from './Pages/Home/Home'
import { Checkout } from './Pages/Checkout/Checkout'
import { Login } from './Pages/Login/Login'

function App() {
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
