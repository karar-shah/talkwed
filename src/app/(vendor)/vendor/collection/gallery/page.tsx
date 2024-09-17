import { Button } from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { HiSortAscending } from "react-icons/hi";
import { IoEllipsisVertical, IoSearch } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";

const page = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0 border-b border-[#E4E4E4] pb-2 pt-7">
        <h1 className="text-[#444444] text-2xl font-bold">Collection</h1>
        <div className="flex gap-2.5">
          <Button
            startContent={<IoSearch size={24} color="#6B14A6" />}
            variant="bordered"
            radius="sm"
            size="lg"
            className="px-0 min-w-12 items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
          ></Button>
          <Button
            startContent={<BiPlus size={20} />}
            size="lg"
            variant="solid"
            className="text-white bg-brand rounded-lg font-medium"
          >
            Collection
          </Button>
        </div>
      </div>
      <div className="flex items-center mt-4 mb-7 space-x-2.5">
        <Button
          startContent={<LuFilter size={20} color="#6B14A6" />}
          variant="bordered"
          radius="sm"
          className="items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
        >
          Filter
        </Button>
        <Button
          startContent={<HiSortAscending size={20} color="#6B14A6" />}
          variant="bordered"
          radius="sm"
          className="items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
        >
          Sort
        </Button>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 w-1/4">
          <div className="relative">
            <img
              src="/Rectangle 34624327.svg"
              alt="wedding-image"
              className="object-cover w-full h-40"
            />
            <span className="flex justify-center items-center p-0.5 cursor-pointer bg-white/70 absolute top-2 right-2 rounded-sm">
              <IoEllipsisVertical />
            </span>
          </div>
        </div>
        <div className="p-4 w-1/4">
          <div className="relative">
            <img
              src="/Rectangle 34624327.svg"
              alt="wedding-image"
              className="object-cover w-full h-40"
            />
            <span className="flex justify-center items-center p-0.5 cursor-pointer bg-white/70 absolute top-2 right-2 rounded-sm">
              <IoEllipsisVertical />
            </span>
          </div>
        </div>
        <div className="p-4 w-1/4">
          <div className="relative">
            <img
              src="/Rectangle 34624327.svg"
              alt="wedding-image"
              className="object-cover w-full h-40"
            />
            <span className="flex justify-center items-center p-0.5 cursor-pointer bg-white/70 absolute top-2 right-2 rounded-sm">
              <IoEllipsisVertical />
            </span>
          </div>
        </div>
        <div className="p-4 w-1/4">
          <div className="relative">
            <img
              src="/Rectangle 34624327.svg"
              alt="wedding-image"
              className="object-cover w-full h-40"
            />
            <span className="flex justify-center items-center p-0.5 cursor-pointer bg-white/70 absolute top-2 right-2 rounded-sm">
              <IoEllipsisVertical />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
