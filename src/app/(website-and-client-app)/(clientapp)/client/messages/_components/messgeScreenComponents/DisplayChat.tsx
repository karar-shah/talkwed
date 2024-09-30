import { useModalAction } from "@/context/modal.context";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { IoEllipsisVertical } from "react-icons/io5";
import { ChatWithOtherPerson } from "./ChatWithOtherPerson";

export const DisplayChat = ({ setIsDisplayingChat }: any) => {
  const { openModal } = useModalAction();
  return (
    <div className="flex flex-col flex-1">
      <div className="border-[#9924E930] py-2 border-b pl-7 pr-4 bg-[#9924E90D] flex justify-between items-center ">
        <div className="flex space-x-4 items-center">
          <Avatar src="https://i.pravatar.cc/300" />
          <div>
            <p className="text-lg text-[#5A5A5A] font-bold">Jennie</p>
            <p className="text-[13px] font-medium text-[#5A5A5A]">Online</p>
          </div>
        </div>
        <Popover
          key={1}
          placement="bottom-end"
          classNames={{
            content: "bg-white text-[#535353] rounded-[4px] cursor-pointer",
            trigger: "cursor-pointer",
          }}
        >
          <PopoverTrigger>
            <div>
              <IoEllipsisVertical />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <ul className="text-[#535353] text-base font-normal flex flex-col divide-y-2">
              <li
                className="py-2.5 px-3.5"
                onClick={() =>
                  openModal({
                    title: "Delete Chat",
                    modal: "DELETE_CHAT",
                    size: "lg",
                    bodyOnly: true,
                  })
                }
              >
                Delete
              </li>
              <li
                className="py-2.5 px-3.5"
                onClick={() => {
                  openModal({
                    title: "Report Sender",
                    modal: "REPORT_SENDER",
                    size: "lg",
                    bodyOnly: true,
                  });
                }}
              >
                Report Sender
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>

      <div className="pt-6 pr-10 pl-6 flex flex-col flex-1 min-h-screen">
        <ChatWithOtherPerson />
      </div>
    </div>
  );
};
