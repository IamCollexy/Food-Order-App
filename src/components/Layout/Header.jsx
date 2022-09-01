import React, {Fragment} from 'react';
import classes from './Header.module.css';
import MealsImage from '../../assets/African_Dishes.jpg';
import HeaderCartButton from './HeaderCartButton'; 

const Header = (props) => {
  return (
  <Fragment>
    <header className={classes.header}>
    <h1>CDG Meals</h1>
   <HeaderCartButton showCart={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
<img src={MealsImage} alt='African Meal' />
    </div>
  </Fragment>
  )
}

export default Header;