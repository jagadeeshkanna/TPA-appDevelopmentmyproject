import React from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';
//import cardItems from 'react-router-dom/ca';
import cartItems from '@mui/material'
const ParentComponent = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div>
      {/* Render the product cards */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {/* Render the cart */}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default ParentComponent;