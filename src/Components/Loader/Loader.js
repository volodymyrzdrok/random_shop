import React from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const LoaderSpinner = () => {
  return (
    <div className={s.loaderSpinner}>
      <Loader type="ThreeDots" color="#3f50b0" height={100} width={100} />
    </div>
  );
};

export default LoaderSpinner;
