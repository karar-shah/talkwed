"use client";
import Button from "@/common/Button";
import { useModalAction } from "@/context/modal.context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

const Page = () => {
  const router = useRouter();
  const { openModal } = useModalAction();

  const [showItems, setShowItems] = useState(false);

  return (
    <div className="px-14 space-y-3.5 pt-4 min-h-screen relative">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-[#444444]">My Gallery</h2>
        <Button
          title="Save Link"
          btn={true}
          className="text-lg font-medium flex items-center justify-center py-3.5 rounded-md px-7"
          onClick={() =>
            openModal({
              title: "Delete Task",
              modal: "SAVE_LINK",
              size: "lg",
              bodyOnly: true,
            })
          }
        />
      </div>
      <div className="border-t border-[#C9C9C9] "></div>
      {showItems ? (
        <>
          <div className="w-3/12 shadow-lg flex flex-col rounded-md mt-12 cursor-pointer" onClick={()=>router.push('/client/gallery/my-gallery/birthday')}>
            <div className="relative max-w-3/12 inline-block">
              <img
                src="/Rectangle 34624413.svg"
                alt="dots"
                className="block w-full"
              />
              <div className="size-6 cursor-pointer flex items-center justify-center bg-white/70 rounded-sm absolute top-2 right-2">
                <HiDotsVertical size={16} color="#454545" />
              </div>
            </div>
            <p className="font-semibold text-lg text-[#5A5A5A] pt-2.5 pb-4 pl-4">
              Elsa’s Birthday
            </p>
          </div>
        </>
      ) : (
        <div
          className="flex flex-col justify-center items-center space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => setShowItems(true)}
        >
          <img src="/icons/link.svg" alt="link" className="size-[60px]" />

          <div className="flex flex-col text-center">
            <p className="font-bold text-lg text-[#373737]">No link saved</p>
            <p className="font-medium text-[#5C5C5C]">
              Please save the gallery links provided by your vendors here for
              easy access.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
