import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

export default function SidePanel({
  setIsMovePhotoOpen,
}: {
  setIsMovePhotoOpen: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Icon for mobile screens */}
      {isOpen ? null : (
        <button
          className="sm:hidden p-4 fixed top-48
         left-1 z-50"
          onClick={() => setIsOpen(true)}
          aria-label="Open side panel"
        >
          <TbMenu size={32} className="text-gray-800" color="#5C148C" />
        </button>
      )}

      {/* Side Panel */}
      <div
        className={`bg-white w-[300px] z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
          fixed inset-y-0 left-0 sm:static sm:inset-auto sm:transform-none
        `}
      >
        {/* Close button for side panel on mobile screens */}
        <button
          className="absolute top-4 right-4 sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close side panel"
        >
          <IoIosCloseCircleOutline
            size={32}
            color="#5C148C"
            className="text-gray-800 "
          />
        </button>

        {/* Side Panel Content */}
        <div className="max-w-[370px] flex flex-col gap-7 border-2 pt-5 max-md:pt-16">
          <div className="pl-9 pr-7 flex flex-col gap-7">
            {/* Add Table Section */}
            <div className="flex gap-2 justify-between" id="section-one">
              <div className="font-semibold text-xl text-brand-paragraph">
                Add table
              </div>
              <Button
                startContent={<BiPlus size={20} />}
                size="md"
                variant="bordered"
                className="text-brand border-brand border rounded-lg text-lg font-medium"
                onClick={() => setIsMovePhotoOpen(true)}
              >
                Table
              </Button>
            </div>
            {/* Table Images */}
            <div className="flex mb-3 justify-between border-b-1 border-[#E1E1E1] pb-7">
              <img
                src="/seating-chart/chair-6.svg"
                alt="guests"
                className="size-12"
              />
              <img
                src="/seating-chart/chair-3.svg"
                alt="guests"
                className="size-12"
              />
              <img
                src="/seating-chart/chair-round-6.svg"
                alt="guests"
                className="size-12"
              />
              <img
                src="/seating-chart/chair-8.svg"
                alt="guests"
                className="size-12"
              />
            </div>
            {/* Add Guest Section */}
            <div className="flex gap-2 justify-between">
              <div className="font-semibold text-xl text-brand-paragraph">
                Add Guest
              </div>
              <Button
                startContent={<BiPlus size={20} />}
                size="md"
                variant="bordered"
                className="text-brand border-brand border rounded-lg text-lg font-medium"
              >
                Guest
              </Button>
            </div>
          </div>

          {/* Switch */}
          <div className="border-b-1 border-[#E1E1E1]">
            <div className="flex gap-6 pl-9 pr-7">
              <div className="font-semibold text-base text-brand-paragraph border-b-3 border-brand px-1">
                All
              </div>
              <div className="font-semibold text-base text-brand-muted2">
                Pending
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-5 bg-[#F9F9F9] pl-9 pr-2 h-12 border-[#E1E1E1] border-y-1">
            <IoMdSearch size={20} color="#848484" />
            <input
              type="text"
              placeholder="Search Guests..."
              className="bg-transparent outline-none border-none placeholder:text-brand-muted2 text-brand-paragraph"
            />
          </div>

          {/* Names */}
          <div id="section-two">
            {/* Couple */}
            <div>
              <div className="pr-6 pl-9 font-medium text-lg text-brand-muted2 pb-6">
                Couple
              </div>
              <div className="flex justify-between pr-6 pl-9 border-b-1 border-[#E1E1E1]">
                <div className="font-medium text-brand-muted pb-4">
                  Bella N.
                </div>
                <CgProfile size={30} className="opacity-65" />
              </div>
              <div className="flex justify-between pr-6 pl-9 border-b-1 border-[#E1E1E1] pt-4">
                <div className="font-medium text-brand-muted pb-4">
                  Aenna C.
                </div>
                <CgProfile size={30} className="opacity-65" />
              </div>
            </div>
            {/* Bride's Family */}
            <div className="pt-9">
              <div className="pr-6 pl-9 font-medium text-lg text-brand-muted2 pb-6">
                Brides Family
              </div>
              <div className="flex justify-between pr-6 pl-9 border-b-1 border-[#E1E1E1]">
                <div className="font-medium text-brand-muted pb-4">
                  Bella N.
                </div>
                <CgProfile size={30} className="opacity-65" />
              </div>
              <div className="flex justify-between pr-6 pl-9 border-b-1 border-[#E1E1E1] pt-4">
                <div className="font-medium text-brand-muted pb-4">
                  Aenna C.
                </div>
                <CgProfile size={30} className="opacity-65" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
