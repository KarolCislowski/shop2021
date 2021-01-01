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

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch >
          <Route path='/checkout' >
            <h1>Checkout goes here</h1>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
