
import { Button } from "@nextui-org/react";
import { useState } from "react";

const RecentMessages = () => {
  const [isShowingMessages, setIsShowingMessages] = useState(false);

  return (
    <div className="flex-grow border border-[#DADADA] px-6 pt-7 pb-[170px]  rounded-[10px]">
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
      <div className="flex flex-col justify-center items-center space-y-3.5 mt-20">
        <img src="/icons/leads-icon.svg" alt="leads-icon" className="size-24" />
        <p className="text-lg text-[#616161]">
          You haven’t received any message yet
        </p>
      </div>
    </div>
  );
};

export default RecentMessages;
