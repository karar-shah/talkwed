"use client";
import Button from "@/common/Button";
import { useModalAction } from "@/context/modal.context";
import React from "react";

const Deals = () => {
  const { openModal } = useModalAction();
  function handlePopupView() {
    openModal({
      modal: "GET_DEAL",
      title: "GET DEAL",
      subTitle: "Dreamlife Photos & Video",
      size: "xl",
    });
  }
  return (
    <div>
      <div className="border-[#9924e91c] bg-[#9924e91f] border rounded  w-[286px] p-3 pb-0">
        <h3 className="text-[#494949] font-semibold text-base max-w-[200px] mb-2">
          10% discount for TalkWed couples
        </h3>
        <div className="flex items-center justify-between">
          <Button
            title="Get Deal"
            arrow
            btn
            onClick={handlePopupView}
            className="border-none p-0 font-semibold text-sm underline bg-transparent text-brand"
          />
          <img
            src="/offer.svg"
            alt="deal offer"
            className="w-full h-full max-w-[150px] max-h-[85px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Deals;
