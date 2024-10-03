import { Button, Input } from "@nextui-org/react";
import React from "react";

const CreateNewGroup = () => {
  return (
    <div className="px-2">
      <div className="">
        <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
          Group name
        </label>
        <Input
          name="groupName"
          placeholder="Couple"
          size="md"
          type="text"
          variant="bordered"
          className={"mt-2"}
          classNames={{
            input: "text-base max-md:text-sm ",
            inputWrapper: "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit",
          }}
        />
      </div>
      <Button
        variant="solid"
        className="text-white text-lg bg-brand rounded-lg px-10 min-h-[50px] font-medium mt-8 mb-4"
      >
        Create
      </Button>
    </div>
  );
};

export default CreateNewGroup;
