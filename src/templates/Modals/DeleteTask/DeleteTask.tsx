"use client";
import { useModalAction } from "@/context/modal.context";
import { Button } from "@nextui-org/react";

const DeleteTask = () => {
  const { closeModal } = useModalAction();
  return (
    <div className="space-y-3 py-4">
      <h1 className="text-[22px] font-semibold text-[#5A5A5A]">Delete Task</h1>
      <p className="text-lg text-[#5A5A5A]">
        Are you sure you want to delete this task? This task will be permanently
        deleted
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
          Delete task
        </Button>
      </div>
    </div>
  );
};

export default DeleteTask;
