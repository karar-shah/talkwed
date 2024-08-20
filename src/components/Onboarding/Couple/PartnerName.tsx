import { Progress } from "@nextui-org/react";
import React from "react";
import { VendorInput, VendorModalProps } from "../Vendor/Vendor";
import Button from "@/common/Button";

export default function PartnerName({
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
      <div className="text-[28px] font-bold text-brand-muted2 ">
        {"What is your and your partner's name"}
      </div>
      <div className="flex flex-col gap-5">
        <VendorInput
          id="your-name"
          styleLabel="text-brand-muted2 text-base font-semibold"
          stylePlaceholder="text-base font-normal"
          text="Your Name"
          type="text"
          placeholder="Enter Name"
        />
        <VendorInput
          id="partner-name"
          styleLabel="text-brand-muted2 text-base font-semibold"
          stylePlaceholder="text-base font-normal"
          text="Partner Name"
          type="text"
          placeholder="Enter Name"
        />
      </div>
      <Button
        className="bg-brand text-white rounded-md py-4 px-10 my-5 text-center text-lg font-bold block"
        href="#"
        title="Preview"
        type="button"
        btn={true}
        onClick={() => setActiveIndex(activeIndex + 1)}
      />
    </div>
  );
}
