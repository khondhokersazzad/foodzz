import FoodCards from '@/components/cards/FoodCards';
import React from 'react';

const getFoods = async () =>{
    const res = await fetch(' https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const data = await res.json();

    return data.foods || [];
    
    
  }

const FoodsPage = async () => {
  const foods = await getFoods();
  console.log(foods);
  return (
    
    <div>
      <h1 className='text-3xl font-semibold py-5 px-3'>Total <span className='text-red-600'>{foods.length}</span> foods found</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 my-5 px-5 mx-auto'>
        {
          foods.map(food =>{
            return <FoodCards key={food.id} food={food}></FoodCards>
          })
        }
      </div>
    </div>
  );
};

export default FoodsPage;