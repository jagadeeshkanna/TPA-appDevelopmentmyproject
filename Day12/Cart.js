import React from 'react';
import cartItems from 'cartItems'
const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      {/* Render the added cart items */}
      {cartItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
export default Cart;