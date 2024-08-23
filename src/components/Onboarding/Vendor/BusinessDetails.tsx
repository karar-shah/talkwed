import React, { Dispatch, SetStateAction } from "react";
import { VendorInput, VendorModalProps } from "./Vendor";
import Button from "@/common/Button";
import { cn, Select, SelectItem } from "@nextui-org/react";

export const businessTypes = [
  { key: "Venue", label: "Venue" },
  { key: "Photographer", label: "Photographer" },
  { key: "Caterer", label: "Caterer" },
  { key: "Wedding Planner", label: "Wedding Planner" },
  { key: "DJ", label: "DJ" },
  { key: "Wedding Cake", label: "Wedding Cake" },
  { key: "Wedding Attire", label: "Wedding Attire" },
  { key: "Wedding Decor", label: "Wedding Decor" },
  { key: "Wedding Flowers", label: "Wedding Flowers" },
  { key: "Wedding Transportation", label: "Wedding Transportation" },
];

export default function BusinessDetails({
  activeIndex,
  setActiveIndex,
}: VendorModalProps) {
  return (
    <div className="relative flex flex-col max-md:items-center ">
      {/* top */}
      <div className="bg-brand bg-opacity-5 gap-4 flex py-9 px-20 justify-items-end items-end  border-b border-brand border-opacity-10 w-full max-md:px-10">
        <div className="text-2xl font-semibold text-brand-heading max-md:text-xl">
          Business Details{" "}
        </div>
        <div className="text-base text-brand-paragraph pb-[3px]">
          ({activeIndex} of 5)
        </div>
      </div>
      {/* middle */}
      <div className="py-9 px-20 max-md:px-10 flex flex-col gap-7 w-full">
        <div className="text-[22px] font-medium text-brand-muted2 max-md:text-xl">
          Tell us about business
        </div>
        <div className="flex flex-col gap-7 max-w-[560px]">
          <VendorInput
            id="business-name"
            styleLabel="text-gray-700"
            text="What is your business name"
            type="text"
            placeholder="Enter the name"
          />

          <div className="flex flex-col">
            <label
              htmlFor={"business-type"}
              className={cn("font-semibold text-gray-700")}
            >
              {"Type of your business"}
            </label>
            <Select
              items={businessTypes}
              placeholder="Select business type"
              className="max-w-xs my-2 "
              variant="bordered"
              classNames={{
                trigger: "trigger px-5 py-3 h-fit",
                value: "value text-lg max-md:text-sm",
              }}
            >
              {(businessType) => (
                <SelectItem key={businessType.key}>
                  {businessType.label}
                </SelectItem>
              )}
            </Select>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-brand bg-opacity-5 py-5  px-20 flex justify-end items-end border-t border-brand border-opacity-10 w-full max-md:px-10 max-md:justify-center">
        <Button
          className="bg-opacity-0 text-brand rounded-md py-4 px-10 my-5 text-center text-lg font-bold block "
          href="#"
          title="Back"
          type="button"
          btn={true}
          onClick={() => setActiveIndex(activeIndex - 1)}
        />
        <Button
          className="bg-brand text-white rounded-md py-4 px-10 my-5 text-center text-lg font-bold block"
          href="#"
          title="Preview"
          type="button"
          btn={true}
          onClick={() => setActiveIndex(activeIndex + 1)}
        />
      </div>
    </div>
  );
}
