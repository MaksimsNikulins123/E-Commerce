import React from 'react';


import classes from './index.module.scss'

const MovingBanner = () => {
  return (
    <div className={classes.movingBannerContainer}>
      <div className={classes.movingBannerWrapper}>
        <div className={classes.movingBannerItem}>
          <p>FREE shipping on orders over 150Eur/$</p>
          <span>.</span>
          <p>Worldwide delivery</p>
          <span>.</span> 
          <p>More than 10’000 happy clients all over the world!</p>
          <span>.</span>
          </div>
        <div className={classes.movingBannerItem}>
          <p>FREE shipping on orders over 150Eur/$</p>
          <span>.</span>
          <p>Worldwide delivery</p>
          <span>.</span> 
          <p>More than 10’000 happy clients all over the world!</p>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default MovingBanner;