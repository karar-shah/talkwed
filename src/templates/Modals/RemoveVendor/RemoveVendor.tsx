"use client";
import { useModalAction } from "@/context/modal.context";
import { Button } from "@nextui-org/react";

const RemoveVendor = () => {
  const { closeModal } = useModalAction();
  return (
    <div className="py-4">
      <h1 className="text-[22px] font-semibold text-[#5A5A5A] text-center">Remove a Vendor</h1>
      <p className="text-lg text-[#5A5A5A] text-center mt-5">
      Are you sure you want to remove this vendor? 
      </p>
      <div className="space-x-3.5 mt-6 flex items-center justify-center">
        <Button
          variant="bordered"
          className="w-full py-3.5 h-[50px] max-w-[161px] rounded-lg text-lg border font-medium border-[#5C148C] text-[#5C148C]"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          variant="solid"
          className="w-full py-3.5 h-[50px] max-w-[161px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
          onClick={closeModal}
        >
          Delete task
        </Button>
      </div>
    </div>
  );
};

export default RemoveVendor;
