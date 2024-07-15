import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://timbu-get-single-product.reavdev.workers.dev/products/${productId}?organization_id=bd69447b6c844e51898b7defad628fd1&Appid=J5W67RSC78B84Y2&Apikey=2517b21ed8b3426b98f5e10ceee4d83920240712125230361802`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Product:', data); 
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <p className='loading'>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const price = product.price && product.price.length > 0 && product.price[0].NGN 
    ? product.price[0].NGN[0] 
    : 'Price not available';

  return (
    <div className='product-details'>
      <img src={product.photos && product.photos.length > 0 && product.photos[0].url ? `https://api.timbu.cloud/images/${product.photos[0].url}` : 'default-image-url'} alt={product.name || 'Product Image'} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ₦{price}</p>
    </div>
  );
};

export default ProductDetails;
