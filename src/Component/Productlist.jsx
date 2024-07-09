import React from 'react'
import data_products from './Assets/data'
import Item from './Items/Item'
import about from '../Component/Assets/about.png'

const Productlist = () => {
  return (
    <div>
      <div className="productlist">
        <div className="line1"></div>
        <h1>Our Products</h1>
        <div className="line2"></div>
      <div className='productlist_items'>
        {data_products.map((item, i)=>(
          <div className="productlist_item" key={i}>
          <Item id={item.id} image={item.image} description={item.description} price={item.price} />
        </div>
        ))}    
      </div> 
    </div>
    <div className='about' id='about'>
      <div className="about-us">
      <h1>About Us</h1>
      <p>We at Craft believe that your home should represent who you are. We're committed to giving you fashionable, high-quality furniture so you can design rooms you'll love. Our carefully chosen collections are meant to uplift and make your living spaces cosy, useful, and visually stunning.</p>  
      </div>
      <img src={about} />
    </div>
    <div className="subscribe">
      <h1>Discover the Latest in Home Furnishings</h1>
      <div className="subscribe-input">
        <input type="text" placeholder='Email Address' />
        <button>Subscribe</button>
      </div>
      
    </div>
    </div>
    
  )
}

export default Productlist


