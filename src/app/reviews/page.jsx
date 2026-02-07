import ReviewCards from '@/components/cards/ReviewCards';
import React from 'react';

const getReviews = async () =>{
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/reviews`);
  const data = await res.json();
  return data.reviews || [];
}

export const metadata = {
  title: "All Reviews",
  description: "A Restaurant food delevery app",
};

const page = async () => {
  const reviews = await getReviews();
  console.log(reviews);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 my-5 px-5 mx-auto'>
      {
        reviews.map( review =>{
          return <ReviewCards key={review.id} review={review}></ReviewCards>
        })
      }
    </div>
  );
};

export default page;