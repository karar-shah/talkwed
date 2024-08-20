"use client";
import React, { ChangeEvent, useState } from "react";
import { VendorInput, VendorModalProps } from "./Vendor";
import Button from "@/common/Button";
import { CgProfile } from "react-icons/cg";

export default function ProfileOverview({
  activeIndex,
  setActiveIndex,
}: VendorModalProps) {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string); // Type assertion for the result as a string
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col  w-full">
      {/* top */}
      <div className="bg-brand bg-opacity-5 gap-4 flex py-9 px-20 justify-items-end items-end border-b border-brand border-opacity-10">
        <div className="text-2xl font-semibold text-brand-heading">
          Profile Overview{" "}
        </div>
        <div className="text-base text-brand-paragraph pb-[3px]">
          ({activeIndex} of 5)
        </div>
      </div>
      {/* middle */}
      <div className="py-9 px-20 flex flex-col gap-7">
        <div className="text-[22px] font-medium text-brand-muted2">
          Create a compelling profile overview to attract clients.
        </div>
        <div className="flex flex-col gap-7 max-w-[560px]">
          <div className="text-gray-700 font-semibold">
            Please upload a professional picture that clearly shows your face.
          </div>
          <div className="flex w-full items-center gap-7">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full"
                style={{ width: "105px", height: "105px", objectFit: "cover" }}
              />
            ) : (
              <CgProfile size={105} color="#929495" />
            )}
            <label
              htmlFor="file-upload"
              className="cursor-pointer font-medium text-lg text-brand py-3 px-8 rounded-lg"
              style={{
                boxShadow: "0px 1px 7.3px 1px #0000001A",
              }}
            >
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only "
                onChange={handleImageUpload}
              />
              {"+ Upload Picture"}
            </label>
          </div>
          <label
            htmlFor="professional-overview"
            className="mb-2 font-semibold text-lg text-gray-700"
          >
            Professional Overview
          </label>
          <textarea
            id="professional-overview"
            name="professional-overview"
            placeholder="Highlight your top skills, experience, and work. This is one of the first things clients will see on your profile."
            className="p-3 border-1 border-[#A8A8A8] rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-muted2 focus:border-brand-muted2 resize-none text-lg font-medium"
            rows={5}
          />
        </div>
      </div>
      {/* bottom */}
      <div className="bg-brand bg-opacity-5 py-5  px-20 flex justify-between border-t border-brand border-opacity-10">
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
