import React from 'react';
import styles from './SingleFilter.module.css';
import { changeFilterSize } from '../../redux/slice';
import { useDispatch } from 'react-redux';

const SingleFilter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles['available-size']}>
      <label className={styles.label}>
        <input
          type="radio"
          name="checkboxId"
          className={styles.input}
          value={value}
          onChange={e => dispatch(changeFilterSize(e.target.value))}
        />
        <span className={styles.checkmark}>{value === '' ? 'all' : value}</span>
      </label>
    </div>
  );
};

export default SingleFilter;
