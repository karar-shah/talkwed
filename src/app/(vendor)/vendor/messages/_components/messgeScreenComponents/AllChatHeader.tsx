'use client';
import { useModalAction } from "@/context/modal.context";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { BiFilterAlt } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FilterList } from "./FilterList";

export const AllChatsHeader = () => {
  const { openModal } = useModalAction();
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center space-x-2.5">
        <h2 className="text-xl font-bold text-[#464646]">Messages</h2>
        <Popover
          key={1}
          placement="bottom-end"
          color="secondary"
          classNames={{
            content: "bg-white text-[#535353] rounded-[4px] cursor-pointer",
            trigger: "cursor-pointer",
          }}
        >
          <PopoverTrigger>
            <p>
              <MdKeyboardArrowDown size={24} color="#797979" />
            </p>
          </PopoverTrigger>
          <PopoverContent>
            <Button
              variant="solid"
              size="md"
              className="font-normal text-base h-fit bg-transparent px-4 py-3.5"
              onClick={() =>
                openModal({
                  title: "Change Email",
                  modal: "CHANGE_EMAIL",
                  size: "lg",
                  bodyOnly: true,
                })
              }
            >
              Change Email
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <Popover
        key={1}
        placement="bottom-end"
        color="secondary"
        classNames={{
          content: "bg-white text-[#535353] rounded-[4px] cursor-pointer",
          trigger: "cursor-pointer",
        }}
      >
        <PopoverTrigger>
          <div>
            <BiFilterAlt size={24} color="#8F8F8F" />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <FilterList />
        </PopoverContent>
      </Popover>
    </div>
  );
};