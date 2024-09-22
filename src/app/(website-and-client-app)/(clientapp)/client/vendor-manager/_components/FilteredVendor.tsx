"use client";
import { useModalAction } from "@/context/modal.context";
import { Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { FaAngleLeft, FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoStar } from "react-icons/io5";
import { categoryTypes } from "../data";

export const FilteredVendors = () => {
  const { openModal } = useModalAction();
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  return (
    <div className="border rounded-lg flex-grow">
      <p className="font-semibold text-[#808080] p-5 mb-2">
        Still looking for vendor?{" "}
        <span className="underline text-brand">Search vendor</span>
      </p>
      <div className="flex flex-wrap p-4 -mx-2 space-y-6 md:space-y-0">
        <div className="px-2 w-full md:w-4/12 ">
          <div className="border  rounded-md overflow-hidden">
            <div
              className={`min-h-60 relative bg-[url('/venue_bg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden`}
            >
              <div
                className="flex items-center justify-center absolute top-3 right-3 p-2 cursor-pointer z-10 bg-white/30"
                onClick={() =>
                  openModal({
                    title: "Delete Task",
                    modal: "REMOVE_VENDOR",
                    size: "lg",
                    bodyOnly: true,
                  })
                }
              >
                <FiTrash2 color="white" size={18} />
              </div>

              <div className="size-full bg-black bg-opacity-30 absolute top-0 left-0 flex items-center justify-end flex-col pb-4 px-4">
                <div className="bg-white/70 text-[#333333] w-full rounded-md py-2 px-3">
                  <div className="line-clamp-1 text-lg font-bold">
                    Blue Venado Beach...
                  </div>
                  <div className="font-medium">Hastings, MI</div>
                  <div className="flex items-center gap-1">
                    {" "}
                    <IoStar color="#EAAE00" size={18} />
                    <span className="font-semibold">4.9</span>
                    <span className="font-medium">(145)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2.5 px-3.5 space-y-5">
              {isNoteOpen ? (
                <>
                  <div
                    className="flex cursor-pointer gap-1 items-center text-custom-gray-500 font-medium"
                    onClick={() => setIsNoteOpen(false)}
                  >
                    <FaAngleLeft color="#797979" size={18} />
                    Back
                  </div>
                  <Textarea
                    variant="bordered"
                    minRows={3}
                    labelPlacement="outside"
                    placeholder="Write a note.."
                    className="text-custom-gray-500 font-medium text-lg h-full border-[#A6A6A6]"
                    classNames={{
                      inputWrapper: "border border-[#A6A6A6]",
                    }}
                  />
                </>
              ) : (
                <>
                  <Select
                    items={categoryTypes}
                    placeholder="Select category"
                    className=""
                    variant="faded"
                    radius="sm"
                    classNames={{
                      trigger: "triggerh-fit border-none bg-[#FFF5DA]",
                      value: "value text-[#333333] font-medium",
                    }}
                  >
                    {(categoryType) => (
                      <SelectItem key={categoryType.key}>
                        {categoryType.label}
                      </SelectItem>
                    )}
                  </Select>
                  <div
                    className="flex gap-3 cursor-pointer"
                    onClick={() => setIsNoteOpen(true)}
                  >
                    <FaRegEdit color="#838383" size={20} />
                    <div className="underline text-brand mb-10">Add note</div>
                  </div>
                </>
              )}
            </div>
            <div
              className="bg-[#F8F8F8] text-[#333333] flex items-center px-3.5 py-3 space-x-3 cursor-pointer"
              onClick={() =>
                openModal({
                  title: "Delete Task",
                  modal: "CLIENT_MESSAGE_VENDOR",
                  size: "lg",
                  bodyOnly: true,
                })
              }
            >
              <HiOutlineMail color="#7A7A7A" size={22} />
              <span className="font-medium">Contact </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
