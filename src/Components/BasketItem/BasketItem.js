import { useStateValue } from '../../State/StateProvider'
import './BasketItem.css'

export const BasketItem = ({
  id,
  title,
  image,
  price,
  rating
}) => {

  const [{ basket }, dispatch] = useStateValue()

  const handleRemoveFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
    <div className='basketItem'>
      <img className='basketItem__image' src={image} alt='product cover' />

      <div className='basketItem__info'>
        <p className='basketItem__title'>{title}</p>
        <p className='basketItem__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='basketItem__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={handleRemoveFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}