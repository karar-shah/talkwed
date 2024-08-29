"use client";
import Sheet from "@/common/Sheet";
import { parseDate } from "@internationalized/date";
import { Button, DatePicker, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaAngleDown, FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

const Page = () => {
  const [isOpen, setIsOpen] = useState(true);
  const date = parseDate("2021-04-07");
  console.log(date);
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <Button
        startContent={<BiPlus size={20} />}
        size="lg"
        variant="bordered"
        className="text-brand border-brand border rounded-lg text-lg font-medium mt-4"
        onClick={() => setIsOpen(true)}
      >
        Add Guest
      </Button>
      <Sheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // className="py-5"
        header={
          <div className="border-b w-full px-8 py-6">
            <div className="flex gap-6 items-center">
              <Button
                size="lg"
                variant="bordered"
                className="text-brand border-brand border rounded-lg text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Mark as complete
              </Button>
              <DatePicker
                id="date"
                variant="underlined"
                size="md"
                value={date}
                className="bg-transparent max-w-20 mr-6 text-[#909090] [&>*]:border-b-0 [&>*]:shadow-none"
                endContent={<FaAngleDown color="#909090" size="18" />}
              />
              <div className="flex items-center gap-2 text-[#8F8F8F] font-medium">
              <div>Budget</div> 
              <FaAngleDown color="#909090" size="18" />
              </div>
            <GoTrash color="#8F8F8F" size={22} className="ml-auto mr-8 mb-1"/>
            </div>
          </div>
        }
      >
        <div className="pt-6 px-8">
          <p className="text-[22px] font-semibold text-[#5A5A5A] pb-2">
            Start creating your guest list
          </p>
          <p className="text-[#8F8F8F] font-medium">
            A wedding planner plays a crucial role in ensuring a seamless
            planning process and a smooth execution of your big day.
          </p>
          <div className="flex gap-[18px] mt-14">
            <FaRegEdit color="#BCBCBC" size={24} />
            <Textarea
              variant="bordered"
              minRows={3}
              labelPlacement="outside"
              placeholder="Write some description of your task"
              className="mb-6 md:mb-0 text-custom-gray-500 font-medium text-lg h-full"
            />
          </div>
        </div>
        <Button
          variant="solid"
          // color="#5C148C"
          className="w-full mt-48 ml-8 py-3.5 h-[50px] max-w-[200px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
          onClick={() => setIsOpen(false)}
        >
          Create Guest List
        </Button>
      </Sheet>
    </div>
  );
};

export default Page;