"use client";
import { useModalAction } from "@/context/modal.context";
import { FiEdit } from "react-icons/fi";

export const AllChatsHeader = () => {
  const { openModal } = useModalAction();
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#464646]">Messages</h2>
        <div
          className="size-9 cursor-pointer flex items-center justify-center bg-[#6B14A6] rounded-md"
          onClick={() =>
            openModal({
              title: "New Messagae",
              modal: "NEW_MESSAGE",
              size: "lg",
              bodyOnly: true,
            })
          }
        >
          <FiEdit color="white" size={20} />
        </div>
      </div>
    </div>
  );
};
