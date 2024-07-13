import React, { useState } from 'react';
import { useCart } from '../Component/CartContext';
import { Link } from 'react-router-dom';
import Dropdown from '../Component/Dropdown'; 

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prev) => ({ ...prev, [itemId]: quantity }));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.price && item.price.length > 0 && item.price[0].NGN && item.price[0].NGN.length > 0 ? item.price[0].NGN[0] : 0;
      const quantity = quantities[item.id] || 1; 
      return sum + (price * quantity);
    }, 0);
  };

  return (
    <div>
      <div className='cart'>
        <h1>Cart</h1>
      </div>
      <div className='line3'></div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => {
          const price = item.price && item.price.length > 0 && item.price[0].NGN && item.price[0].NGN.length > 0 ? item.price[0].NGN[0] : 0;
          const quantity = quantities[item.id] || 1; 

          return (
            <div className='cart-card' key={index}>
              <div className='cart-img'>
                <img src={item.photos && item.photos.length > 0 && item.photos[0].url ? `https://api.timbu.cloud/images/${item.photos[0].url}` : 'default-image-url'} alt="" />
                <div className='cart-des'>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <div className="cart-drop">
                    <Dropdown quantity={quantity} setQuantity={(qty) => handleQuantityChange(item.id, qty)} />
                    <p className='cart-price'>₦{price * quantity}</p>
                  </div>
                </div>
                <p className='remove' onClick={() => removeFromCart(item.id)}>Remove</p>
              </div>
            </div>
          );
        })
      )}
      {cartItems.length > 0 && (
        <>
          <button onClick={clearCart}>Clear Cart</button>
          <div className="cart-sum">
            <h1>Order Summary</h1>
            <div className="cart-det">
              <div className="cart-details">
                <p>Sub Total</p>
                <p>Discount</p>
                <p>Shipping Fee</p>
                <p>Tax</p>
                <p>Total</p>
              </div>
              <div className="detail-price">
                <p>₦{getTotalPrice()}</p>
                <p>5% Off</p>
                <p>₦150,000</p>
                <p>₦0</p>
                <p>₦{getTotalPrice() * 0.95 + 150000}</p>
              </div>
            </div>
            <Link to='/payment'>
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


