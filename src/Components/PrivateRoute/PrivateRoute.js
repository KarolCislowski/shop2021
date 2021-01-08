import { Redirect, Route } from 'react-router-dom'
import { useStateValue } from '../../State/StateProvider'

export const PrivateRoute = ({ children, ...rest }) => {
  const [{ user }, dispatch] = useStateValue()
  return (
    <Route
      {...rest}
      render={({ location }) => (user ? (
        children
      )
        : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }} />
        ))} />
  )
}