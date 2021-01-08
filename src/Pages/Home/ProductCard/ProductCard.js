import './ProductCard.css'
import { useStateValue } from '../../../State/StateProvider'

export const ProductCard = ({
  id,
  title,
  image,
  price,
  rating
}) => {
  const [{ basket }, dispatch] = useStateValue()

  const handleAddToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }

  return (
    <div className='productCard'>
      <div className='productCard__info'>
        <p>{title}</p>
        <p className='productCard__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='productCard__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='product cover' />

      <button onClick={handleAddToBasket}>Add to basket</button>
    </div>
  )
}