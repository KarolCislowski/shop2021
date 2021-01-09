import { Link } from 'react-router-dom'
import { BasketItem } from '../../Components/BasketItem/BasketItem'
import { useStateValue } from '../../State/StateProvider'
import './Payment.css'

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../State/reducer'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../axios'
import { db } from '../../firebase'
import { Address } from './Address/Address'

export const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue()

  const history = useHistory()

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [address, setAddress] = useState({})

  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    const getClientSecret = async () => {
      const basketValue = getBasketTotal(basket) * 100
      console.log(basketValue)
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${basketValue}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            setAddress({
              first_name: doc.data().first_name,
              last_name: doc.data().last_name,
              street: doc.data().street,
              zip: doc.data().zip,
              city: doc.data().city
            })
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
      .then(({ paymentIntent }) => {

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            address: address
          })

        setSucceeded(true)
        setError(null)
        setProcessing(false)

        dispatch({
          type: 'EMPTY_BASKET'
        })

        history.replace('/orders')
      })
  }

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error ? error.error.message : '')
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout
          (<Link
            to='/checkout'
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
          >{basket?.length} {basket?.length === 1 ? 'item' : 'items'}</Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <Address
            address={address} />
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
          <div className='payment__details'>

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button
                  disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
            <div className='payment__test' >
              <p>* To test this functionality use this data:
                  <ul>
                  <li>Card number: 4242 4242 4242 4242</li>
                  <li>Date: 04/24</li>
                  <li>CVV: 242</li>
                  <li>Zip: 42424</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}