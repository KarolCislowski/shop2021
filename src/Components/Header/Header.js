import './Header.css'
import { ShoppingBasket, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../State/StateProvider'
import { auth } from '../../firebase'

export const Header = () => {

  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <header className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h5 className='header__logo'>Red Dwarf</h5>
      </Link>
      <div className='header__search'>
        <input
          className='header__searchInput'
          type='text'
        />
        <Search className='header__searchIcon' />
      </div>
      <nav className='header__nav'>
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }} >
          <div
            onClick={handleAuthentication}
            className='header__option'
          >
            <span className='header__option__lineOne'>
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className='header__option__lineTwo'>Sign {user ? 'out' : 'in'}</span>
          </div>
        </Link>
        <Link to='/orders' style={{ textDecoration: 'none' }}>
          <div className='header__option'>
            <span className='header__option__lineOne'>Returns</span>
            <span className='header__option__lineTwo'>{`&`} Orders</span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__option__lineOne'>Your</span>
          <span className='header__option__lineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__option__lineTwo header__basketCount'>{basket.length}</span>
          </div>
        </Link>
      </nav>
    </header>
  )
}