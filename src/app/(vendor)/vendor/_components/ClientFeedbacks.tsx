import Rating from "@/common/Rating";
import { Avatar, Button } from "@nextui-org/react";
import moment from "moment";
import { useState } from "react";

export const reviews = [
  {
    date: new Date(),
    title: "Rock C.",
    rating: 2.5,
    img: "",
    message:
      "Live Picture Studios was one of my favorite vendors to work with. They were truly professional and walked me through every step of the process... Live Picture Studios was one of my favorite vendors to work with. ",
  },
  {
    date: new Date(),

    title: "Aaron W.",
    rating: 3.5,
    img: "",
    message:
      "Live Picture Studios was one of my favorite vendors to work with. They were truly professional and walked me through every step of the process... Live Picture Studios was one of my favorite vendors to work with. ",
  },
];

const ClientFeedbacks = () => {
  const [isShowingFeedbacks, setIsShowingFeedbacks] = useState(false);
  return (
    <div className=" pt-7 px-6 border border-[#DADADA] rounded-[10px] ">
      <div className="flex items-center justify-between">
        <p className="text-[#444444] text-xl font-medium">Client Feedbacks</p>
        <Button
          variant="light"
          className="font-medium text-base border-none underline text-[#6B14A6] hover:!bg-transparent"
          onClick={() => setIsShowingFeedbacks(!isShowingFeedbacks)}
        >
          View all
        </Button>
      </div>

      {!isShowingFeedbacks ? (
        <div className="flex flex-col items-center justify-center text-center lg:px-[87px] mb-24 mt-[87px]">
          <img
            src="/icons/feedback-icon.svg"
            alt="feedback-icon"
            className="size-[100px] mb-3.5"
          />
          <p className="text-lg text-[#616161] mb-1.5">
            You haven’t received any reviews yet
          </p>
          <p className="font-light text-[#8C8C8C]">
            Reviews play a crucial role when clients are choosing a vendor.
            Encourage your clients to leave reviews and provide feedback on your
            services.
          </p>
        </div>
      ) : (
        <div className="space-y-4 py-4 divide-y">
          {reviews.map((item, index) => (
            <div key={index} className=" py-2 space-y-2">
              <div className="flex items-center space-x-2">
                <div>
                  <Avatar name={item.title} src={item.img || undefined} />
                </div>
                <div className="">
                  <h3 className="text-custom-gray-500 font-semibold text-lg">
                    {item.title}
                  </h3>
                  <Rating rating={item.rating} />
                </div>
              </div>
              <p className="line-clamp-2">
                {item.message}
                <Button
                  variant="ghost"
                  className="font-medium text-base border-none underline text-[#6B14A6]"
                >
                  Read more
                </Button>
              </p>
              <div className="text-[#8B8B8B] text-sm font-medium">
                Sent on {moment().format("L")}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientFeedbacks;
