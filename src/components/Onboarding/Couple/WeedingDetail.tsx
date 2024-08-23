import React from "react";
import { VendorInput, VendorModalProps } from "../Vendor/Vendor";
import {
  cn,
  DatePicker,
  Progress,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Button from "@/common/Button";

export const countryList = [
  { key: "Australia", label: "Australia" },
  { key: "France", label: "France" },
  { key: "Germany", label: "Germany" },
  { key: "United States", label: "United States" },
  { key: "Canada", label: "Canada" },
  { key: "United Kingdom", label: "United Kingdom" },
  { key: "China", label: "China" },
  { key: "South Africa", label: "South Africa" },
  { key: "Ghana", label: "Ghana" },
  { key: "Nigeria", label: "Nigeria" },
];

export default function WeedingDetail({
  activeIndex,
  setActiveIndex,
}: VendorModalProps) {
  return (
    <div className="flex  flex-col gap-10 w-full max-w-lg">
      <Progress
        aria-label="Loading..."
        value={activeIndex * 25}
        className="max-w-[500px]"
        color="secondary"
      />
      <div className="text-[28px]  max-md:text-xl font-bold text-brand-muted2 ">
        {"What is your and your partner's name"}
      </div>
      <div className="flex flex-col gap-5">
        <DatePicker
          label="Birth date"
          className=""
          classNames={{
            inputWrapper: "input-wrapper px-5 py-3 h-fit bg-white",
            input: "input text-lg",
            base: "base bg-white",
          }}
        />
        <label
          htmlFor="marrage-coutnry"
          className={cn("font-semibold text-brand-muted2 ")}
        >
          {"Getting married in"}
        </label>
        <Select
          items={countryList}
          id="marrage-coutnry"
          placeholder="Enter the Country"
          className="my-2"
          variant="bordered"
          classNames={{
            trigger: "trigger px-5 py-3 h-fit",
            value: "value text-lg max-md:text-sm",
          }}
        >
          {(businessType) => (
            <SelectItem key={businessType.key}>{businessType.label}</SelectItem>
          )}
        </Select>
      </div>
      <div className="flex gap-5">
        <Button
          className="bg-brand text-white rounded-md py-4 px-10 my-5 text-center text-lg font-bold block"
          href="#"
          title="Preview"
          type="button"
          btn={true}
          onClick={() => setActiveIndex(activeIndex + 1)}
        />
        {activeIndex > 1 && (
          <button
            className="text-brand text-base font-bold"
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
