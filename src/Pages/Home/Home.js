import { ProductCard } from './ProductCard/ProductCard'
import './Home.css'
import { CategoryCard } from './Categories/CategoryCard/CategoryCard'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { useParams } from 'react-router-dom'
import { Categories } from './Categories/Categories'

export const Home = () => {

  const [products, setProducts] = useState([])

  const { catName } = useParams()

  useEffect(() => {
    if (catName) {
      db.collection('products').where('category', '==', catName?.toLowerCase()).onSnapshot((snapshot) => {
        setProducts(snapshot.docs.map(doc => (
          { id: doc.id, data: doc.data() }
        )))
      })
    } else {
      db.collection('products').onSnapshot((snapshot) => {
        setProducts(snapshot.docs.map(doc => (
          { id: doc.id, data: doc.data() }
        )))
      })
    }
  }, [catName])

  return (
    <>
      <img
        className='home__image'
        src='https://images.unsplash.com/photo-1544084944-15269ec7b5a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
        alt='hero__image'
      />
      <div className='home'>
        <main className='home__container'>

          <Categories />
          <div className='home__row'>
            {products?.map(e => <ProductCard
              key={e.id}
              id={e.id}
              title={e.data.title}
              image={e.data.image}
              price={e.data.price}
              rating={e.data.rating}
            />)}
          </div>
        </main>
      </div>
    </>
  )
}