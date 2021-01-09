import './Header.css'
import { ShoppingBasket, Search } from '@material-ui/icons'
import { Link, useParams } from 'react-router-dom'
import { useStateValue } from '../../State/StateProvider'
import { auth, db } from '../../firebase'
import { useEffect, useState } from 'react'

export const Header = () => {

  const [categories, setCategories] = useState([])

  const { catName } = useParams()

  const [{ basket, user }, dispatch] = useStateValue()

  useEffect(() => {
    db.collection('categories').onSnapshot((snapshot) => {
      setCategories(snapshot.docs.map(doc => (
        { id: doc.id, data: doc.data() }
      )))
    })
  }, [])

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <header className='header'>
      <div className='header__level__one'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h5 className='header__logo'>Trip Store</h5>
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
          {user &&
            <Link to='/orders' style={{ textDecoration: 'none' }}>
              <div className='header__option'>
                <span className='header__option__lineOne'>Returns</span>
                <span className='header__option__lineTwo'>{`&`} Orders</span>
              </div>
            </Link>}

          <Link to='/checkout'>
            <div className='header__optionBasket'>
              <ShoppingBasket />
              <span className='header__option__lineTwo header__basketCount'>{basket.length}</span>
            </div>
          </Link>
        </nav>
      </div>
      <div className='header__level__two'>
        <Link to='/'>
          <div className={!catName ? 'header__navBtn header__navBtn--active' : 'header__navBtn'}>
            Home
        </div>
        </Link>
        {categories?.map(e => (
          <Link key={e.id} to={`/products/${e.data.name}`} >
            <div
              className={catName?.toLowerCase() === e.data.name ? 'header__navBtn header__navBtn--active' : 'header__navBtn'}
            >
              {e.data.name}
            </div>
          </Link>
        ))}
      </div>
    </header>
  )
}