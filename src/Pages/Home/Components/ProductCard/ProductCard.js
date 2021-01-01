import './ProductCard.css'

export const ProductCard = ({
  title,
  image,
  price,
  rating
}) => {
  const ratingString = () => {
    let resultString = ''
    for (let index = 0; index < rating; index++) {
      resultString += `⭐`
    }
    return resultString
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
          <p>{ratingString()}</p>
        </div>
      </div>
      <img src={image} alt='product cover' />

      <button>Add to basket</button>
    </div>
  )
}