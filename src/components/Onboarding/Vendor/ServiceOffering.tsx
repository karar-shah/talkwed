import React, { Dispatch, SetStateAction } from "react";
import { VendorInput, VendorModalProps } from "./Vendor";
import Button from "@/common/Button";
import Input from "@/common/Input";

export default function ServiceOffering({
  activeIndex,
  setActiveIndex,
}: VendorModalProps) {
  return (
    <div className="relative flex flex-col max-md:items-center ">
      {/* top */}
      <div className="bg-brand bg-opacity-5 gap-4 flex py-9 px-20 justify-items-end items-end  border-b border-brand border-opacity-10 w-full max-md:px-10">
        <div className="text-2xl font-semibold text-brand-heading max-md:text-xl">
          Service Offerings{" "}
        </div>
        <div className="text-base text-brand-paragraph pb-[3px]">
          ({activeIndex} of 5)
        </div>
      </div>
      {/* middle */}
      <div className="py-9 px-20 max-md:px-10 flex flex-col gap-7 w-full">
        <div className="text-[22px] font-medium text-brand-muted2 max-md:text-xl">
          Describe your specialized offerings for our community.
        </div>
        <div className="flex flex-col gap-7 max-w-[560px]">
          <div className="flex w-full gap-4 align-bottom items-end">
            <VendorInput
              id="first-name"
              styleLabel="text-gray-700"
              styleInput="p-2 border border-gray-300 rounded-md w-4/5 placeholder:p-5"
              text={
                <div>
                  <div>How much you charge</div>{" "}
                  <div className="text-sm font-normal text-brand-paragraph pb-[3px]">
                    (Enter the range)
                  </div>
                </div>
              }
              type="number"
              placeholder="from $/hr"
            />
            <VendorInput
              id="last-name"
              styleLabel="text-gray-700"
              text=" "
              type="number"
              placeholder="to $/hr"
            />
          </div>
          {/* Image upload DIV */}
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-gray-700 font-semibold"
            >
              Prevous Work
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="flex flex-col  items-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="text-base relative cursor-pointer rounded-md bg-white font-semibold text-[#015B7E] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#015B7E] focus-within:ring-offset-2 hover:text-[#2b7d9d]"
                  >
                    <span>Upload</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 text-base">your work samples</p>
                </div>
                <p className="text-xs leading-5 text-gray-600 pt-2-">
                  File must be under 25 MB each, Include work samples to support
                  your profile.
                </p>
              </div>
            </div>
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
          onClick={() => setActiveIndex(activeIndex + 1)}
        />
      </div>
    </div>
  );
}
