import { Button } from "@nextui-org/react";
import React from "react";

const RemoveAllGuests = () => {
  return (
    <div className="lg:px-2.5 ">
      <p className="text-[#6C6C6C] font-medium text-base">
        Do you want to remove all the guests from your Guest List? This action
        can not be undone
      </p>
      <div className="flex space-x-4 mt-8 mb-6">
        <Button
          variant="bordered"
          className="border border-brand text-brand rounded-md text-lg font-medium px-6 py-3.5 h-[50px]"
        >
          Cancel
        </Button>
        <Button
          variant="solid"
          className="bg-brand text-white rounded-md text-lg font-medium px-6 h-[50px]"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default RemoveAllGuests;