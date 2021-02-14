import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout () {
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img className='banner-ad' src='https://previews.123rf.com/images/boarding1now/boarding1now1710/boarding1now171000097/87941139-fruits-fruit-food-collection-background-banner-orange-apple-apples-lemon-berries-cherries.jpg' />
        <div>
          <h2 className='checkout-title'> Your Shopping Basket </h2>
          {/** Item */}
        </div>
      </div>

      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
