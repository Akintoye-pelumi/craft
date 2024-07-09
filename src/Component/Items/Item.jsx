import React from 'react'

const Item = (props) => {
  return (
    <div className='item-card'>
      <img src={props.image} alt="" />
      <p className='item-description'>{props.description}</p>
      <div className="item-details">
      <div className="item-price">
        {props.price}
      </div>
      <button className='cart-button'>Add to Cart</button>
      </div>
      
    </div>
  )
}

export default Item
