"use client";
import CartItemCard from "@/components/cards/CartItemCard";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      <div>{cart.length} cart items found!!</div>
      <div className="my-5 ">
        {
          cart.map(item => <CartItemCard key={item.id} item={item} ></CartItemCard>)
        }
      </div>
    </div>
  );
};

export default CartItems;
