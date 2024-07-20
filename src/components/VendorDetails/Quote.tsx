"use client";
import Button from "@/common/Button";
import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoLocationOutline, IoStarSharp } from "react-icons/io5";
import { BsTag } from "react-icons/bs";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Button as UIButton } from "@nextui-org/react";
import { LuCalendarCheck } from "react-icons/lu";
import { PiChatCircleDotsLight } from "react-icons/pi";
import { useModalAction } from "@/context/modal.context";

const Quote = () => {
  const { openModal } = useModalAction();
  function handlePopupView() {
    openModal({
      modal: "MESSAGE_VENDOR",
      title: "Message vendor",
      subTitle: "Dreamlife Photos & Video",
      size: "xl",
    });
  }
  return (
    <div className="shadow rounded border p-6 w-full space-y-6">
      <Button
        title=" Request a Quote"
        className="block bg-brand text-white w-full text-center font-medium text-lg"
      />
      <div className="flex items-center justify-between">
        <h3 className="text-[#353535] text-xl font-semibold">
          Dreamlife Photos & Video
        </h3>
        <MdOutlineFavoriteBorder color="#8A8A8A" />
      </div>
      <ul className="text-[#696969] space-y-2 text-base font-semibold pb-24">
        <li className="flex items-center space-x-2">
          <IoStarSharp color="#FBBC05" />
          <span>4.9 (145 reviews)</span>
        </li>
        <li className="flex items-center space-x-2">
          <IoLocationOutline />
          <span>New York, NY</span>
        </li>
        <li className="flex items-center space-x-2">
          <BsTag />
          <span>$ 1,990 - $2,250</span>
        </li>
        <li className="flex items-center space-x-2">
          <RiDiscountPercentLine />
          <span>10% discount</span>
        </li>
      </ul>
      <div>
        <UIButton
          className="text-brand border-brand border rounded bg-transparent w-full text-base font-semibold"
          startContent={<LuCalendarCheck />}
        >
          Check Availability
        </UIButton>
        <p className="text-[#696969] font-medium text-base text-center mt-1 flex items-center justify-center">
          <PiChatCircleDotsLight className="me-2" />
          <span>Responds within 24 hours</span>
        </p>
      </div>
    </div>
  );
};

export default Quote;
