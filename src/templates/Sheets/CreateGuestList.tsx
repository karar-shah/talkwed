"use client";
import Sheet from "@/common/Sheet";
import { parseDate } from "@internationalized/date";
import { Button, DatePicker, Textarea } from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { FaAngleDown, FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";


const CreateGuestList = ({isOpen, setIsOpen}:{isOpen: boolean, setIsOpen: any}) => {
  const date = parseDate("2021-04-07");
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
        header={
          <div className="border-b w-full px-8 py-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
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
              <GoTrash
                color="#8F8F8F"
                size={22}
                className="ml-auto mr-4 md:mr-8 mb-1"
              />
            </div>
          </div>
        }
      >
        <div className="flex flex-col h-[calc(100vh-100px)]">
          <div className="flex-grow overflow-y-auto pt-6 px-8">
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
                minRows={4}
                labelPlacement="outside"
                placeholder="Write some description of your task"
                className="mb-6 md:mb-0 text-custom-gray-500 font-medium text-lg h-full"
              />
            </div>
          </div>
          <div className="px-8 py-10">
            <Button
              variant="solid"
              className="w-full py-3.5 h-[50px] max-w-[200px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
              onClick={() => setIsOpen(false)}
            >
              Create Guest List
            </Button>
          </div>
        </div>
      </Sheet>
    </div>
    
  )
}

export default CreateGuestList