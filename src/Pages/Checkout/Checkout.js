import { useStateValue } from '../../State/StateProvider'
import { BasketItem } from './BasketItem/BasketItem'
import './Checkout.css'
import { Subtotal } from './Subtotal/Subtotal'

export const Checkout = () => {
  const [{ basket, dispatch }] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <h2 className='checkout__title'>
          Your Shopping Basket
        </h2>
        {basket && basket.map((e, index) => (
          <BasketItem
            key={`${e.id} + ${index}`}
            id={e.id}
            title={e.title}
            image={e.image}
            price={e.price}
            rating={e.rating}
          />))
        }
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}