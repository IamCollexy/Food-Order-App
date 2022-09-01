import React from 'react'
import classes from './DashBoard.module.css';
import {FaCheckCircle} from 'react-icons/fa';
const DashBoard = () => {
  return (
    <div>
    <div className={classes.Nav}>DashBoard</div>
   <div 
   style={{
    textAlign: 'center',
    marginTop: '200px',
    color: 'white',
   }}
   >
    <h2>Your Order Has been received</h2>
  <FaCheckCircle size={100}  color={'green'}/>
    <h3   style={{
    textAlign: 'center',
      marginTop: '30px',
    color: 'white',
   }}>Your meal will be delivered to you shortly...</h3>
      </div>
    </div>

  )
}

export default DashBoard
