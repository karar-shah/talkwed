"use client";
import { cn } from "@nextui-org/react";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import ContactInfo from "./ContactInfo";
import BusinessDetails from "./BusinessDetails";
import ServiceOffering from "./ServiceOffering";
import Input from "@/common/Input";
import ProfileOverview from "./ProfileOverview";
import MoreDetails from "./MoreDetails";

const tabs = [
  { id: "Contact Info.", index: 1, component: ContactInfo },
  { id: "Business Details", index: 2, component: BusinessDetails },
  { id: "Service Offerings", index: 3, component: ServiceOffering },
  { id: "Profile Overview", index: 4, component: ProfileOverview },
  { id: "More Details", index: 5, component: MoreDetails },
];

export default function Vendor() {
  const [activeIndex, setActiveIndex] = useState(1);

  const ActiveComponent = useMemo(() => {
    return (
      tabs.find((tab) => tab.index === activeIndex)?.component || ContactInfo
    );
  }, [activeIndex]);

  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="flex mt-12 gap-12 flex-col md:flex-row">
        {/* Progress bar */}
        <div className="w-full md:w-3/12 text-start text-brand-muted2 font-semibold text-lg flex flex-col">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                "flex min-w-[230px] justify-between items-center pr-4",
                tab.index === activeIndex &&
                  "text-brand-heading shadow-[0px_2px_7px_0px_rgba(0,0,0,0.1)]"
              )}
            >
              <div className="flex gap-4  items-center my-4 h-full ">
                {tab.index === activeIndex && (
                  <div className="w-[6px] h-full bg-brand " />
                )}
                {tab.id}
              </div>
              <HiOutlineCheckBadge
                size={24}
                color={cn(tab.index < activeIndex ? "#5C148C" : "#696969")}
              />
            </div>
          ))}
        </div>
        <div className="rounded-2xl shadow-custom overflow-hidden mb-24 w-full ">
          <ActiveComponent
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </div>
  );
}

interface VendorInputProps {
  id: string;
  styleLabel?: string;
  styleInput?: string;
  stylePlaceholder?: string;
  text: string | React.ReactNode;
  type: string;
  placeholder: string;
}

export interface VendorModalProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const VendorInput = ({
  id,
  styleLabel,
  styleInput,
  stylePlaceholder,
  text,
  type,
  placeholder,
}: VendorInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={cn("font-semibold ", styleLabel)}>
        {text}
      </label>
      <Input
        id={id}
        placeholder={placeholder}
        size="md"
        variant="bordered"
        type={type}
        label=""
        className={cn("my-2 text-brand-heading ")}
        classNames={{
          inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
          input: cn("input text-lg", stylePlaceholder),
        }}
      />
    </div>
  );
};
