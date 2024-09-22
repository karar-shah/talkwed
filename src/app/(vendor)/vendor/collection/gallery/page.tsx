"use client";
import Sheet from "@/common/Sheet";
import { useModalAction } from "@/context/modal.context";
import { CalendarDate } from "@internationalized/date";
import {
  Button,
  Card,
  DateInput,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { HiSortAscending } from "react-icons/hi";
import { IoEllipsisVertical, IoSearch } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";

const Page = () => {
  const { openModal } = useModalAction();
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  return (
    <>
      <RealWeddingSheet isOpen={isOpenSheet} setIsOpen={setIsOpenSheet} />
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0 border-b border-[#E4E4E4] pb-2 pt-7">
          <h1 className="text-[#444444] text-xl font-bold">Collection</h1>
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
              onClick={() => setIsOpenSheet(true)}
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
          <div className="p-4 w-full lg:w-1/4">
            <Card className="relative" radius="sm">
              <img
                src="/Rectangle 34624416.svg"
                alt="wedding-image"
                className="object-cover w-full h-40"
              />
              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button
                    className="min-w-6 h-6 flex justify-center items-center p-0.5 cursor-pointer bg-white/70 absolute top-2 right-2 rounded-sm"
                    startContent={
                      <span className="">
                        <IoEllipsisVertical />
                      </span>
                    }
                  ></Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2 min-w-24 space-y-2.5 divide-y divide-[#D4D4D4]">
                    <div className="text-[#5A5A5A] font-medium">Edit</div>
                    <div
                      className="text-[#5A5A5A] font-medium"
                      onClick={() =>
                        openModal({
                          title: "Get Link",
                          size: "xl",
                          modal: "GET_LINK",
                        })
                      }
                    >
                      Get Link
                    </div>
                    <div className="text-[#5A5A5A] font-medium">Delete</div>
                  </div>
                </PopoverContent>
              </Popover>

              <div className="px-4 py-3.5">
                <div className="text-[#5A5A5A] text-lg font-semibold">
                  Jennie’s Wedding
                </div>
                <p className="text-[#6C6C6C] font-medium mt-2.5">
                  April 5th, 2024 - 42 Photos
                </p>
              </div>
            </Card>
          </div>
          <div className="p-4 w-full lg:w-1/4">
            <Card radius="sm" className="relative">
              <img
                src="/Rectangle 34624329.svg"
                alt="wedding-image"
                className="object-cover w-full h-40"
              />
              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button
                    className="min-w-6 h-6 flex justify-center items-center p-0.5 cursor-pointer bg-white/70 absolute top-2 right-2 rounded-sm"
                    startContent={
                      <span className="">
                        <IoEllipsisVertical />
                      </span>
                    }
                  ></Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2 min-w-24 space-y-2.5 divide-y divide-[#D4D4D4]">
                    <div className="text-[#5A5A5A] font-medium">Edit</div>
                    <div
                      className="text-[#5A5A5A] font-medium"
                      onClick={() =>
                        openModal({
                          title: "Get Link",
                          size: "xl",
                          modal: "GET_LINK",
                        })
                      }
                    >
                      Get Link
                    </div>
                    <div className="text-[#5A5A5A] font-medium">Delete</div>
                  </div>
                </PopoverContent>
              </Popover>
              <div className="px-4 py-3.5">
                <div className="text-[#5A5A5A] text-lg font-semibold">
                  Elsa’s Birthday
                </div>
                <p className="text-[#6C6C6C] font-medium mt-2.5">
                  May 2nd, 2024 - 30 Photos
                </p>
              </div>
            </Card>
          </div>
          <div className="p-4 w-full lg:w-1/4">
            <Card radius="sm" className="relative">
              <img
                src="/Rectangle 34624327.svg"
                alt="wedding-image"
                className="object-cover w-full h-40"
              />
              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button
                    className="min-w-6 h-6 flex justify-center items-center p-0.5 cursor-pointer bg-white/70 absolute top-2 right-2 rounded-sm"
                    startContent={
                      <span className="">
                        <IoEllipsisVertical />
                      </span>
                    }
                  ></Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2 min-w-24 space-y-2.5 divide-y divide-[#D4D4D4]">
                    <div className="text-[#5A5A5A] font-medium">Edit</div>
                    <div
                      className="text-[#5A5A5A] font-medium"
                      onClick={() =>
                        openModal({
                          title: "Get Link",
                          size: "xl",
                          modal: "GET_LINK",
                        })
                      }
                    >
                      Get Link
                    </div>
                    <div className="text-[#5A5A5A] font-medium">Delete</div>
                  </div>
                </PopoverContent>
              </Popover>
              <div className="px-4 py-3.5">
                <div className="text-[#5A5A5A] text-lg font-semibold">
                  Monna’s Bridal Shower
                </div>
                <p className="text-[#6C6C6C] font-medium mt-2.5">
                  February 12th, 2024 - 60 Photos
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

const RealWeddingSheet = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <Sheet
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="p-8"
      header={
        <h2 className="text-[22px] text-[#5A5A5A] font-semibold mb-10">
          Create New Collection
        </h2>
      }
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
            Collection name*
          </label>
          <Input
            name="collectionName"
            placeholder="e.g Wedding Event"
            size="md"
            type="text"
            variant="bordered"
            className={"mt-2"}
            classNames={{
              input: "text-base max-md:text-sm ",
              inputWrapper:
                "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit",
            }}
          />
        </div>
        <div>
          <label htmlFor="dealType" className="text-[#6C6C6C] font-medium mb-1">
            What is the date of this event
          </label>
          <DateInput
            variant="bordered"
            placeholderValue={new CalendarDate(1995, 11, 6)}
            className={"mt-2 text-brand-heading "}
            classNames={{
              inputWrapper:
                "input-wrapper border border-[#BFBFBF] rounded-md px-5 py-4 h-fit",
              input: "input text-md max-md:text-sm",
            }}
            endContent={<FaRegCalendarMinus color="#909090" size="18" />}
          />
        </div>
        <div>
          <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
            Tags (option)
          </label>
          <Input
            name="tags"
            placeholder="Separate your tags with commas “,”"
            size="md"
            type="text"
            variant="bordered"
            className={"mt-2"}
            classNames={{
              input: "text-base max-md:text-sm ",
              inputWrapper:
                "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="text-[#6C6C6C] font-medium mb-1"
          >
            Description (option)
          </label>
          <Textarea
            id="description"
            variant="bordered"
            placeholder="Write description"
            type="text"
            className={"mt-2 text-brand-heading "}
            classNames={{
              inputWrapper:
                "input-wrapper  border border-[#bfbfbf] px-5 py-2 rounded-md  h-24",
              input: "input text-base max-md:text-sm",
            }}
          />
        </div>
      </div>
      <Button
        variant="solid"
        className="w-full py-3.5 mt-8 h-[50px] max-w-[130px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
        onClick={() => setIsOpen(false)}
      >
        Save
      </Button>
    </Sheet>
  );
};

export default Page;
