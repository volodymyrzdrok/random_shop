import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Cart from './Components/Cart/Cart';
import productsData from './db/product.json';
import { useSelector, useDispatch } from 'react-redux';
import { addCartToBasket, addNewCartToBasket, removeCart } from './redux/slice';
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const order = useSelector(state => state.order);
  const [products, setProducts] = useState(productsData);

  const dispatch = useDispatch();
  const switchCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = id => {
    const item = products.find(product => product.id === id);
    const checkCardItem = order.find(orderItem => orderItem.id === id);

    if (checkCardItem) {
      dispatch(addCartToBasket(id));
    } else {
      item.count = 1;
      dispatch(addNewCartToBasket(item));
    }
  };

  const removeFromCart = id => {
    dispatch(removeCart(id));
  };
  return (
    <>
      <Header />
      <Main products={products} addToCart={addToCart} />
      <Cart
        cartStatus={isCartOpen}
        switchCart={switchCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default App;
