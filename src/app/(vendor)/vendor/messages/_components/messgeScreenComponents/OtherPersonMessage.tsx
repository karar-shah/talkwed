import { Avatar } from "@nextui-org/react";

export const OtherPersonMessage = () => {
  return (
    <div className="flex space-x-3.5">
      <Avatar
        name="J"
        className="bg-[#008C30] text-white font-bold text-base"
      />
      <div className="w-full lg:w-1/4">
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