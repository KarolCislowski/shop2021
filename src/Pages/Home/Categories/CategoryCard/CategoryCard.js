import { Link } from 'react-router-dom'
import './CategoryCard.css'

export const CategoryCard = ({ category, image }) => (
  <div className='categoryCard'>
    <Link to={`/products/${category}`} >
      <h2>{category}</h2>
      <img
        className='categoryCard__cover'
        src={image}
      />
      <h4>Show products</h4>
    </Link>
  </div>
)