import Image from "next/image";
import React from "react";

const singleFoods = async (id) => {
  const res = await fetch(
    ` https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();

  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await singleFoods(id);
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        {/* Image Section */}
        <div className="relative w-full h-72 md:h-full rounded-xl overflow-hidden">
          <Image
            src={food.foodImg}
            alt={food.title}
            fill
            unoptimized
            className="object-cover"
          />
          <span className="absolute top-3 left-3 bg-red-600 text-xs font-semibold px-3 py-1 rounded-md">
            {food.category}
          </span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">{food.title}</h1>

            <p className="text-gray-400 text-sm mt-2">
              Category ID: {food.catId}
            </p>

            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              A delicious premium dish made with fresh ingredients. Perfectly
              cooked and served hot to satisfy your cravings.
            </p>

            <p className="text-2xl font-bold text-red-600 mt-6">
              ৳{food.price}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-8">
            <button className="flex-1 bg-red-600 hover:bg-red-700 transition py-2 rounded-lg text-sm font-semibold">
              Add to Cart
            </button>

            <button className="flex-1 border border-red-600 text-red-500 hover:bg-red-600/10 transition py-2 rounded-lg text-sm font-semibold">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
