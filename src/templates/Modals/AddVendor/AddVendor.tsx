"use client";
import { Input } from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";

const AddVendor = () => {
  return (
    <div>
      <Input
        variant="bordered"
        fullWidth
        radius="sm"
        size="lg"
        color="primary"
        startContent={<BiSearch size={16} />}
        placeholder="Search vendor by name"
      />
      <div className="py-28 flex items-center justify-center">
        <p className="font-semibold text-[#808080] p-5 mb-2">
          Still looking for vendor? <span className="underline text-brand">Search vendor</span>
        </p>
      </div>
    </div>
  );
};

export default AddVendor;
