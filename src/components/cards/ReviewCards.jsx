import React from "react";

import Image from "next/image";
import { Star, Heart } from "lucide-react";

const ReviewCards = ({ review }) => {
  return (
    <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between hover:border-red-600/40 transition">
      {/* Top */}
      <div>
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
            <div className="relative w-10 h-10 overflow-hidden rounded-full shrink-0">
              <Image
                src={review.photo}
                alt={review.user}
                fill
                sizes="40px"
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-white truncate">
              {review.user}
            </h4>
            <p className="text-xs text-gray-400">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-red-600 text-sm font-semibold">
            <Star size={14} fill="currentColor" />
            {review.rating}
          </div>
        </div>

        {/* Review text */}
        <p className="text-sm text-gray-300 mt-4 leading-relaxed line-clamp-4">
          {review.review}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-5 pt-3 border-t border-zinc-800">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Heart size={14} className="text-red-600" />
          {review.likes.length}
        </div>

        <button className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 transition">
          <Heart size={14} />
          Like
        </button>
      </div>
    </div>
  );
};

export default ReviewCards;
