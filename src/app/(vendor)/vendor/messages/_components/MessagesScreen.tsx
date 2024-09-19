"use client";
import {
  Avatar,
  Button,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useState } from "react";

import { useModalAction } from "@/context/modal.context";
import { BiFilterAlt } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const MessagaesScreen = () => {
  const [isDisplayingChat, setIsDisplayingChat] = useState(false);
  return (
    <div className="flex">
      <div className="w-3/12 border-r border-collapse border-[#9924E930] min-h-screen">
        <div className="border-[#9924E930] py-[18px] border-b pl-7 pr-4 bg-[#9924E90D]">
          <AllChatsHeader />
        </div>
        <AllChats setIsDisplayingChat={setIsDisplayingChat} />
      </div>
      <div className="w-9/12">
        {isDisplayingChat ? (
          <DisplayChat setIsDisplayingChat={setIsDisplayingChat} />
        ) : (
          <ChatsNotDisplayed />
        )}
      </div>
    </div>
  );
};
export default MessagaesScreen;

const FilterList = () => {
  const filterItems = [
    { name: "Unread", dot: "white" },
    { name: "Read", dot: "white" },
    { name: "Pending", dot: "#EDAB00" },
    { name: "Replied", dot: "#0290CD" },
    { name: "Booked", dot: "#04B100" },
    { name: "Reported", dot: "#FE454F" },
  ];
  return (
    <div className="flex flex-col divide-y-1 divide-[#EAEAEA]">
      {filterItems.map((item) => (
        <div
          key={item.name}
          className="flex py-3 px-3 space-x-1.5  justify-between items-center"
        >
          <div className="flex space-x-2.5  items-center">
            <Checkbox
              radius="none"
              color="secondary"
              size="sm"
              classNames={{
                wrapper: "rounded-[3px]",
              }}
            />
            <p className="">{item.name}</p>
          </div>
          <GoDotFill color={item.dot} />
        </div>
      ))}
    </div>
  );
};

const AllChatsHeader = () => {
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
          {/* <p>hello</p> */}
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

const AllChats = ({ setIsDisplayingChat }: any) => {
  return (
    <div className="flex flex-col divide-y-1 divide-[#DBDBDB]">
      <div className="flex space-x-2 px-6 py-6 cursor-pointer items-center">
        <Avatar src="https://i.pravatar.cc/300" className="bg-transparent" />
        <div className="flex space-x-8 justify-between">
          <div>
            <p className="font-bold text-lg text-[#5A5A5A]">Veniza</p>
            <p className="font-medium text-[#5A5A5A]">
              Hi, i wanted to know...
            </p>
          </div>
          <div>
            <p className="font-medium text-sm text-[#60C03E]">Today</p>
            <p className="bg-[#60C03E] text-white txet-sm font-bold rounded-full text-center">
              1
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex space-x-2 px-6 py-6 cursor-pointer items-center"
        onClick={() => setIsDisplayingChat(true)}
      >
        <Avatar src="https://i.pravatar.cc/300" />
        <div>
          <p className="font-bold text-lg text-[#5A5A5A]">Jennie</p>
          <p className="font-medium text-[#5A5A5A]">Hi, i wanted to know...</p>
        </div>
      </div>
    </div>
  );
};

const ChatsNotDisplayed = () => {
  const keyMatricsList = [
    {
      title: "Replied",
      icon: "/icons/image 111.svg",
      number: 0,
      text: "Replied",
    },
    {
      title: "Booked",
      icon: "/icons/image 111 (1).svg",
      number: 0,
      text: "Booked",
    },
    {
      title: "Discarded",
      icon: "/icons/image 111 (2).svg",
      number: 0,
      text: "Discarded",
    },
    {
      title: "Avg. Response Time",
      icon: "/icons/image 111 (3).svg",
      number: 0,
      text: "views",
    },
  ];
  return (
    <div className="pl-8 pt-5 pr-2">
      <h2 className="font-bold text-2xl text-[#444444] mb-4">Key Metrics</h2>
      <div className=" flex flex-wrap">
        {keyMatricsList.map((item) => (
          <div key={item.title} className=" flex flex-col flex-1">
            <KeyMatricCard item={item} key={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center py-28 w-1/2 text-center">
          <img src="/icons/image 135(1).svg" alt="" />
          <p className="font-bold text-lg text-[#464646]">
            Click on a chat to view it
          </p>
          <p className="font-medium text-[#6A6A6A]">
            Here you can send and receive messages from vendors, venue and
            wedding forum members
          </p>
        </div>
      </div>
    </div>
  );
};

const KeyMatricCard = ({ item }: any) => {
  return (
    <div className="flex flex-col flex-1 border border-[#dadada] rounded-md mr-4">
      <div className=" flex items-center space-x-5 py-5 px-4">
        <img src={item.icon} alt="message-icon" className="size-[50px]" />
        <div className="">
          <p className="text-[#656565] font-medium">{item.title}</p>
          <p className="font-semibold text-[#383838]">
            <span className="font-bold text-3xl mr-1.5">{item.number}</span>
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

const DisplayChat = ({ setIsDisplayingChat }: any) => {
  const { openModal } = useModalAction();
  return (
    <div>
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
              <li
                className="py-2.5 px-3.5"
                onClick={() => setIsDisplayingChat(false)}
              >
                Close Chat
              </li>
              <li className="py-2.5 px-3.5">Mark as Booked</li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>

      <div className="pt-6 pr-10 pl-6">
        <ChatWithJennie />
      </div>
    </div>
  );
};

const ChatWithJennie = () => {
  return (
    <>
      <div className="flex justify-center items-center mb-6 ">
        <div className="w-1/12 border-t border-[#EAEAEA]"></div>
        <p className="border border-[#CFCFCF] px-8 py-1.5 rounded-full text-[#A6A6A6] text-sm">
          today
        </p>
        <div className="w-1/12 border-t border-[#EAEAEA]"></div>
      </div>
      <div className="flex flex-col space-y-2.5 ">
        <JennieMessage />
        <div className="ml-auto w-1/4 flex flex-col ">
          <p className="font-medium text-sm text-[#989898] mb-1.5 ml-auto">
            Jennie, 04:23 pm
          </p>

          <p className="py-2.5 px-3 text-sm text-[#626262] bg-[#00B4A20D] border  border-[#00B4A27A] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-sm">
            Hi, everyone
          </p>
        </div>
        <JennieMessage />
      </div>
    </>
  );
};

const JennieMessage = () => {
  return (
    <div className="flex space-x-3.5">
      <Avatar
        name="J"
        className="bg-[#008C30] text-white font-bold text-base"
      />
      <div className="w-1/4">
        <p className="font-medium text-sm text-[#989898] mb-2.5">
          Jennie, 04:23 pm
        </p>
        <p className="py-2.5 px-3 text-sm text-[#626262] bg-[#FBFBFB] border  border-[#D9D9D9] rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl">
          Hi, everyone
        </p>
      </div>
    </div>
  );
};
