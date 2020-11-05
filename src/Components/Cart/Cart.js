import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const Cart = ({ cartStatus, switchCart, removeFromCart }) => {
  const order = useSelector(state => state.order);
  const countTotalPrice = () => {
    return order
      .reduce((acc, orderItem) => acc + orderItem.price * orderItem.count, 0)
      .toFixed(2);
  };
  return (
    <div className={cartStatus ? 'float-cart float-cart--open' : 'float-cart'}>
      <span className="bag bag--float-cart-closed" onClick={switchCart}>
        <span className="bag__quantity">
          {order.reduce((acc, orderItem) => acc + orderItem.count, 0)}
        </span>
      </span>

      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{order.length}</span>
          </span>
          <span className="float-cart__header-title">Cart </span>
        </div>
        <div className="float-cart__card-container">
          {order.map(orderItem => (
            <CartItem
              {...orderItem}
              key={orderItem.id}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className="float-cart__footer">
          <div className="total">
            <p className="sub">TOTAL</p>
            <p className="price-total">$ {countTotalPrice()}</p>
          </div>
          <div className="buy-btn">Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cartStatus: PropTypes.bool.isRequired,
  switchCart: PropTypes.func.isRequired,
};
