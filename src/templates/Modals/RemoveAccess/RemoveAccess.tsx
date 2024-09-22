"use client";
import { useModalAction } from "@/context/modal.context";
import { Button } from "@nextui-org/react";

const DeleteTask = () => {
  const { closeModal } = useModalAction();
  return (
    <div className="space-y-3 py-4">
      <h1 className="text-[22px] font-semibold text-[#5A5A5A]">
        Remove access
      </h1>
      <p className="text-lg text-[#5A5A5A]">
        Are you sure you want to remove this person&apos;s access from the shared
        file? They will not be able to access the file again.
      </p>
      <div className="space-x-3.5 mt-3">
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
          Remove
        </Button>
      </div>
    </div>
  );
};

export default DeleteTask;
