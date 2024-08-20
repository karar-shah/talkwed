import React, { Dispatch, SetStateAction } from "react";
import { VendorInput, VendorModalProps } from "./Vendor";
import Button from "@/common/Button";

export default function ContactInfo({
  activeIndex,
  setActiveIndex,
}: VendorModalProps) {
  return (
    <div className="relative flex flex-col  ">
      {/* <div className="bg-black rounded-lg">hi hi hi</div> */}
      {/* top */}
      <div className="bg-brand bg-opacity-5 gap-4 flex py-9 px-20 justify-items-end items-end  border-b border-brand border-opacity-10">
        <div className="text-2xl font-semibold text-brand-heading">
          Contact Info.{" "}
        </div>
        <div className="text-base text-brand-paragraph pb-[3px]">
          ({activeIndex} of 5)
        </div>
      </div>
      {/* middle */}
      <div className="py-9 px-20 flex flex-col gap-7">
        <div className="text-[22px] font-medium text-brand-muted2">
          Tell us about yourself
        </div>
        <div className="flex flex-col gap-7 max-w-[560px]">
          <div className="flex w-full gap-4">
            <VendorInput
              id="first-name"
              styleLabel="text-gray-700"
              text="First Name"
              type="text"
              placeholder="Enter Name"
            />
            <VendorInput
              id="last-name"
              styleLabel="text-gray-700"
              text="Last Name"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <VendorInput
            id="contact-number"
            styleLabel="text-gray-700"
            text="Contact Number"
            type="number"
            placeholder="Enter your number"
          />
        </div>
      </div>
      {/* bottom */}
      <div className="bg-brand bg-opacity-5 py-5  px-20 flex justify-end items-end border-t border-brand border-opacity-10">
        <div className="w-fit">
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
    </div>
  );
}
