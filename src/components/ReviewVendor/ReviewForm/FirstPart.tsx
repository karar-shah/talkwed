import Typography from "@/common/Typography";
import { FaStar } from "react-icons/fa";
import { feedbackQuestions } from ".";

export const FirstPart = () => {
  return (
    <>
      <Typography
        title="How was your experience at Live Picture Studios?"
        component="h2"
        className="text-[#8E8E8E] text-xl"
      />
      <div className="flex flex-wrap">
        {feedbackQuestions?.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 my-4">
            <div className="text-[#444444] text-lg font-medium pb-2">
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
  return (
    <div className="flex items-center space-x-2">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className="text-[#D9D9D9] size-6 cursor-pointer" />
      ))}
    </div>
  );
};