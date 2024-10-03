import { useModalAction } from "@/context/modal.context";
import { Avatar } from "@nextui-org/react";
import { HiDotsVertical } from "react-icons/hi";

export const OtherPersonMessage = () => {
  const {openModal}=useModalAction()
  return (
    <div className="flex">
      <Avatar
        name="J"
        className="bg-[#008C30] text-white font-bold text-base mr-3.5"
      />
      <div className="w-full lg:w-1/4">
        <p className="font-medium text-sm text-[#989898] mb-2.5">
          Jennie, 04:23 pm
        </p>
        <p className="py-2.5 px-3 text-sm text-[#626262] bg-[#FBFBFB] border  border-[#D9D9D9] rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl">
          Hi, everyone
        </p>
      </div>
      <HiDotsVertical size={16} className="mt-8 m-1 cursor-pointer"color="#8A8A8A" onClick={
        () => openModal({
          title: "Delete Message",
          modal: "DELETE_MESSAGE",
          size: "lg",
          bodyOnly: true,
        })
      }/>
    </div>
  );
};