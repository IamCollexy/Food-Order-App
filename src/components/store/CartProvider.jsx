import CartContext from "./Cart-Context";
import React, {useReducer} from 'react';

const initialCartState = {
items: [],
totalAmount: 0,
};

const cartReducer = (state, action) => {
if (action.type === 'addItem') {
  const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

  const existingCartItemIndex = state.items.findIndex(item =>
     item.id === action.item.id);
  
     const newCartItem = state.items[existingCartItemIndex];

     let updatedItems;

     if (newCartItem) {
const updatedItem = {
  ...newCartItem,
  amount: newCartItem.amount + action.item.amount
}


updatedItems = [...state.items];

updatedItems[existingCartItemIndex] = updatedItem;
     } else {
      updatedItems = state.items.concat(action.item);
     }
return {
  items: updatedItems,
  totalAmount: updatedTotalAmount,
}
} 
if (action.type === 'removeItem') {
  const existingCartItemIndex = state.items.findIndex(item =>
    item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems ;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id );
    } else { 
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
     updatedItems[existingCartItemIndex] = updatedItem;
  }
  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
};
}
if (action.type === 'CLEAR') {
  return initialCartState;
}
return initialCartState;
};

const CartProvider = (props) => {
const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

const addItemToCart = (item) => {
  dispatchCartAction({type: 'addItem', item: item})
};
const removeItemFromCart = (id) => {
  dispatchCartAction({type: 'removeItem', id: id})
};

const clearCartHandler = () => {
  dispatchCartAction({type: 'CLEAR'});
}
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart: clearCartHandler
    };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
  }

export default CartProvider;
