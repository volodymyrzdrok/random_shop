import React from 'react';
import './CardsColection.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { changeFilter } from '../../redux/slice';
import { addFavoriteProduct } from '../../redux/slice';

const CardsColection = ({ addToCart }) => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(state => state.filter);
  const valueFilterSize = useSelector(state => state.filterSize);
  const products = useSelector(state => state.productsState);

  const favoriteItem = id => {
    const foundItem = products.find(item => item.id === id);
    const filterNewProducts = products.filter(item => item.id !== foundItem.id);
    dispatch(addFavoriteProduct([foundItem, ...filterNewProducts]));
  };

  const visibleProducts = products.filter(
    product =>
      (product.title.toLowerCase().includes(valueFilter.toLowerCase()) ||
        product.style.toLowerCase().includes(valueFilter.toLowerCase())) &&
      product.availableSizes.join('').includes(valueFilterSize),
  );

  return (
    <>
      <div className="filter-container">
        <span className="products-found">
          <b>{visibleProducts.length} </b>products found
        </span>
        <label>
          Find product by name or description
          <br />
          <input
            type="text"
            value={valueFilter}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
        </label>
      </div>
      <ul className="card__list">
        {visibleProducts.map(product => (
          <Card
            key={product.id}
            product={product}
            favoriteItem={favoriteItem}
            allProducts={products}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </>
  );
};

export default CardsColection;

CardsColection.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      availableSizes: PropTypes.arrayOf(PropTypes.string),
      style: PropTypes.string,
      price: PropTypes.number,
      currencyId: PropTypes.string,
      currencyFormat: PropTypes.string,
      isFreeShipping: PropTypes.bool,
      img: PropTypes.string,
    }),
  ),
  helloFunc: PropTypes.func,
};
