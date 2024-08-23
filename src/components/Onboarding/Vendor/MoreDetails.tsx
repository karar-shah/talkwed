import React from "react";
import { VendorInput, VendorModalProps } from "./Vendor";
import Button from "@/common/Button";
import { useRouter } from "next/navigation";

export default function MoreDetails({
  activeIndex,
  setActiveIndex,
}: VendorModalProps) {
  const router = useRouter();
  return (
    <div className="relative flex flex-col max-md:items-center ">
      {/* top */}
      <div className="bg-brand bg-opacity-5 gap-4 flex py-9 px-20 justify-items-end items-end  border-b border-brand border-opacity-10 w-full max-md:px-10">
        <div className="text-2xl font-semibold text-brand-heading max-md:text-xl">
          More Details{" "}
        </div>
        <div className="text-base text-brand-paragraph pb-[3px]">
          ({activeIndex} of 5)
        </div>
      </div>
      {/* middle */}
      <div className="py-9 px-20 max-md:px-10 flex flex-col gap-7 w-full">
        <div className="text-[22px] font-medium text-brand-muted2 max-md:text-xl">
          Where are you based?
        </div>
        <div className="flex flex-col gap-7 max-w-[560px]">
          <VendorInput
            id="residential-adress"
            styleLabel="text-gray-700"
            text="Residential Address"
            type="text"
            placeholder="Enter your address"
          />
          <div className="flex w-full gap-4">
            <VendorInput
              id="country"
              styleLabel="text-gray-700"
              text="Country"
              type="text"
              placeholder="Enter country"
            />
            <VendorInput
              id="city"
              styleLabel="text-gray-700"
              text="City"
              type="text"
              placeholder="Enter city"
            />
          </div>
          <div className="flex w-full gap-4">
            <VendorInput
              id="zip"
              styleLabel="text-gray-700"
              text="Zip/Postal Code"
              type="text"
              placeholder="Enter zip code"
            />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-brand bg-opacity-5 py-5  px-20 flex justify-end items-end border-t border-brand border-opacity-10 w-full max-md:px-10 max-md:justify-center">
        <Button
          className="bg-opacity-0 text-brand rounded-md py-4 px-10 my-5 text-center text-lg font-bold block"
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
          onClick={() => router.push("/profile-signup")}
        />
      </div>
    </div>
  );
}
