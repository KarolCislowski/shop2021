import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase'
import { ProductCard } from './ProductCard/ProductCard'
import './Products.css'

export const Products = () => {
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
    <div className='products' id='products' >
      {products?.map(e => <ProductCard
        key={e.id}
        id={e.id}
        title={e.data.title}
        image={e.data.image}
        price={e.data.price}
        rating={e.data.rating}
      />)}
    </div>
  )
}