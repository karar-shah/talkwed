import { Button } from "@nextui-org/react";
import React from "react";
import { BiPlus } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";

export default function SidePanel({
  setIsMovePhotoOpen,
}: {
  setIsMovePhotoOpen: any;
}) {
  return (
    <div className="max-w-[370px] flex flex-col gap-7 border-2 pt-5">
      <div className="pl-9 pr-7 flex flex-col gap-7">
        <div className="flex gap-2 justify-between ">
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
        <div className="flex mb-3 justify-between border-b-1 border-[#E1E1E1] pb-7">
          <img
            src="/seating-chart/chair-6.svg"
            alt="guests"
            className="size-12 "
          />
          <img
            src="/seating-chart/chair-3.svg"
            alt="guests"
            className="size-12 "
          />
          <img
            src="/seating-chart/chair-round-6.svg"
            alt="guests"
            className="size-12 "
          />
          <img
            src="/seating-chart/chair-8.svg"
            alt="guests"
            className="size-12 "
          />
        </div>
        <div className="flex gap-2 justify-between ">
          <div className="font-semibold text-xl text-brand-paragraph">
            Add Guest
          </div>
          <Button
            startContent={<BiPlus size={20} />}
            size="md"
            variant="bordered"
            className="text-brand border-brand border rounded-lg text-lg font-medium"
            //   onClick={() => setIsOpen(true)}
          >
            Guest
          </Button>
        </div>
      </div>
      {/* Switch */}
      <div className=" border-b-1 border-[#E1E1E1] ">
        <div className="flex gap-6 pl-9 pr-7">
          <div className="font-semibold text-base text-brand-paragraph border-b-3 border-brand px-1">
            All
          </div>
          <div className="font-semibold text-base text-brand-muted2 ">
            Pending
          </div>
        </div>
      </div>
      {/* Search bar */}
      <div className="flex items-center gap-5 bg-[#F9F9F9] pl-9 pr-2 h-12 border-[#E1E1E1] border-y-1">
        <IoMdSearch size={20} color="#848484" />
        <input
          type="text"
          placeholder="Search Guests..."
          className="bg-transparent outline-none border-none placeholder:text-brand-muted2 text-brand-paragraph"
        />
      </div>
      {/* Names */}
      <div className="">
        {/* Couple */}
        <div className="">
          <div className=" pr-6 pl-9 font-medium text-lg text-brand-muted2 pb-6">
            Couple
          </div>
          <div className="flex justify-between pr-6 pl-9 border-b-1 border-[#E1E1E1]">
            <div className="font-medium text-brand-muted pb-4">Bella N.</div>
            <CgProfile size={30} className="opacity-65" />
          </div>
          <div className="flex justify-between pr-6 pl-9 border-b-1 border-[#E1E1E1] pt-4">
            <div className="font-medium text-brand-muted pb-4">Aenna C.</div>
            <CgProfile size={30} className="opacity-65" />
          </div>
        </div>
        {/* Bridges Family */}
        <div className=" pt-9">
          <div className=" pr-6 pl-9 font-medium text-lg text-brand-muted2 pb-6">
            Brides Family
          </div>
          <div className="flex justify-between pr-6 pl-9 border-b-1 border-[#E1E1E1]">
            <div className="font-medium text-brand-muted pb-4">Bella N.</div>
            <CgProfile size={30} className="opacity-65" />
          </div>
          <div className="flex justify-between pr-6 pl-9 border-b-1 border-[#E1E1E1] pt-4">
            <div className="font-medium text-brand-muted pb-4">Aenna C.</div>
            <CgProfile size={30} className="opacity-65" />
          </div>
        </div>
      </div>
    </div>
  );
}
