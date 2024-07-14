import Button from "@/common/Button";
import React from "react";

const Deals = () => {
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
            className="border-none p-0 font-semibold text-sm underline"
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
