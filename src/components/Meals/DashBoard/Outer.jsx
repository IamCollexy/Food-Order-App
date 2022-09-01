import React, { useState } from 'react'
import Cart from '../../Cart/Cart'
import Header from '../../Layout/Header'
import CartProvider from '../../store/CartProvider'
import Meals from '../Meals'

const outer = () => {

    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
      setShowCart(true);
    }
    const hideCartHandler = () => {
      setShowCart(false);
    }
    
  return (
    <div>
            <CartProvider>
    {showCart && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}  />
       <main> 
      <Meals/>
       </main> 
      </CartProvider>
      
    </div>
  )
}

export default outer