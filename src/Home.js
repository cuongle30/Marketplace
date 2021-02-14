import React from 'react'
import './Home.css'
import Product from './Product'

function Home () {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='home-banner' src='https://sweep.ac.uk/wp-content/uploads/blue-banner.jpg' />

        <div className='home-row'>
          <Product
            id='1'
            title='Strawberries'
            price={29.99}
            image='https://api.time.com/wp-content/uploads/2018/04/strawberries.jpg'
            rating={3}
          />
          <Product
            id='2'
            title='Apples'
            price={19.99}
            image='https://post.healthline.com/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg'
            rating={3}
          />
        </div>
        <div className='home-row'>
          <Product
            id='3'
            title='Pears'
            price={14.99}
            image='https://www.stemilt.com/wp-content/uploads/2016/07/Concorde.jpg'
            rating={4}
          />
          <Product
            id='4'
            title='Kiwi'
            price={39.99}
            image='https://i.ndtvimg.com/i/2015-10/kiwi-fruit_625x350_81445871711.jpg'
            rating={4}
          />
          <Product
            id='5'
            title='Coconut'
            price={29.99}
            image='https://4.imimg.com/data4/PP/QS/MY-23507173/cocout-250x250.png'
            rating={5}
          />
        </div>
        <div className='home-row'>
          <Product
            id='6'
            title='Banana'
            price={19.99}
            image='https://image.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-260nw-1722111529.jpg'
            rating={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
