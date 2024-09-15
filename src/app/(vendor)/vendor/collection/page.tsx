"use client";

import { Button } from "@nextui-org/react";
import { cn } from "@nextui-org/system";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaPlay, FaRegFolder } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";

const tabs = [
  { id: "Highlights (30)", index: 2, icon: <FaRegFolder size={20} /> },
  { id: "Bridal Shower (12)", index: 3, icon: <FaRegFolder size={20} /> },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <div className="max-w-[1280px] mx-auto px-6 pb-20 pt-10">
      <div className="flex flex-wrap -m-4">
        <div className="w-full p-4 md:w-3/12">
          <div className="relative">
            <img
              src="/Rectangle 34624416.svg"
              alt="wedding cover"
              className="w-full object-cover h-[134px] rounded-md"
            />
            <div className="size-8 rounded-full bg-[#FAF4FE] flex items-center justify-center absolute right-2 -bottom-2 border-2 border-[#9924E91A]/10">
              <MdOutlineCameraAlt color="#5C148C" size={20} />
            </div>
          </div>
          <p className="text-[#444444] font-bold text-lg mb-1 mt-3">
            Jennie’s Wedding
          </p>
          <p className="text-[#6C6C6C] font-medium">
            April 5th, 2024 - 42 Photos
          </p>
          <Button
            variant="light"
            className="my-5 p-0 font-medium text-base border-none underline text-[#6B14A6] hover:!bg-transparent"
          >
            View Gallery
          </Button>
          <div className="h-[1px] w-full bg-[#D1D1D1]"></div>
          <div className="font-semibold text-lg text-[#444444] mb-3 mt-5">
            Sets
          </div>
          <div className="text-[#636363] font-semibold flex flex-col border border-[#DADADA] rounded-[10px] divide-y overflow-hidden">
            <div className={cn("justify-between items-center cursor-pointer")}>
              <div className="flex space-x-4 items-center">
                <div className="w-[6px]" />
                <FiPlusCircle size={20} color="#6B14A6" />
                <div className="py-4 text-brand-link">Add Set</div>
              </div>
            </div>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={cn(
                  "justify-between items-center cursor-pointer",
                  tab.index === activeIndex &&
                    "text-[#444444] bg-[#C98BF31F]/10 font-semibold"
                )}
                onClick={() => setActiveIndex(tab.index)}
              >
                <div className="flex space-x-4 items-center">
                  {tab.index === activeIndex ? (
                    <div className="w-[6px] h-14 bg-[#C98BF3]"></div>
                  ) : (
                    <div className="w-[6px]" />
                  )}
                  {tab.icon}
                  <div className="py-4">{tab.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full p-4 md:w-9/12">
          <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0 border-b border-[#E4E4E4] pb-2">
            <h1 className="text-[#444444] text-2xl font-bold">Highlights</h1>
            <div className="flex gap-2.5">
              <Button
                startContent={<BiPlus size={20} />}
                size="lg"
                variant="bordered"
                className="text-brand border-brand border rounded-lg font-medium"
              >
                Video
              </Button>
              <Button
                startContent={<BiPlus size={20} />}
                size="lg"
                variant="solid"
                className="text-white bg-brand rounded-lg font-medium"
              >
                Photo
              </Button>
            </div>
          </div>
<div className="font-semibold text-lg text-[#444444] mb-5">Videos</div>
          <div className="cursor-pointer relative w-[149px] h-[182px]">
          <img src="/Rectangle 34624477.png" alt="Video preview" className="object-cover"/>
          <div className="bg-black/30 absolute top-0 bottom-0 left-0 right-0"></div>
          <FaPlay className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={30} color="rgba(255, 255, 255, 0.6)"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
