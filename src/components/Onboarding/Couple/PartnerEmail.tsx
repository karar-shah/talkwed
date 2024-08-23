import React from "react";
import { VendorInput, VendorModalProps } from "../Vendor/Vendor";
import { Progress } from "@nextui-org/react";
import Button from "@/common/Button";

export default function PartnerEmail({
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
        {"Link your account with your partner"}
      </div>
      <div className="text-2xl font-medium text-brand-muted2 ">
        {"Link your account with your partner"}
      </div>
      <div className="flex flex-col gap-5">
        <VendorInput
          id="partner-email"
          styleLabel="text-brand-muted2 text-base font-semibold"
          stylePlaceholder="text-base font-normal"
          text="Your partner's email"
          type="email"
          placeholder="Enter email"
        />
      </div>
      <div className="flex gap-5">
        <Button
          className="bg-brand text-white rounded-md py-4 px-10 my-5 text-center text-lg font-bold block"
          href="#"
          title="Preview"
          type="button"
          btn={true}
          onClick={() => setActiveIndex(activeIndex)}
        />
        {activeIndex > 1 && (
          <button
            className="text-brand text-base font-bold"
            onClick={() => {
              setActiveIndex(activeIndex - 1);
            }}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
