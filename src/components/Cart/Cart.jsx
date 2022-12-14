import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../store/Cart-Context';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Checkout from './Checkout';


const Cart = (props) => {
const [isCheckout, setIsCheckout] = useState(false);

const [isSubmitting, setIsSubmitting] = useState(false);
const [didSubmit, setDidSubmit] = useState(false);

const cartCtx = useContext(CartContext);

const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
const hasItems = cartCtx.items.length > 0;

const cartItemRemoveHandler = (id) => {
cartCtx.removeItem(id);
};

const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
}; 

const orderHandler = () => {
setIsCheckout(true);
}

const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    // we will not assign to response to check status code and won't catch any errors
 await fetch('https://react-practice-e9d43-default-rtdb.firebaseio.com/orders.json', {
method: 'POST',
body: JSON.stringify({
user : userData,
orderItems: cartCtx.items
})
});
setIsSubmitting(false);
setDidSubmit(true);
cartCtx.clearCart();
};
    const cartItems = ( 
    <ul className={classes['cart-items']}> 
    {cartCtx.items.map((item) => (

<CartItem 
key={item.id} 
amount={item.amount} 
name={item.name} 
price={item.price} 
onRemove={cartItemRemoveHandler.bind(null, item.id)}
onAdd={cartItemAddHandler.bind(null, item)}
/>
    ))}
    </ul>
    );

    // let navigate = useNavigate()
    // const Linker  = () => {
    //    return  navigate('/dashboard')
    // };

   const modalActions = (
        <div className={classes.actions}>
        <button onClick={props.onCloseCart} 
        className={classes['button-alt']}>
        Close
        </button>
        {hasItems && <button
        //  onClick={Linker } 
        onClick={orderHandler}
        className={classes.button}>
        Order
        </button>}
        </div>
    )

const cartModalContent = (
<React.Fragment>
     {cartItems}
<div className={classes.total}>
    <span>
        Total Amount
    </span>
    <span>
        {totalAmount}
    </span>
</div>
{ isCheckout && (
<Checkout 
onSubmit={submitOrderHandler}
onCancel={props.onCloseCart}/> 
)}
{!isCheckout && modalActions}
</React.Fragment>
);
const isSubmittingModalContent = <p> Sending Order data... </p>

const didSubmitModalContent = <React.Fragment>
    <p> Successfully sent the order! </p> 
    <div className={classes.actions}>
        <button onClick={props.onCloseCart} 
        className={classes.button}>
        Close
        </button>
        </div>
    </React.Fragment>

return (
 <Modal closeCart={props.onCloseCart}>
    {!isSubmitting && !didSubmit && cartModalContent}
    {isSubmitting && isSubmittingModalContent}
    {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
  );
};

export default Cart;