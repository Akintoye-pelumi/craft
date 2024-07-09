import React from 'react'
import bank from '../Component/Assets/bank.png'
import paypal from '../Component/Assets/paypal.png'
import creditcard from '../Component/Assets/creditcard.png'
import {Link} from 'react-router-dom'

const Payment = () => {
  return (
    <div className='payment'>
      <div className="payment-con">
        <div className="pay-con">
            <h3>Contact</h3>
            <div className="paycon-input">
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Phone number' />
            </div>
            
        </div>
        <div className="shipp">
          <h3>Shipping Information</h3>
          <div className="ship-name">
            <input type="text" placeholder='Firstname' />
            <input type="text" placeholder='Lastname' />
          </div>
            <div className="ship-location">
              <select id="dropdown-menu">
                  <option value="action1">Country</option>
              </select>
              <select id="dropdown-menu">
                  <option value="action1">State</option>
              </select>
              <input type="text" placeholder='City' />
              <input type="text" placeholder='Postal code' />
            </div>
            <div className="street-add">
              <input type="text" placeholder='Street address' />
            </div> 
        </div>
      </div>
      <div className="payment-det">
        <h3>Payment Method</h3>
        <div className="payment-method">
          <button className='credit1'>Credit Card <img src={creditcard}/></button>
          <button>Paypal <img src={paypal}/></button>
          <button>Bank Transfer <img src={bank}/></button>
        </div>
        <div className="card-payment">
          <label >Card Number</label>
          <input type="text" placeholder='xxxx xxxx xxxx xxxx'/>
          <label >Card Name</label>
          <input type="text" placeholder="Holder's Name"/>
          <div className="card-expire">
            <div className="field">
              <label >Expiry Date</label>
              <input type="text" placeholder='xx/xx' />
            </div>
            <div className="field">
              <label >Cvv</label>
              <input type="text" placeholder='xxx' />
            </div>
            
          </div>
          <Link to='/checkout'>
          <button>Make Payment</button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Payment
