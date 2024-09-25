import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

export default function GuestListSideMenue() {
  return (
    <div className="w-72 border-1 boarder-[#DADADA] rounded-[10px] shadow-custom2 ">
      <div className="flex items-center align-middle pl-7 gap-1">
        <IoAddCircleOutline size={30} color="#6B14A6" />
        <div className="py-[15px] text-brand text-lg font-semibold">
          Add Event
        </div>
      </div>
      <div className="py-[15px]  border-t-1 border-[#C9C9C9] pl-7 font-semibold text-brand-heading">
        Overview
      </div>
      <div className="py-[15px]  border-t-1 border-[#C9C9C9] pl-7 text-brand-paragraph">
        Weeding
      </div>
      <div className="py-[15px]  border-t-1 border-[#C9C9C9] pl-7 text-brand-paragraph">
        Rehearsal Dinner
      </div>
      <div className="py-[15px]  border-t-1 border-[#C9C9C9] pl-7 text-brand-paragraph">
        Shower
      </div>
    </div>
  );
}
