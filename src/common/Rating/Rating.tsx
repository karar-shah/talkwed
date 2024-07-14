import React from "react";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const Rating = ({ rating, className }: any) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>
            {i < Math.floor(rating) ? (
              <MdStar color="#FBBC05" />
            ) : i === Math.floor(rating) && rating % 1 >= 0.5 ? (
              <span className="half-star">
                <MdStarHalf color="#FBBC05" />
              </span>
            ) : (
              <MdStarBorder color="#FBBC05" />
            )}
          </span>
        ))}
      </div>

      <span className="text-[#565656] font-semibold text-base">{rating}</span>
    </div>
  );
};

export default Rating;
