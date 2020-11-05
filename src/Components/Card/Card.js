import React from 'react';
import './CardStyle.css';
import pinSvg from './images/pin.svg';

const Card = ({ addToCart, product, favoriteItem, allProducts }) => {
  const { img, style, title, currencyFormat, price, type, id } = product;

  return (
    <li
      className={
        allProducts.indexOf(product) === 0
          ? 'card-item card-item--favorite '
          : ' card-item '
      }
    >
      <div className="card-item__thumb">
        <img src={img} alt={style} />
      </div>
      <div className="card-item__clip" onClick={() => favoriteItem(id)}>
        {allProducts.indexOf(product) !== 0 && (
          <svg className="card-item__icon">
            <use href={`${pinSvg}#pin`}></use>
          </svg>
        )}
      </div>
      <p className="card-item__title">{style}</p>
      <p className="card-item__disription">{title}</p>
      <div className="card-item__price">
        <div className="installment">
          {currencyFormat} {price}
        </div>
      </div>
      <div className="card-item__buy-btn" onClick={() => addToCart(id)}>
        Add to cart
      </div>
    </li>
  );
};

export default Card;
