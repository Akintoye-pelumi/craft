import React from 'react'
import Logo from'../Assets/logo.png'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='d-flex gap-3 footer-div1'>
        <img src={Logo} alt="" />
        <p>Craft</p>
      </div>
      <div className='d-flex footer-div2'>
        <div className='footer-s'>
            <p>Shop</p>
            <p>Delivery & Return</p>
            <p>Wholesale</p>
            <p>Sustainability</p>
            <p>About</p>
            <p>Why choose us</p>
        </div>
        <div className='footer-contact'>
            <h4>Contact</h4>
            <p>(808) 555-0111</p>
            <p>Craft@service.net</p>
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
        <div className='footer-social'>
            <h4>Socials</h4>
            <p>Facebook</p>
            <p>X (Twitter)</p>
            <p>Instagram</p>
            <p>WhatsApp</p>
            <p>Tiktok</p>
        </div>
      </div>
      <div className='footer-div3'>
        <p>©2024 - South Dakota. US All rights reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer
