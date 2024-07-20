"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { Slider } from "@nextui-org/react";
import Button from "../Button";
import { Avatar } from "@nextui-org/react";
import { list, reviews } from ".";
import Rating from "../Rating";
import moment from "moment";

export function RatingList() {
  return (
    <div className="w-[150px]">
      <Slider
        size="sm"
        defaultValue={80}
        disableThumbScale
        // isDisabled
        color="secondary"
        renderThumb={(props) => (
          <div
            {...props}
            className="group p-1 top-1/2    cursor-grab data-[dragging=true]:cursor-grabbing"
          >
            <FaStar className="text-[#FBBC05]" />{" "}
          </div>
        )}
      />
    </div>
  );
}

const Reviews = () => {
  return (
    <div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#505050]">
          <span className="font-bold text-[32px]">4.9</span> Very Good
        </h3>
        <div className="space-x-2 flex items-center text-base font-medium">
          <FaStar className="text-[#FBBC05]" />
          <span>(145 reviews)</span>
        </div>
        <div className="space-x-4 text-[#696969] font-medium flex items-center border-[#6b14a630] border rounded p-2 bg-[#6b14a60a] w-fit px-4">
          <LuThumbsUp />
          <span>96% Recommended by couples</span>
        </div>
        <div className="md:grid grid-cols-2 items-center gap-x-20 gap-y-4 ">
          {list.map((item, index) => (
            <div
              key={index}
              className="sm:flex space-x-3 justify-between text-[#505050] font-semibold text-sm "
            >
              <div>
                {item.title} ({item.rating})
              </div>
              <div>
                <RatingList />
              </div>
            </div>
          ))}
        </div>
        <Button
          title="Write a review"
          btn
          className="bg-transparent text-[#6B14A6] border border-[#6B14A6]"
          arrow
        />
      </div>

      <div className="space-y-4 py-4 divide-y">
        {reviews.map((item, index) => (
          <div key={index} className=" py-2 space-y-2">
            <div className="flex items-center space-x-2">
              <div>
                <Avatar name={item.title} src={item.img || undefined} />
              </div>
              <div className="">
                <h3 className="text-[#444444] font-semibold text-lg">
                  {item.title}
                </h3>
                <Rating rating={item.rating} />
              </div>
            </div>
            <p>{item.message}</p>
            <div className="text-[#8B8B8B] text-sm font-medium">
              Sent on {moment().format("L")}
            </div>
          </div>
        ))}
      </div>
      <Button
        title="See all reviews"
        btn
        className="bg-transparent text-[#6B14A6] border border-[#6B14A6]"
        arrow
      />
    </div>
  );
};

export default Reviews;
