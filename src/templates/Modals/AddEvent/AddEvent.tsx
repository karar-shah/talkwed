"use client";
import Button from "@/common/Button";
import { Time } from "@internationalized/date";

import { useModalAction } from "@/context/modal.context";
import {
  DateInput,
  Input,
  Select,
  SelectItem,
  TimeInput
} from "@nextui-org/react";
import { CiCalendarDate } from "react-icons/ci";

const AddEvent = () => {
  const { closeModal } = useModalAction();
  return (
    <div className="px-2.5 pt-3 pb-4">
      <p className="font-semibold text-[22px] text-[#5A5A5A]">Add Event</p>
      <div className="border-t border-[#E4E4E4] my-4"></div>
      <div>
        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              Event name *
            </label>
            <Input
              name="dealName"
              placeholder="Enter title to better recognize"
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
          <div className="flex items-center gap-5">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
                First name*
              </label>
              <Input
                name="firstName"
                placeholder="Enter name"
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
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
                Last name*
              </label>
              <Input
                name="lastName"
                placeholder="Enter name"
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
          </div>
          <div>
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              Email *
            </label>
            <Input
              name="email"
              placeholder="Enter email"
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
          <div className="flex items-center gap-5">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
                Event date
              </label>
              <DateInput
                name="eventDate"
                // placeholderValue={new CalendarDate(1995, 11, 6)}
                size="md"
                variant="bordered"
                className={"mt-2"}
                classNames={{
                  input: "text-base max-md:text-sm ",
                  inputWrapper:
                    "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit",
                }}
                endContent={<CiCalendarDate size={20} />}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
                Start time *
              </label>

              <TimeInput
                name="startTime"
                size="md"
                defaultValue={new Time(11, 45)}
                variant="bordered"
                className={"mt-2"}
                classNames={{
                  input: "text-base max-md:text-sm ",
                  inputWrapper:
                    "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit",
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
                City
              </label>
              <Input
                name="city"
                placeholder="Enter city"
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
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
                Type of event
              </label>
              <Select
                items={eventsTypes}
                placeholder="Select type"
                className=""
                size="lg"
                variant="bordered"
                classNames={{
                  trigger:
                    " trigger py-3 px-5 h-fit w-full mt-2 rounded border border-[#DCDCDC]",
                  value: "value text-base max-md:text-sm",
                }}
              >
                {(event) => (
                  <SelectItem key={event.key}>{event.label}</SelectItem>
                )}
              </Select>
            </div>
          </div>

        </div>

        <Button
          className="py-3 px-8 mt-14 bg-[#5C148C] text-white text-base font-medium shadow-md rounded-lg"
          href="#"
          title="Add"
          type="button"
          btn={true}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export const eventsTypes = [
  { key: "marriage", label: "Marriage" },
  { key: "birthday", label: "Birthday" },
];

export default AddEvent;
