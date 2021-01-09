import './Home.css'
import { Categories } from './Categories/Categories'
import { Products } from './Products/Products'

export const Home = () => (
  <>
    <img
      className='home__image'
      src='https://images.unsplash.com/photo-1544084944-15269ec7b5a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
      alt='hero__image'
    />
    <div className='home'>
      <main className='home__container'>
        <Categories />
        <Products />
      </main>
    </div>
  </>
)
