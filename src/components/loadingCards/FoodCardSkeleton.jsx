import React from 'react';

const FoodCardSkeleton = () => {
  return (
    <div className="w-full max-w-[320px] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden animate-pulse">

      {/* Image Skeleton */}
      <div className="h-40 bg-zinc-800"></div>

      {/* Content Skeleton */}
      <div className="p-3 space-y-2">
        <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
        <div className="h-3 bg-zinc-800 rounded w-1/2"></div>

        <div className="h-5 bg-zinc-800 rounded w-20 mt-2"></div>

        <div className="flex gap-2 mt-3">
          <div className="h-8 bg-zinc-800 rounded-md w-full"></div>
          <div className="h-8 bg-zinc-800 rounded-md w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;