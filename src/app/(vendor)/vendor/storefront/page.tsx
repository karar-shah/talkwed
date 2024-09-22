"use client";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { cn } from "@nextui-org/system";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Availability from "./_components/Availability";
import BusinessDetails from "./_components/BusinessDetails";
import Deals from "./_components/Deals";
import Faqs from "./_components/Faqs";
import LocationAndMap from "./_components/LocationAndMap";
import Photos from "./_components/Photos";
import RealWedding from "./_components/RealWedding";
import SocialMedia from "./_components/SocialMedia";
import Videos from "./_components/Videos";

interface TabComponentProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export interface StoreFrontTabProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

type TabComponent = React.ComponentType<TabComponentProps>;

const tabs: Array<{ id: string; index: number; component: TabComponent }> = [
  { id: "Business Details", index: 1, component: BusinessDetails },
  { id: "Location & Map", index: 2, component: LocationAndMap },
  { id: "FAQs", index: 3, component: Faqs },
  { id: "Deals", index: 4, component: Deals },
  { id: "Photos", index: 5, component: Photos },
  { id: "Videos", index: 6, component: Videos },
  { id: "Real Wedding", index: 7, component: RealWedding },
  { id: "Availablity", index: 8, component: Availability },
  { id: "SocialMedia", index: 9, component: SocialMedia },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const ActiveComponent = useMemo(() => {
    return (
      tabs.find((tab) => tab.index === activeIndex)?.component ||
      BusinessDetails
    );
  }, [activeIndex]);

  return (
    <>
      <div className="max-w-[1280px] mx-auto px-6 pb-20 md:pt-10">
        <Popover placement="right">
          <PopoverTrigger>
            <Button startContent={<CiMenuFries size={24}/>} variant="light" className="md:hidden px-0 min-w-6" ></Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="text-[#636363] min-w-48 md:hidden font-semibold flex flex-col border border-[#DADADA] rounded-[10px] divide-y overflow-hidden">
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
                    <div className="py-4">{tab.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        {/* <Popover placement="right">
          <PopoverTrigger className="md:hidden my-6">
            <CiMenuFries size={24}/>
          </PopoverTrigger>
          <PopoverContent>
            <div className="text-[#636363] min-w-48 md:hidden font-semibold flex flex-col border border-[#DADADA] rounded-[10px] divide-y overflow-hidden">
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
                    <div className="py-4">{tab.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover> */}
        <div className="flex flex-wrap -m-3">
          <div className="hidden w-full md:block p-3 md:w-3/12">
            <div className="text-[#636363] font-semibold flex flex-col border border-[#DADADA] rounded-[10px] divide-y overflow-hidden">
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
                    <div className="py-4">{tab.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full p-3 md:w-9/12">
            <div className="">
              <ActiveComponent
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
