"use client";
import InputCustom from "@/common/InputCustom/InputCustom";
import { Textarea } from "@nextui-org/input";
import { Button, Checkbox, DatePicker, Progress, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaRegCalendarMinus } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { IoPrintOutline } from "react-icons/io5";
import Sheet from "../../../../common/Sheet";
import { Checklist } from "./CheckListItem";
const status = [
  {
    title: "All",
    count: 34,
  },
  {
    title: "Completed",
    count: 4,
  },
  {
    title: "To Do",
    count: 30,
  },
];
const category = [
  {
    title: "Dress & Attire",
    count: 3,
  },
  {
    title: "Guests",
    count: 4,
  },
  {
    title: "Planning",
    count: 16,
  },
  {
    title: "Vendors",
    count: 20,
  },
  {
    title: "Invitations",
    count: 4,
  },
  {
    title: "Jewelry",
    count: 16,
  },
  {
    title: "Legal",
    count: 20,
  },
];

export const businessTypes = [
  { key: "Venue", label: "Venue" },
  { key: "Photographer", label: "Photographer" },
  { key: "Caterer", label: "Caterer" },
  { key: "Wedding Planner", label: "Wedding Planner" },
  { key: "DJ", label: "DJ" },
  { key: "Wedding Cake", label: "Wedding Cake" },
  { key: "Wedding Attire", label: "Wedding Attire" },
  { key: "Wedding Decor", label: "Wedding Decor" },
  { key: "Wedding Flowers", label: "Wedding Flowers" },
  { key: "Wedding Transportation", label: "Wedding Transportation" },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sheet isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
        <div className="pt-10 space-y-3.5">
          <InputCustom
            label="Task title"
            id="title"
            placeholder="Enter title of your task"
          />
          <Textarea
            variant="bordered"
            label={
              <div className="text-[#6C6C6C] font-semibold text-base">
                Description{" "}
                <span className="text-sm font-normal">(optional)</span>
              </div>
            }
            minRows={3}
            labelPlacement="outside"
            placeholder="Write some description of your task"
            className="max-w-lg mb-6 md:mb-0 text-custom-gray-500 font-medium text-lg h-full"
          />
             <div className="flex flex-col">
            <label
              htmlFor={"category"}
              className='font-semibold text-base text-[#6C6C6C]'
            >
              Category
            </label>
            <Select
              items={businessTypes}
              placeholder="Select category"
              className=""
              variant="bordered"
              classNames={{
                trigger: "trigger px-5 py-3 h-fit",
                value: "value text-lg max-md:text-sm",
              }}
            >
              {(businessType) => (
                <SelectItem key={businessType.key}>
                  {businessType.label}
                </SelectItem>
              )}
            </Select>
          </div>
          <div>
            <label
              htmlFor={"date"}
              className={"font-semibold text-base text-[#6C6C6C]"}
            >
              Date
            </label>
            <DatePicker
              id="date"
              variant="bordered"
              endContent={<FaRegCalendarMinus color="#909090" size="18" />}
            />
          </div>
        </div>
        <Button
          variant="solid"
          // color="#5C148C"
          className="w-full py-3.5 mt-8 h-[50px] max-w-[130px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
          onClick={() => setIsOpen(false)}
        >
          Create
        </Button>
      </Sheet>
      <div className="max-w-[1280px] mx-auto pl-6 pt-12 pb-20">
        <div className="flex flex-wrap w-full -mx-4">
          <div className="w-full md:w-3/12 px-4">
            <div className="border rounded-lg w-full p-5">
              <p className="text-lg font-semibold text-[#6C6C6C]">
                4 tasks out of 34 <span className="font-medium">completed</span>
              </p>
              <Progress
                aria-label="Loading..."
                color="secondary"
                value={10}
                className="mt-4"
                size="md"
              />
              <div className="text-[#595959] font-semibold mt-9 mb-4">
                By status
              </div>
              <div className="space-y-3">
                {status.map((item, i) => (
                  <div className="text-[#808080]" key={i}>
                    <div className="font-semibold text-lg">
                      <Checkbox radius="sm" color="secondary" size="md" />
                      {item.title}{" "}
                      <span className="font-medium">({item.count})</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[#595959] font-semibold mt-12 mb-4">
                By category
              </div>
              <div className="space-y-3">
                {category.map((item, i) => (
                  <div className="text-[#808080]" key={i}>
                    <div className="font-semibold text-lg">
                      <Checkbox radius="sm" color="secondary" size="md" />
                      {item.title}{" "}
                      <span className="font-medium">({item.count})</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[#595959] font-semibold mt-12 mb-4">
                By Date
              </div>
              <div className="flex">
                <Checkbox radius="sm" color="secondary" size="md" />
                <DatePicker
                  variant="bordered"
                  endContent={<FaRegCalendarMinus color="#909090" size="18" />}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12 px-4">
            <div className="flex justify-between mb-8">
              <h1 className="text-[#444444] text-2xl font-bold">
                My checklist
              </h1>
              <div className="flex gap-2.5">
                <div className="flex items-center justify-center size-12 bg-[#6B14A60D]/5 cursor-pointer rounded-md">
                  <HiDownload color="#6B14A6" size={18} />
                </div>
                <div className="flex items-center justify-center size-12 bg-[#6B14A60D]/5 cursor-pointer rounded-md">
                  <IoPrintOutline color="#6B14A6" size={18} />
                </div>
                <Button
                  startContent={<BiPlus size={20} />}
                  size="lg"
                  variant="bordered"
                  className="text-brand border-brand border rounded-lg text-lg font-medium"
                  onClick={() => setIsOpen(true)}
                >
                  Add task
                </Button>
              </div>
            </div>
            <div className="border rounded-lg divide-y">
              {Array.from({ length: 9 }).map((_, i) => (
                <Checklist key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
