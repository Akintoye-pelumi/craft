import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext'; // Ensure this import is correct

const Item = (props) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(props);
    navigate('/cart');
  };

  const handleImageClick = () => {
    navigate(`/product/${props.id}`);
  };

  const price = props.price && props.price.length > 0 && props.price[0].NGN && props.price[0].NGN.length > 0 
    ? props.price[0].NGN[0] 
    : 'Price not available';

  const basePath = 'https://api.timbu.cloud/images/';
  const imageUrl = props.photos && props.photos.length > 0 && props.photos[0].url 
    ? `${basePath}${props.photos[0].url}` 
    : 'image not found';

  return (
    <div className='item-card'>
      <img src={imageUrl} alt="" onClick={handleImageClick}/>
      <p className='item-description'>{props.description}</p>
      <div className="item-details">
        <button className='cart-button' onClick={handleAddToCart}>Add to Cart</button>
        <div className="item-price">
        ₦{price}
        </div>
      </div>
    </div>
  );
};

export default Item;

