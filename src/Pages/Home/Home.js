import { ProductCard } from './Components/ProductCard/ProductCard'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <main className='home__container'>
        <img
          className='home__image'
          src='https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1340&q=80'
          alt='hero__image'
        />

        <div className='home__row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </div>
  )
}