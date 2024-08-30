// Cart.jsx
import React from 'react';
import { useCart } from '../Contexts/CART/CartContext';
import CartItem from '../Contexts/CART/CartItem';
import './CSS/cart.css'
const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={() => removeFromCart(item.id)} />
        ))}
      </div>
      <p>Total: ${getTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default Cart;
