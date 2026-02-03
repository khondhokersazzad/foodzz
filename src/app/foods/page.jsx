import FoodCards from "@/components/cards/FoodCards";
import React from "react";
import CartItems from "./CartItems";


const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  const filterFoods = (data.foods || []).filter(
    (food) => food.category !== "Pork",
  );
  return filterFoods;
};

const FoodsPage = async () => {
  const foods = await getFoods();
  console.log(foods);
  return (
    <div>
      <h1 className="text-3xl font-semibold py-5 px-3">
        Total <span className="text-red-600">{foods.length}</span> foods found
      </h1>

      <div className="flex gap-5">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 my-5 px-5 mx-auto">
          {foods.map((food) => {
            return <FoodCards key={food.id} food={food}></FoodCards>;
          })}
        </div>
        <div className="w-[250px] border-1 rounded-xl p-5">
          <h2>Cart Items</h2>
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
