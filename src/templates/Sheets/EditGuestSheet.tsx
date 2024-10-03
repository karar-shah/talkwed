import Sheet from "@/common/Sheet";
import {
  Button,
  Checkbox,
  cn,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@nextui-org/react";
import React from "react";
const EditGuestSheet = ({ isOpen, setIsOpen }: any) => {
  const ageGroup = [
    { key: "Child", label: "Child" },
    { key: "Young", label: "Young" },
    { key: "Adult", label: "Adult" },
  ];
  return (
    <Sheet
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="p-8"
      header={
        <h2 className="text-[22px] text-[#5A5A5A] font-semibold mb-10">
          Edit Guest
        </h2>
      }
    >
      <div className="space-y-5">
        <div className="flex ">
          <div className="w-1/2 mr-3">
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              First name{" "}
              <span className="font-semibold text-red-500 text-base"> *</span>
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
          <div className="w-1/2">
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              Last name
            </label>
            <Input
              name="last Name"
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
        <div className="flex">
          <div className="w-1/2 mr-3">
            <label
              htmlFor="ageGroup"
              className="text-[#6C6C6C] font-medium mb-1"
            >
              Age group
            </label>
            <Select
              items={ageGroup}
              placeholder="Child"
              className="mt-2"
              variant="bordered"
              classNames={{
                trigger:
                  " trigger py-4 px-5    h-fit  rounded-md border border-[#BFBFBF]",
                value: "text-base max-md:text-sm",
              }}
            >
              {(age) => <SelectItem key={age.key}>{age.label}</SelectItem>}
            </Select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="guestGroup"
              className="text-[#6C6C6C] font-medium mb-1"
            >
              Guest group
            </label>
            <Select
              items={ageGroup}
              placeholder="Groom family"
              className="mt-2"
              variant="bordered"
              classNames={{
                trigger:
                  " trigger py-4 px-5    h-fit  rounded-md border border-[#BFBFBF]",
                value: "text-base max-md:text-sm",
              }}
            >
              {(age) => <SelectItem key={age.key}>{age.label}</SelectItem>}
            </Select>
          </div>
        </div>
        <div className="border-t border-[#CACACA] mt-3.5"></div>
        <div className="flex">
          <div className="w-1/2 mr-3">
            <label htmlFor="email" className="text-[#6C6C6C] font-medium mb-1">
              Email
            </label>
            <Input
              name="email"
              placeholder="Enter email "
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
          <div className="w-1/2">
            <label
              htmlFor="PhoneNo"
              className="text-[#6C6C6C] font-medium mb-1"
            >
              Phone no.
            </label>
            <Input
              name="PhoneNo."
              placeholder="Enter no."
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
      </div>
      <div className="my-6 flex items-center space-x-3.5">
        <p className="font-medium text-[#6C6C6C] whitespace-nowrap">
          Need Hotel
        </p>
        <Switch
          classNames={{
            base: cn(
              "inline-flex w-full max-w-md  items-center",
              "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
              ""
            ),
            wrapper:
              "p-0 h-2 overflow-visible bg-[#D0CFCF] border-none  group-data-[selected=true]:bg-[#D0CFCF]",
            thumb: cn(
              "border-[#9924E9] bg-[#9924E9]",
              "w-5 h-5 border-2 shadow-lg",
              "group-data-[hover=true]:border-[#9924E9]",
              //selected
              "group-data-[selected=true]:ml-6",
              // pressed
              "group-data-[pressed=true]:w-7",
              "group-data-[selected]:group-data-[pressed]:ml-4"
            ),
          }}
        />
      </div>
      <div>
        <p className="text-[#6C6C6C] text-medium ">Invited to</p>
        <div className="flex flex-wrap mt-2 justify-between">
          <div className="flex space-x-2.5">
            <Checkbox
              radius="none"
              color="secondary"
              size="sm"
              classNames={{
                wrapper: "rounded-[3px]",
              }}
            />
            <p className="text-[#6C6C6C]">Wedding</p>
          </div>
          <div className="flex space-x-2.5">
            <Checkbox
              radius="none"
              color="secondary"
              size="sm"
              classNames={{
                wrapper: "rounded-[3px]",
              }}
            />
            <p className="text-[#6C6C6C]">Rehearsal dinner</p>
          </div>
          <div className="flex space-x-2.5">
            <Checkbox
              radius="none"
              color="secondary"
              size="sm"
              classNames={{
                wrapper: "rounded-[3px]",
              }}
            />
            <p className="text-[#6C6C6C]">Shower</p>
          </div>
        </div>
      </div>
      <Button
        variant="solid"
        className="w-full py-3.5 mt-8 h-[50px] max-w-[161px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
        onClick={() => setIsOpen(false)}
      >
        Save Changes
      </Button>
    </Sheet>
  );
};

export default EditGuestSheet;
