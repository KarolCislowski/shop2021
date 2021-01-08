import { ProductCard } from './ProductCard/ProductCard'
import './Home.css'

export const Home = () => {
  return (
    <>
      <img
        className='home__image'
        src='https://images.unsplash.com/photo-1544084944-15269ec7b5a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
        alt='hero__image'
      />
      <div className='home'>
        <main className='home__container'>

          <div className='home__row'>
            <ProductCard
              id='1'
              title='Photo of Canadian satellite'
              image='https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1504&q=80'
              price={666.69}
              rating={5}
            />
            <ProductCard
              id='2'
              title='Photo of American Astronaut'
              image='https://images.unsplash.com/photo-1447433865958-f402f562b843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1504&q=80'
              price={666.69}
              rating={5}
            />

            <ProductCard
              id='3'
              title='Photo of Space'
              image='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1427&q=80'
              price={666.69}
              rating={5}
            />
            <ProductCard
              id='4'
              title='Photo of Night Sky'
              image='https://images.unsplash.com/photo-1515651571008-95427bed8e0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1546&q=80'
              price={666.69}
              rating={5}
            />
            <ProductCard
              id='5'
              title='Photo of Red Galaxy'
              image='https://images.unsplash.com/photo-1523968063095-61264537fc21?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1407&q=80'
              price={666.69}
              rating={5}
            />
            <ProductCard
              id='6'
              title='Photo of Milky Way'
              image='https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
              price={666.69}
              rating={5}
            />

          </div>
        </main>
      </div>
    </>
  )
}