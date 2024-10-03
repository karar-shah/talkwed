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

import Overview from "./_components/Overview";
import RehearsalDinner from "./_components/RehearsalDinner";
import Shower from "./_components/Shower";
import Wedding from "./_components/Wedding";

interface TabComponentProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export interface StoreFrontTabProps {
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

type TabComponent = React.ComponentType<TabComponentProps>;

const tabs: Array<{ id: string; index: number; component: TabComponent }> = [
  { id: "Overview", index: 1, component: Overview },
  { id: "Wedding", index: 2, component: Wedding },
  { id: "Rehearsal Dinner", index: 3, component: RehearsalDinner },
  { id: "Shower", index: 4, component: Shower },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const ActiveComponent = useMemo(() => {
    return tabs.find((tab) => tab.index === activeIndex)?.component || Overview;
  }, [activeIndex]);

  return (
    <>
      <div className="max-w-[1280px] mx-auto px-6 pb-20 md:pt-10">
        <Popover placement="right">
          <PopoverTrigger>
            <Button
              startContent={<CiMenuFries size={24} />}
              variant="light"
              className="md:hidden px-0 min-w-6"
            ></Button>
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
