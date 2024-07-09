import React from 'react'
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/cart');
  };
  return (
    <div className='item-card'>
      <img src={props.image} alt="" />
      <p className='item-description'>{props.description}</p>
      <div className="item-details">
      <button className='cart-button' onClick={handleAddToCart}>Add to Cart</button>
      <div className="item-price">
        {props.price}
      </div>
      
      </div>
      
    </div>
  )
}

export default Item
