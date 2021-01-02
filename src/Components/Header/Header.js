import './Header.css'
import { ShoppingBasket, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export const Header = () => {
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
        <div className='header__option'>
          <span className='header__option__lineOne'>Hello Guest</span>
          <span className='header__option__lineTwo'>Sign in</span>
        </div>
        <div className='header__option'>
          <span className='header__option__lineOne'>Returns</span>
          <span className='header__option__lineTwo'>{`&`} Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__option__lineOne'>Your</span>
          <span className='header__option__lineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__option__lineTwo header__basketCount'>0</span>
          </div>
        </Link>
      </nav>
    </header>
  )
}