import React from 'react';

const ReviewCardSkeleton = () => {
  return (
    <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 animate-pulse flex flex-col justify-between">

      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-800 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-zinc-800 rounded w-1/3"></div>
            <div className="h-3 bg-zinc-800 rounded w-1/4"></div>
          </div>
          <div className="h-4 bg-zinc-800 rounded w-10"></div>
        </div>

        <div className="space-y-2 mt-4">
          <div className="h-3 bg-zinc-800 rounded w-full"></div>
          <div className="h-3 bg-zinc-800 rounded w-5/6"></div>
          <div className="h-3 bg-zinc-800 rounded w-2/3"></div>
        </div>
      </div>

      <div className="flex justify-between mt-5 pt-3 border-t border-zinc-800">
        <div className="h-3 bg-zinc-800 rounded w-12"></div>
        <div className="h-3 bg-zinc-800 rounded w-10"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
