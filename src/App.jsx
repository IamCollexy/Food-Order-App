import React, { Fragment } from 'react'
import { useState } from 'react'
// import Cart from './components/Cart/Cart'
// import Header from './components/Layout/Header'
import DashBoard from './components/Meals/DashBoard/DashBoard';
// import Meals from './components/Meals/Meals';
// import CartProvider from './components/store/CartProvider';
import Outer from './components/Meals/DashBoard/Outer';
import { Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

const App = () => {


  return (
    <Routes>
<Route path={'/'} element={ <Outer/>}/>
 <Route path={'dashboard'} element= {<DashBoard/>}/> 
 <Route path={'checkout'} element= {<Checkout/>}/> 
 </Routes>
      
     
  )
}

export default App;