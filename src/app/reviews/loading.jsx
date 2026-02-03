
import ReviewCardSkeleton from "@/components/loadingCards/ReviewCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 my-5 px-5 mx-auto">
      {[...Array(12)].map((_, index) => (
        <ReviewCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
