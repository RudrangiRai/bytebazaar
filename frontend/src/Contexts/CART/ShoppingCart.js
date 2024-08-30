// ShoppingCart.js
import React from 'react';
import { useCart } from '../CART/CartContext';
import CartItem from '../CART/CartItem';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))}
      </div>
      <p>Total: ${getTotalPrice()}</p>
    </div>
  );
};

export default ShoppingCart;
