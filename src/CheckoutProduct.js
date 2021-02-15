import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct ({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
    <div className='checkout-product'>
      <img className='checkout-product-image' src={image} />

      <div className='chekout-product-info'>
        <p className='checkout-product-title'>{title}</p>
        <small>$</small>
        <strong className='checkout-product-price'>{price}</strong>
        <div className='checkout-product-rating'>
          {Array(rating).fill().map((_, i) => (
            <p>★</p>
          ))
          }
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
