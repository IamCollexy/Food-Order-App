import React from 'react'

const Checkout = () => {

  return (
    <div>    
    <h1>Checkout page</h1>
   <form>
    <label>
    Name
    </label>
    <input type="text" name="name" placeholder='enter Name'/>
    <label>
   Email
    </label>
    <input type="email" name="email" placeholder='enter email address'/>
    <label>
  Phone Number 
    </label>
    <input type="number" name="phone" placeholder='enter phone number'/>
    <label>
    Address
    </label>    <input type="address" name="address" placeholder='enter address'/>
<button type="submit">Submit</button>
   </form>
   </div>

  )
}

export default Checkout