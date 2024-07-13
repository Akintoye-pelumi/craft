import React, { useEffect, useState } from 'react'
// import data_products from './Assets/data'
import Item from './Items/Item'
import about from '../Component/Assets/about.png'
// import axios from 'axios'

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(`/api/products?organization_id=bd69447b6c844e51898b7defad628fd1&reverse_sort=false&page=1&Appid=J5W67RSC78B84Y2&Apikey=2517b21ed8b3426b98f5e10ceee4d83920240712125230361802`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
       console.log('Fetched products:', data.items);
      setProducts(data.items);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

if (loading) {
  return <div className='loading'>Loading...</div>;
}
if (error) {
  return <div>Error fetching products: {error.message}</div>;
}

  return (
    <div>
      <div className="productlist">
        <div className="line1"></div>
        <h1>Our Products</h1>
        <div className="line2"></div>
      <div className='productlist_items'>
        {products.map((item, i)=>(
          <div className="productlist_item" key={i}>
          <Item id={item.id} name={item.name} photos={item.photos} description={item.description} price={item.current_price} />
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


