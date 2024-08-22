"use client";
import { Progress } from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { VendorInput } from "../Vendor/Vendor";
import Button from "@/common/Button";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { TbPhone } from "react-icons/tb";
import BrowserDummy from "./BrowserDummy";
import PartnerName from "./PartnerName";
import WeedingDetail from "./WeedingDetail";
import Contact from "./Contact";
import PartnerEmail from "./PartnerEmail";

const tabs = [
  { index: 1, component: PartnerName },
  { index: 2, component: WeedingDetail },
  { index: 3, component: Contact },
  { index: 4, component: PartnerEmail },
  { index: 5, component: "MoreDetails" },
];
export type IBrowserDummyTabs = {
  index: number;
  textArray: {
    text: string;
    icon: any;
  }[];
};
const browserDummyTabs = [
  { index: 1, textArray: [] },
  {
    index: 2,
    textArray: [
      { text: "Wedding Date", icon: FaRegCalendarMinus },
      { text: "Getting Married In", icon: CiGlobe },
    ],
  },
  {
    index: 3,
    textArray: [
      { text: "Wedding Date", icon: FaRegCalendarMinus },
      { text: "Getting Married In", icon: CiGlobe },
      { text: "Contact Number", icon: TbPhone },
    ],
  },
  {
    index: 4,
    textArray: [
      { text: "Wedding Date", icon: FaRegCalendarMinus },
      { text: "Getting Married In", icon: CiGlobe },
    ],
  },
];

export default function Couple() {
  const [activeIndex, setActiveIndex] = useState(1);

  const ActiveComponent = useMemo(() => {
    return (
      tabs.find((tab) => tab.index === activeIndex)?.component || PartnerName
    );
  }, [activeIndex]);
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-between mt-28 px-20 mb-36 max-w-screen-2xl w-full ">
        <ActiveComponent
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <BrowserDummy browserTabs={browserDummyTabs[activeIndex - 1]} />
      </div>
    </div>
  );
}
