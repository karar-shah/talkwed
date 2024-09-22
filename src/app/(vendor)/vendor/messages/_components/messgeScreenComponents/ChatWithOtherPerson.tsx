import MessagesEditor from "../MessageEditor";
import { OtherPersonMessage } from "./OtherPersonMessage";

export const ChatWithOtherPerson = () => {
  return (
    <>
      <div className="flex justify-center items-center mb-6 ">
        <div className="w-1/12 border-t border-[#EAEAEA]"></div>
        <p className="border border-[#CFCFCF] px-8 py-1.5 rounded-full text-[#A6A6A6] text-sm">
          today
        </p>
        <div className="w-1/12 border-t border-[#EAEAEA]"></div>
      </div>
      <div className="flex flex-col space-y-2.5 flex-1 relative pb-10">
        <OtherPersonMessage />
        <div className="lg:ml-auto lg:w-1/4 flex flex-col ">
          <p className="font-medium text-sm text-[#989898] mb-1.5 ml-auto">
            Jennie, 04:23 pm
          </p>

          <p className="py-2.5 px-3 text-sm text-[#626262] bg-[#00B4A20D] border  border-[#00B4A27A] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-sm">
            Hi, everyone
          </p>
        </div>
        <OtherPersonMessage />
        <div className="absolute bottom-6 right-0 left-0">
          <MessagesEditor/>
        </div>
      </div>
    </>
  );
};
