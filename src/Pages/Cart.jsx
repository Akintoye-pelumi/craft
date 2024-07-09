import React from 'react'
import cart2 from '../Component/Assets/cart2.png'
import cart1 from '../Component/Assets/cart1.png'
import cart3 from '../Component/Assets/cart3.png'
import Dropdown from '../Component/Dropdown'
import {Link} from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <div className='cart'>
        <h1>Cart</h1>
      </div>
      <div className='line3'></div>
      <div className='cart-card'>
        <div className='cart-img'>
            <img src={cart2} alt="" />
            <div className='cart-des'>
                <h4>A complete set of sofas</h4>
                <p>A perfect blend of comfort and contemporary style, ideal for any living room.</p>
                <div className="cart-drop">
                    <Dropdown/>
                    <p className='cart-price'>₦800,000</p>
                </div>
                
            </div>
            <p className='remove'>Remove</p>
        </div>  
      </div>
      <div className='cart-card'>
        <div className='cart-img'>
            <img src={cart1} alt="" />
            <div className='cart-des'>
                <h4>A king-sized bed</h4>
                <p>Experience unmatched comfort and elegance with our premium bed.</p>
                <div className="cart-drop">
                    <Dropdown/>
                    <p className='cart-price'>₦1,300,999</p>
                </div>
                
            </div>
            <p className='remove'>Remove</p>
        </div>  
      </div>
      <div className='cart-card'>
        <div className='cart-img'>
            <img src={cart3} alt="" />
            <div className='cart-des'>
                <h4>6-seater dining set for family</h4>
                <p>Enjoy your meals in comfort with our elegantly upholstered dining chairs.</p>
                <div className="cart-drop">
                    <Dropdown/>
                    <p className='cart-price'>₦800,999</p>
                </div>
                
            </div>
            <p className='remove'>Remove</p>
        </div>  
      </div>
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
            <p>₦2,901,998</p>
            <p>5% Off</p>
            <p>₦150,000</p>
            <p>₦0</p>
            <p>₦2,906,898</p>
        </div>
        </div>
        <Link to='/payment'>
        <button>Proceed to Checkout</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Cart;
