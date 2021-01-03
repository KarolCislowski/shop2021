import { useStateValue } from '../../State/StateProvider'
import { BasketItem } from '../../Components/BasketItem/BasketItem'
import './Checkout.css'
import { Subtotal } from './Subtotal/Subtotal'

export const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <h3 className='checkout__user'>
          Hello, {user?.email}!
        </h3>
        <h2 className='checkout__title'>
          Your Shopping Basket
        </h2>
        <div className='checkout__basket'>
          {basket?.map((e, index) => (
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
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}