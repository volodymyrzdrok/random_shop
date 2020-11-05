import React from 'react';
import './Main.css';
import FilterBlock from '../FilterBlock/FilterBlock';
import CardsColection from '../CardsColection/CardsColection';

const Main = ({ products, addToCart }) => {
  return (
    <main>
      <FilterBlock />
      <CardsColection products={products} addToCart={addToCart} />
    </main>
  );
};

export default Main;
