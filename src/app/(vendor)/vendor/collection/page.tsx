"use client";

import { Button } from "@nextui-org/react";
import { cn } from "@nextui-org/system";
import Link from "next/link";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { FaRegFolder } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";
import BridalShower from "./_components/BridalShower";
import Highlights from "./_components/Highlights";

export interface TabComponentProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
// Define the structure for each tab
interface Tab {
  id: string;
  index: number;
  icon: React.ReactNode;
  component: React.ComponentType<TabComponentProps>;
}

// Define the tabs array with the correct typing
const tabs: Tab[] = [
  {
    id: "Highlights (30)",
    index: 2,
    icon: <FaRegFolder size={20} />,
    component: Highlights,
  },
  {
    id: "Bridal Shower (12)",
    index: 3,
    icon: <FaRegFolder size={20} />,
    component: BridalShower,
  },
];
const Page = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const ActiveComponent = useMemo(() => {
    return (
      tabs.find((tab) => tab.index === activeIndex)?.component || Highlights
    );
  }, [activeIndex]);

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
          <Link href="/vendor/collection/gallery">
          <Button
            variant="light"
            className="my-5 p-0 font-medium text-base border-none underline text-[#6B14A6] hover:!bg-transparent"
          >
            View Gallery
          </Button>
          </Link>
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
        <div className="w-full p-4 md:w-9/12 flex flex-col flex-1">
          <ActiveComponent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
