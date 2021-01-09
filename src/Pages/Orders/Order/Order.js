import './Order.css'
import moment from 'moment'
import { BasketItem } from '../../../Components/BasketItem/BasketItem'
import CurrencyFormat from 'react-currency-format'

export const Order = ({ order }) => {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        {order.id}
      </p>
      <div className='order__address'>
        <h3>Address:</h3>
        <span>
          <p>{order.data.address.first_name} {order.data.address.last_name}</p>
          <p>{order.data.address.street}</p>
          <p>{order.data.address.zip} {order.data.address.city}</p>
        </span>
      </div>
      {order.data.basket?.map(item => (
        <BasketItem
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className='order__total'>
            Order Total: {value}
          </h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  )
}