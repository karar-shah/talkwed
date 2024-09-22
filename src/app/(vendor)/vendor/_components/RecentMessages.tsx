import { Avatar, Badge, Button } from "@nextui-org/react";
import { useState } from "react";

const RecentMessages = () => {
  const [isShowingMessages, setIsShowingMessages] = useState(false);

  return (
    <div className="flex-grow border border-[#DADADA] px-6 pt-7  rounded-[10px]">
      <div className="flex items-center justify-between">
        <p className="text-xl text-[#444444]">Recent Messages</p>
        <Button
          variant="light"
          className="font-medium text-base border-none underline text-[#6B14A6] hover:!bg-transparent"
          onClick={() => setIsShowingMessages(!isShowingMessages)}
        >
          View all
        </Button>
      </div>
      {!isShowingMessages ? (
        <div className="flex flex-col justify-center items-center space-y-3.5 mt-20 ">
          <img
            src="/icons/leads-icon.svg"
            alt="leads-icon"
            className="size-24"
          />
          <p className="pb-4 lg:pb-0 lg:text-lg text-[#616161]">
            You haven’t received any message yet
          </p>
        </div>
      ) : (
        <div className="flex flex-col space-y-2 mt-10">
          <Message />
          <Message />
          <Message />
        </div>
      )}
    </div>
  );
};
const Message = () => {
  return (
    <div className="flex justify-between items-center bg-[#FAF4FECC]/80 py-3 px-4 rounded-md  ">
      <div className="flex space-x-4 items-center">
        <Badge
          content=""
          color="success"
          shape="circle"
          placement="bottom-right"
        >
          <Avatar radius="full" src="/Ellipse 32.svg" />
        </Badge>
        <div>
          <p className="text-lg font-medium text-[#626262]">Marsha Pee</p>
          <p className="text-sm text-[#626262]">Hello, thanks for getti.....</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xs text-[#1B8500]">Today</p>
        <span className="bg-[#29C602] font-semibold text-xs inline-block px-2 py-1 text-white rounded-full">
          2
        </span>
      </div>
    </div>
  );
};
export default RecentMessages;
