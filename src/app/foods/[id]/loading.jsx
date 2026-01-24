import React from 'react';

const loading = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex justify-center animate-pulse">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

        {/* Image Skeleton */}
        <div className="w-full h-72 md:h-full bg-zinc-800 rounded-xl"></div>

        {/* Content Skeleton */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <div className="h-6 bg-zinc-800 rounded w-3/4"></div>
            <div className="h-4 bg-zinc-800 rounded w-1/3"></div>

            <div className="space-y-2 mt-4">
              <div className="h-4 bg-zinc-800 rounded w-full"></div>
              <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
              <div className="h-4 bg-zinc-800 rounded w-2/3"></div>
            </div>

            <div className="h-7 bg-zinc-800 rounded w-28 mt-6"></div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex gap-3 mt-8">
            <div className="h-10 bg-zinc-800 rounded-lg w-full"></div>
            <div className="h-10 bg-zinc-800 rounded-lg w-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default loading;