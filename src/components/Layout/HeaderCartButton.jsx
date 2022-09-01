import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/Cart-Context';
import { useEffect } from 'react';
import { useState } from 'react';

const HeaderCartButton = (props) => {
const [btnBumper, setBtnBumper] = useState(false);

  const cartCtn = useContext(CartContext)
  // .reduce() method is used to transform an array of data into a single value.
  const {items} = cartCtn;
  const numberOfCartCtn = items.reduce((curntNumber, item) => {
    return curntNumber + item.amount;
  }, 0);



const btnClasses = `${classes.button} ${btnBumper ? classes.bump : ''}`;

useEffect(()=> {
  if (cartCtn.items.length === 0) {
return;
  }
setBtnBumper(true);
const timer = setTimeout(()=> {
  setBtnBumper(false);
}, 300);

return () => {
clearTimeout(timer);
};
},[items]);

  return (
<button className={btnClasses}  onClick={props.showCart} >
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
       {numberOfCartCtn}
    </span>
</button>
  )
}

export default HeaderCartButton