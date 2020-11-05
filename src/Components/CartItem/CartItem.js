import React from 'react';
import './CartItem.css';

const CartItem = ({
  img,
  title,
  priceFormat,
  price,
  type,
  id,
  style,
  count,
  removeFromCart,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-item__del" onClick={() => removeFromCart(id)}></div>
      <div className="cart-item__thumb">
        <img src={img} alt={title} />
      </div>
      <div className="cart-item__details">
        <p className="title">{style}</p>
        <p className="desc">{title}</p>
        <p className="amount">Quantity: {count}</p>
      </div>
      <div className="cart-item__price">
        <p>$ {(price * count).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
