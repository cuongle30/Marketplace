import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header () {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header-logo' src='https://c8.alamy.com/comp/2AAC542/online-shop-vector-logo-template-2AAC542.jpg' />
      </Link>
      <div className='header-search'>
        <input className='header-search-input' type='text' />
        <button>Search</button>
      </div>
      <div className='header-nav'>
        <div className='header-option'>
          <span className='header-optionLineOne'>Hello User</span>
          <span className='header-optionLineTwo'>Sign in</span>
        </div>
        <div className='header-option'>
          <span className='header-optionLineOne' >Return</span>
          <span className='header-optionLineTwo'>Orders</span>
        </div>
        <div className='header-option'>
          <span className='header-optionLineOne'>Your</span>
          <span className='header-optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header-optionCheckout'>
            <span>Checkout </span>
            <span className='header-optionLineTwo header_checkoutCount'>{basket.length}</span>
          </div>
        </Link>

      </div>

    </div>

  )
}

export default Header
