'use client';
import {
  Button,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

import { useModalAction } from "@/context/modal.context";
import { BiFilterAlt } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
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

const NoMessageScreen = ({setShowMessagesScreen}:{setShowMessagesScreen:any}) => {
  return (
    <div className="flex">
      <div className="w-3/12 border-r border-collapse border-[#9924E930] min-h-screen">
        <div className="border-[#9924E930] py-[18px] border-b pl-7 pr-4 bg-[#9924E90D]">
          <MessageHeader setShowMessagesScreen={setShowMessagesScreen}/>
        </div>
      </div>
      <div className="w-9/12">
        <div className="pl-8 pt-5 pr-2">
          <h2 className="font-bold text-2xl text-[#444444] mb-4">
            Key Metrics
          </h2>
          <div className=" flex flex-wrap">
            {keyMatricsList.map((item) => (
              <div key={item.title} className=" flex flex-col flex-1">
                <KeyMatricCard item={item} key={item} />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center py-28">
            <img src="/icons/image 135.svg" alt="" />
            <p className="font-bold text-lg text-[#464646]">
              No chat to display
            </p>
            <p className="font-medium text-[#6A6A6A]">
              Here you can send and receive messages from vendors, venue and
              wedding forum members
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

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
const MessageHeader = ({setShowMessagesScreen}:{setShowMessagesScreen:any}) => {
  const { openModal } = useModalAction();
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center space-x-2.5">
        <h2 className="text-xl font-bold text-[#464646]" onClick={() => setShowMessagesScreen(true)}>Messages</h2>
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
export default NoMessageScreen