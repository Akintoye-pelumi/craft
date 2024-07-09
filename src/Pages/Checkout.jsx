import React from 'react'
import success from '../Component/Assets/success.png'
import {Link} from 'react-router-dom'

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className="checkout-success">
            <h1>Payment Successful</h1>
            <p>Thank you for your purchase</p>
        </div>
        <div className="checkout-image">
            <img src={success} />
        </div>
        <div className='checkout-details'>
            <div className="checkout-detail">
                <p>Order Number:</p>
                <p>Order Date:</p>
                <p>Name:</p>
                <p>Addres:</p>
                <p>Email:</p>
                <p>Phone:</p>
            </div>
            <div className="checkout-det">
                <p>#1164937637</p>
                <p>05-07-2024</p>
                <p>Guy Hawkins</p>
                <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                <p>guy.hawkins@example.com</p>
                <p>(307) 555-0133</p>
            </div>
        </div>
        <div className="checkout-button">
            <Link to='/'>
            <button>Continue Shopping</button>
            </Link>
            
        </div>
        <div className="checkout-need">
            <p className='need-help'>Need Help?</p>
            <p className='need-help2'>If you have any questions about your order, please contact our customer support team at:</p>
        </div>
        <div className="checkout-contact">
            <p>(808) 555-0111</p>
            <p>Craft@service.net</p>
        </div>
    </div>
  )
}

export default Checkout
