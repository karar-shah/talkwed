import { Avatar } from "@nextui-org/react";

export const AllChats = ({ setIsDisplayingChat }: any) => {
  return (
    <div className="flex flex-col divide-y-1 divide-[#DBDBDB]">
      <div className="flex space-x-2 px-6 py-6 cursor-pointer items-center justify-between">
        <div className="flex space-x-4">
        <Avatar src="https://i.pravatar.cc/300" className="bg-transparent" />
          <div>
            <p className="font-bold text-lg text-[#5A5A5A]">Veniza</p>
            <p className="font-medium text-[#5A5A5A]">
              Hi, i wanted to know...
            </p>
          </div>
         
        </div>
        <div>
            <p className="font-medium text-sm text-[#60C03E]">Today</p>
            <p className="bg-[#60C03E] text-white txet-sm font-bold rounded-full text-center">
              1
            </p>
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
