'use client'
import React, { createContext, useState } from 'react';

export const CartContext = createContext();
const CartProvider = ({children}) => {
  const [cart,setCart] = useState([]); //state for storing cart item

  const addToCart = (item) =>{ //function which will add the items inside the cart
    //checking whethere item already exist in the cart 
    const exist = cart.find(cartItem => cartItem.id === item.id)
    if(exist){
      setCart(
        cart.map(
          cartItem => cartItem.id === item.id ? {
            ...cartItem, quantity: cartItem.quantity + 1
          }: cartItem
        )
      )
    }
    else{

      setCart([{ ...item, quantity: 1 }, ...cart]);
    }
  }

  const increaseQty = (itemId) => { setCart( cart.map(cartItem => cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem ) ); };

  const decreaseQty = (itemId) => {
  setCart(
    cart.map(cartItem =>
      cartItem.id === itemId && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  );
}



  const removeFromCart = (item) => { setCart(cart.filter(cartItem => cartItem.id !== item.id)); };
  const cartInfo =  {
    cart, addToCart, removeFromCart, increaseQty , decreaseQty
  }
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;