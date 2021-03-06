import { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { useStateValue } from '../../../State/StateProvider'
import './Address.css'

export const Address = () => {
  const [{ user }, dispatch] = useStateValue()

  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [street, setStreet] = useState('')
  const [zip, setZip] = useState()
  const [city, setCity] = useState('')
  const [address, setAddress] = useState({})

  const [editMode, setEditMode] = useState(false)

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
  }, [editMode, user])

  const handleSubmit = (e) => {
    e.preventDefault()
    db.collection('users')
      .doc(user?.uid)
      .set({
        first_name,
        last_name,
        street,
        zip,
        city
      })
    setEditMode(false)
  }
  return (
    <>
      {(address && !editMode) ?
        <div className='address'>
          <p>{address.first_name} {address.last_name}</p>
          <p>{address.street}</p>
          <p>{address.zip} {address.city}</p>
          <button
            className='address__edit'
            onClick={() => setEditMode(!editMode)}
          >
            Edit address
          </button>
        </div>
        :
        <form
          className='address__form'
          onSubmit={handleSubmit}
        >
          <div className='address__formRow'>
            <span>
              <h5>First Name:</h5>
              <input
                required
                type='text'
                value={first_name}
                onChange={e => setFirst_name(e.target.value)}
              />
            </span>

            <span>
              <h5>Last Name:</h5>
              <input
                required
                type='text'
                value={last_name}
                onChange={e => setLast_name(e.target.value)}
              />
            </span>
          </div>

          <h5>Street:</h5>
          <input
            required
            type='text'
            value={street}
            onChange={e => setStreet(e.target.value)}
          />
          <div className='address__formRow'>
            <span>
              <h5>Zip:</h5>
              <input
                required
                type='number'
                value={zip}
                onChange={e => setZip(e.target.value)}
              />
            </span>

            <span>
              <h5>City:</h5>
              <input
                required
                type='text'
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </span>
          </div>
          <button>Save Address</button>
        </form>
      }
    </>
  )
}