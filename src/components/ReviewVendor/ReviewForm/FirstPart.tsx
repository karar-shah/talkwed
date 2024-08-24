import Typography from "@/common/Typography";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { feedbackQuestions } from ".";

export const FirstPart = () => {
  return (
    <>
      <Typography
        title="How was your experience at Live Picture Studios?"
        component="h2"
        className="text-[#8E8E8E] text-[22px] font-semibold pt-2"
      />
      <div className="flex flex-wrap mt-10">
        {feedbackQuestions?.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 my-4">
            <div className="text-custom-gray-500 text-lg font-medium pb-2">
              {item.title}
            </div>
            <RatingList />
          </div>
        ))}
      </div>
    </>
  );
};

const RatingList = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div className="flex items-center space-x-2">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`size-6 cursor-pointer ${
              starValue <= rating ? "text-[#FBBC05]" : "text-[#D9D9D9]"
            }`}
            onClick={() => handleRating(starValue)}
          />
        );
      })}
    </div>
  );
};
