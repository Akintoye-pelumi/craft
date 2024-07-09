import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Button } from 'react-bootstrap'
// import './App.css';

const Header = () => {
  return (
    <div className='header'>
        <Navbar />
        <div className='header-text'>
            <h3>CRAFTED FOR COMFORT, DESIGNED FOR LIFE</h3>
            <p>Experience the perfect harmony of craftsmanship and modern design.</p>
        </div>
        <div className="header-button">
            <Button variant="secondary" href="" className="custom-button1">All furnitures</Button>
            <Button variant="secondary" href="" className="custom-button">Living Room furnitures</Button>
            <Button variant="secondary" href="" className="custom-button">Dining Room furnitures</Button>
            <Button variant="secondary" href="" className="custom-button">Bedroom furnitures</Button>
            <Button variant="secondary" href="" className="custom-button">Office furnitures</Button>
            <Button variant="secondary" href="" className="custom-button">Outdoor furnitures</Button>
        </div>
    </div>
  )
}

export default Header
