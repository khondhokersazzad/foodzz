'use client'
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';



const CartBtn = ({food}) => {
  const [inCart, setInCart] = useState(false);
  const {addToCart,removeFromCart} = use(CartContext);

  const toggleCart = () =>{
    if(inCart){
      removeFromCart(food);
    }else{
    addToCart(food);

    }
    setInCart(!inCart);
  }



  
  return (
    
      <button onClick={toggleCart} className={`flex-1 py-1.5 rounded-md text-xs font-medium transition 
      ${inCart ? 'bg-white hover:bg-stone-300 text-black' : 'bg-red-600 hover:bg-red-700 text-white'}`}>
            {inCart ? 'Added' : 'Add to cart'}
          </button>
    
  );
};

export default CartBtn;