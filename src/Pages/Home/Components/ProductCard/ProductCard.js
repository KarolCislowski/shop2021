import './ProductCard.css'

export const ProductCard = () => {
  return (
    <article className='productCard'>
      <section
        className='productCard__info'
      >
        <p>Title</p>
        <p className='productCard__price'>
          <small>$</small>
          <strong>666.69</strong>
        </p>
        <div className='productCard__rating'>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </section>
      <img src='https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1504&q=80' alt='product cover' />

      <button>Add to basket</button>
    </article>
  )
}