// import Reviews from "@/common/Reviews";
"use client";
import { Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";
import Reviews from "./_components/Reviews";
const reviewsList = [
  {
    title: "Quality of service",
    rating: 4.6,
    icon: "/icons/image 138.svg",
  },
  {
    title: "Average response time",
    rating: 3.8,
    icon: "/icons/image 138 (1).svg",
  },
  {
    title: "Professionalism",
    rating: 4.8,
    icon: "/icons/image 138 (2).svg",
  },
  {
    title: "Value",
    rating: 4.9,
    icon: "/icons/image 138 (3).svg",
  },
  {
    title: "Flexibility",
    rating: 4.7,
    icon: "/icons/image 138 (4).svg",
  },
];
const Page = () => {
  const [isShowingReviews, setIsShowingReview] = useState(false);
  return (
    <div className="px-14 pt-8 pb-16">
      <h2 className="font-bold text-2xl text-[#444444] mb-4">Reviews</h2>
      <div className="flex flex-col space-y-8">
        <div className="bg-[#9924E908] border border-[#9924E921] rounded-[3px] pt-3 px-6 pb-5 flex space-x-6 items-start">
          <img src="/icons/clientReviewsIcon.svg" alt="client-review-icon" />
          <div>
            <p className="text-lg text-[#525252] font-medium">
              Get reviews from your clients
            </p>
            <p className="text-[#686868]">
              Reviews play a crucial role in helping others choose a vendor.
              Encourage your past clients to share their experiences by leaving
              a review for your business.
            </p>
            <Button
             href="/vendor/reviews/reviews-collector"
             as={Link}       
              variant="solid"
              size="lg"
              className="bg-brand text-white text-lg rounded-lg mt-5"

            >
              Request Reviews
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap -m-3">
          <div className="md:w-3/12 p-3 flex">
            <div className="lg:flex-grow border border-[#DADADA]  rounded-md pt-3.5 px-5 pb-6 ">
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-5xl text-[#525252] mb-1">
                  4.5
                  <span className="text-[#525252] text-base font-normal ml-4">
                    out of <span className="text-lg font-medium">5.0</span>
                  </span>
                </p>
                <p className="txet-[#505050] mb-5">Very Good</p>
                <Rating rating={4.5} />
              </div>
            </div>
          </div>
          <div className="md:w-9/12 p-3">
            <div className="border border-[#DADADA] rounded-md  grid md:grid-cols-3 pt-7 px-8">
              {reviewsList.map((review) => (
                <ReviewCard review={review} key={review.title} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex -m-3">
          <div className="w-3/12 p-3">
            <div></div>
          </div>
          <div className="w-9/12 p-3">
            <div className="border border-[#DADADA] rounded-md">
              {!isShowingReviews ? (
                <DisplayReviews setIsShowingReview={setIsShowingReview} />
              ) : (
                <div className=" pr-8 pl-8 pt-6 pb-14 rounded-md">
                  <Reviews />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
const Rating = ({ rating }: any) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>
            {i < Math.floor(rating) ? (
              <MdStar color="#FBBC05" className="size-9" />
            ) : i === Math.floor(rating) && rating % 1 >= 0.5 ? (
              <span className="half-star">
                <MdStarHalf color="#FBBC05" className="size-9" />
              </span>
            ) : (
              <MdStarBorder color="#FBBC05" className="size-9" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
const ReviewCard = ({ review }: any) => {
  return (
    <div className="font-medium text-[#505050] flex mr-24 mb-6 space-x-5">
      <img src={review.icon} alt="" className="size-10 " />
      <div className="flex flex-col">
        <p className="leading-4 whitespace-nowrap">{review.title}</p>
        <p className="font-semibold text-3xl text-[#525252]">{review.rating}</p>
      </div>
    </div>
  );
};

const DisplayReviews = ({ setIsShowingReview }: any) => {
  return (
    <div className="flex flex-col items-center justify-center pt-36 pb-52">
      <img src="/icons/displayReviews.svg" alt="" className="mb-4" />
      <p
        className="font-bold text-xl text-[#464646] cursor-pointer"
        onClick={() => setIsShowingReview(true)}
      >
        No review to display
      </p>
      <div className="flex">
        <p className="font-semibold text-[#464646]">
          You haven&apos;t received any review yet.
        </p>
        <Button
          variant="solid"
          size="lg"
          className="text-brand font-semibold px-0 py-0 h-6 rounded-none bg-transparent underline"
        >
          Request reviews
        </Button>
      </div>
    </div>
  );
};