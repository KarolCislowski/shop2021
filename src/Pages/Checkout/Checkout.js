import './Checkout.css'
import { Subtotal } from './Subtotal/Subtotal'

export const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <h2 className='checkout__title'>
          Your Shopping Basket
        </h2>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}