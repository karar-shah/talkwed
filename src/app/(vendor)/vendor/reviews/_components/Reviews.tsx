"use client";
import Rating from "@/common/Rating";
import { Avatar, Chip } from "@nextui-org/react";
import moment from "moment";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const reviews = [
  {
    date: new Date(),
    title: "Rock C.",
    rating: 4.5,
    img: "/image 9 (1).svg",
    imgGallery: [""],
    likes: 0,
    category: "Private",
    message:
      "Live Picture Studios was one of my favorite vendors to work with. They were truly professional and walked me through every step of the process... Live Picture Studios was one of my favorite vendors to work with. ",
  },
  {
    date: new Date(),

    title: "Aaron W.",
    rating: 4.5,
    img: "/image 9.svg",
    imgGallery: [""],
    likes: 1,
    category: "Public",
    message:
      "Live Picture Studios was one of my favorite vendors to work with. They were truly professional and walked me through every step of the process... Live Picture Studios was one of my favorite vendors to work with. ",
  },
  {
    date: new Date(),

    title: "Aaron W.",
    rating: 4.5,
    img: "/image 9.svg",
    likes: 0,
    imgGallery: [
      "/Rectangle 34624350.svg",
      "/Rectangle 34624351.svg",
      "/Rectangle 34624352.svg",
    ],
    category: "Public",
    message:
      "Live Picture Studios was one of my favorite vendors to work with. They were truly professional and walked me through every step of the process... Live Picture Studios was one of my favorite vendors to work with. ",
  },
];
const Reviews = () => {
  return (
    <div>
      <h3 className="text-[#444444] font-bold text-lg">
        Client Review <span className="font-medium">(3)</span>
      </h3>
      <div className="space-y-4 py-4 divide-y">
        {reviews.map((item, index) => (
          <div key={index} className=" py-2 space-y-2">
            <div className="flex items-center space-x-2">
              <div>
                <Avatar name={item.title} src={'https://i.pravatar.cc/300'} />
              </div>
              <div className="">
                <h3 className="text-custom-gray-500 font-semibold text-lg">
                  {item.title}
                </h3>
                <Rating rating={item.rating} />
              </div>
            </div>
            <div className="text-[#8B8B8B] text-sm font-medium">
              Sent on {moment().format("L")}
            </div>
            <Text message={item.message} />
            <div className="flex space-x-2.5">
              {item.imgGallery.map((image) => (
                <img src={image} alt="" className="mb-3" key={image} />
              ))}
            </div>
            <div className="flex space-x-3.5 items-center">
              <Likes likes={item.likes} />
              <p className="font-medium text-xl text-[#9A9A9A]">.</p>
              <Chip
                endContent={
                  <IoIosArrowDown color="#727373" className="mr-1.5" />
                }
                variant="solid"
                classNames={{
                  base: " bg-[#F0F0F0]",
                  content: "text-[#565656] font-medium text-sm py-1 px-2.5",
                }}
              >
                {item.category}
              </Chip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Text = ({ message }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let fullText = message;
  let previewText = fullText.split(" ").slice(0, 25).join(" ");
  return (
    <p className="font-medium text-[#565656]">
      {!isExpanded ? previewText : fullText}{" "}
      <span
        className="text-brand underline cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read less" : "Read more"}
      </span>
    </p>
  );
};

const Likes = ({ likes }: any) => {
  return (
    <div className="flex space-x-1.5">
      <AiOutlineLike size={18} color={`${likes > 0 ? "#718FDD" : ""}`} />
      <p className="font-medium text-sm">{likes === 0 ? "" : likes} like</p>
    </div>
  );
};
export default Reviews;