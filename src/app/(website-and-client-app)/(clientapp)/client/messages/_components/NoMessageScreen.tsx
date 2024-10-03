"use client";

import { useModalAction } from "@/context/modal.context";
import { Button } from "@nextui-org/react";
import { FiEdit } from "react-icons/fi";

const NoMessageScreen = ({
  setShowMessagesScreen,
}: {
  setShowMessagesScreen: any;
}) => {
  const {openModal} = useModalAction()
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-3/12 border-r border-collapse border-[#9924E930]">
        <div className="border-[#9924E930] py-[18px] border-b pl-7 pr-4 bg-[#9924E90D] flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#464646]">Messages</h2>
          <div className="size-9 cursor-pointer flex items-center justify-center bg-[#6B14A6] rounded-md" 
          onClick={()=>openModal({
            title: "New Messagae",
            modal: "NEW_MESSAGE",
            size: "lg",
            bodyOnly: true,
          })}
          
          >
            <FiEdit color="white" size={20} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-9/12">
        <div className="max-lg:flex-col-reverse max-lg:flex lg:pl-8 pt-5 pr-2 max-lg:px-6 pb-10">
          <div
            className="flex flex-col justify-center items-center py-28"
            onClick={() => setShowMessagesScreen(true)}
          >
            <img src="/icons/image 135.svg" alt="" />
            <p className="font-bold text-lg text-[#464646]">
              No chat to display
            </p>
            <p className="font-medium text-[#6A6A6A]">
              Here you can send and receive messages from vendors, venue and
              wedding forum members
            </p>
            <Button
              variant="bordered"
              size="lg"
              color="secondary"
              radius="sm"
              className="border-1 mt-4"
            >
              Search vendor near you
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMessageScreen;
