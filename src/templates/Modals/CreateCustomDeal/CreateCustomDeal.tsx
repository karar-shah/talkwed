"use client";
import Button from "@/common/Button";
import { useModalAction } from "@/context/modal.context";
import { CalendarDate } from "@internationalized/date";
import {
  Checkbox,
  DateInput,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

const CreateCustomDeal = () => {
  const {closeModal}=useModalAction()
  return (
    <div className="px-2.5 pt-3 pb-4">
      <p className="font-semibold text-[22px] text-[#5A5A5A]">
        Create Custom Deal
      </p>
      <div className="border-t border-[#E4E4E4] my-4"></div>
      <div>
        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              Deal name *
            </label>
            <Input
              name="dealName"
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
          <div>
            <label
              htmlFor="dealType"
              className="text-[#6C6C6C] font-medium mb-1"
            >
              Type of deal *
            </label>
            <Select
              items={dealTypes}
              name="dealType"
              label="Select deal"
              variant="bordered"
              className={"mt-2"}
              classNames={{
                label: "text-base max-md:text-sm",
                innerWrapper: "",
                mainWrapper: "",
                trigger: "border border-[#BFBFBF] rounded-md  px-5 h-fit",
              }}
            >
              {(dealType) => (
                <SelectItem key={dealType.key}>
                  {dealType.label}
                </SelectItem>
              )}
            </Select>
          </div>
          <div>
            <label
              htmlFor="dealType"
              className="text-[#6C6C6C] font-medium mb-1"
            >
              Valid till
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
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-[#6C6C6C] font-medium mb-1"
            >
              Description
            </label>
            <Textarea
              id="description"
              variant="bordered"
              placeholder="Write Description"
              type="text"
              className={"mt-2 text-brand-heading "}
              classNames={{
                inputWrapper:
                  "input-wrapper  border border-[#bfbfbf] px-5 py-2 rounded-md  h-24",
                input: "input text-base max-md:text-sm",
              }}
            />
          </div>
          <div className="flex space-x-3 items-center ">
            <Checkbox
              radius="none"
              color="secondary"
              size="sm"
              classNames={{
                wrapper: "rounded-[3px]",
              }}
            />
            <p className="font-medium text-[#6C6C6C]">Publish Deal</p>
          </div>
        </div>

        <Button
          className="py-3 px-8 mt-14 bg-[#5C148C] text-white text-base font-medium shadow-md rounded-lg"
          href="#"
          title="Save"
          type="button"
          btn={true}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export const dealTypes = [
  { key: "Gift", label: "Gift" },
  { key: "Offer", label: "Offer" },
  { key: "Discount", label: "Discount" },
 
];

export default CreateCustomDeal;
