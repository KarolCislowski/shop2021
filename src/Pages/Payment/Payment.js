import { Link } from 'react-router-dom'
import { BasketItem } from '../../Components/BasketItem/BasketItem'
import { useStateValue } from '../../State/StateProvider'
import './Payment.css'

export const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout
          (<Link
            to='/checkout'
            style={{
              textDecoration: 'none',
              color: 'aliceblue'
            }}
          >{basket?.length} {basket?.length === 1 ? 'item' : 'items'}</Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>Reactgatan 123</p>
            <p>Stockholm</p>
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
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

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
    </div>
  )
}