import React from 'react';
import styles from './FilterBlock.module.css';
import sizes from '../../db/sizes.json';
import SingleFilter from '../SingleFilter/SingleFilter';

const FilterBlock = () => {
  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Sizes:</h4>
      {sizes.map(size => (
        <SingleFilter key={size} value={size} />
      ))}
    </div>
  );
};

export default FilterBlock;
