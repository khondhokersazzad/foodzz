import Link from "next/link";
import React from "react";
import CartBtn from "../buttons/CartBtn";

const FoodCards = ({ food }) => {
  return (
    <div className="w-full max-w-[320px] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600/20 transition">
      {/* Image */}
      <div className="relative">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-40 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
          {food.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-base font-semibold text-white truncate">
          {food.title}
        </h3>

        <p className="text-xs text-gray-400 mt-1">Category ID: {food.catId}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-red-600">৳{food.price}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <CartBtn food={food}></CartBtn>

          <Link
            href={`/foods/${food.id}`}
            className="flex-1"
          >
            <span className="block w-full text-center border border-red-600 text-red-500 py-1.5 rounded-md text-xs font-medium hover:bg-red-600/10 transition">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
