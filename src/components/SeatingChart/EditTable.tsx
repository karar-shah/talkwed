"use client";
import Sheet from "@/common/Sheet";
import { SelectorIcon } from "@/components/SeatingChart/SelectorIcon";
import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

export const seatLits = [
  { key: 1, label: 1 },
  { key: 2, label: 2 },
  { key: 3, label: 3 },
  { key: 4, label: 4 },
  { key: 5, label: 5 },
  { key: 6, label: 6 },
  { key: 7, label: 7 },
  { key: 8, label: 8 },
  { key: 9, label: 9 },
  { key: 10, label: 10 },
  { key: 11, label: 11 },
  { key: 12, label: 12 },
  { key: 13, label: 13 },
];

export default function EditTable({
  setIsMovePhotoOpen,
  isMovePhotoOpen,
}: {
  setIsMovePhotoOpen: any;
  isMovePhotoOpen: any;
}) {
  return (
    <Sheet
      isOpen={isMovePhotoOpen}
      setIsOpen={setIsMovePhotoOpen}
      className="p-8"
      header={
        <h2 className="text-[22px] text-[#5A5A5A] font-semibold mb-10">
          Edit Table
        </h2>
      }
    >
      {/* Inputs */}
      <div className="mt-3 mb-5">
        <div className="mb-3">
          <label
            htmlFor="names"
            className="text-[#6C6C6C] text-base font-normal mb-3 "
          >
            Table name*
          </label>
          <RadioGroup
            name="names"
            orientation="horizontal"
            className="mt-2 "
            role="radiogroup"
            classNames={{
              wrapper: "flex gap-x-12 ",
            }}
          >
            <Radio value="buenos-aires" className="min-w-28">
              Bar
            </Radio>
            <Radio value="sydney" className="min-w-28">
              Cake
            </Radio>
            <Radio value="san-francisco" className="min-w-28">
              DJ
            </Radio>
            <Radio value="london" className="min-w-28">
              Detail
            </Radio>
            <Radio value="tokyo" className="min-w-28">
              Gifts
            </Radio>
            <Radio value="tokyo" className="min-w-28">
              Guestbook
            </Radio>
            <Radio value="tokyo" className="min-w-28">
              Podium
            </Radio>
            <Radio value="tokyo" className="min-w-28">
              Other
            </Radio>
          </RadioGroup>
        </div>

        <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-3 ">
          Table name*
        </label>
        <Input
          name="collectionName"
          placeholder="Enter first name"
          size="md"
          type="text"
          variant="bordered"
          className={"mt-2"}
          classNames={{
            input: "text-base max-md:text-sm ",
            inputWrapper: "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit ",
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="seat" className="text-[#6C6C6C] font-medium  ">
          Seats
        </label>
        <Select
          name="seat"
          placeholder="Select a seat"
          labelPlacement="outside"
          className={"mt-2 "}
          classNames={{
            trigger:
              "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit bg-white  text-[#6C6C6C] font-medium",
            value: "text-[#6C6C6C] ",
          }}
          disableSelectorIconRotation
          selectorIcon={<SelectorIcon />}
        >
          {seatLits.map((seat) => (
            <SelectItem key={seat.key} textValue={`${seat.label}`}>
              {seat.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="mb-16">
        <label htmlFor="name" className="text-[#6C6C6C] font-medium mb--3">
          Notes
        </label>
        <Textarea
          name="name"
          placeholder="Write note"
          variant="bordered"
          className={"mt-2 min-h-24 text-start"}
          classNames={{
            input: "text-base max-md:text-sm min-h-24 ",
            inputWrapper: "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit",
          }}
        />
      </div>

      <div className="flex space-x-5 items-center">
        <Button
          variant="solid"
          className="w-full py-3.5 h-[50px] max-w-[130px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
          onClick={() => setIsMovePhotoOpen(false)}
        >
          Add
        </Button>
      </div>
    </Sheet>
  );
}
