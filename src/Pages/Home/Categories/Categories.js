import { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import './Categories.css'
import { CategoryCard } from './CategoryCard/CategoryCard'

export const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    db.collection('categories').onSnapshot((snapshot) => {
      setCategories(snapshot.docs.map(doc => (
        { id: doc.id, data: doc.data() }
      )))
    })
  }, [])

  return (
    <div className='categories'>
      {categories?.map(e => <CategoryCard
        key={e.id}
        category={e.data.name}
        image={e.data.image} />)}
    </div>
  )
}