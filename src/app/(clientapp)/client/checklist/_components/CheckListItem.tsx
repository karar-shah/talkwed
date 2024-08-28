"use client";

import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export const Checklist = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="text-[#5A5A5A] flex pt-7 pb-5 px-5">
      {checked ? (
        <FaCheckCircle
          color="#01AA12"
          size="18"
          className="mt-1 mr-4"
          onClick={() => setChecked(false)}
        />
      ) : (
        <CiCircleCheck
          color="#6D6D6D"
          size="18"
          className="mt-1 mr-4"
          onClick={() => setChecked(true)}
        />
      )}
      <div className="">
        <p className={`text-lg font-semibold ${checked && "line-through"}`}>
          Find and hire your wedding planner
        </p>
        <div className="flex flex-row gap-5 justify-start items-center mt-1">
          <p>
            Due on <span className="font-semibold text-red-500 ">June, 12</span>
          </p>
          <button className="inline-block text-[#444444] bg-gray-100  border-[#9924E947] border py-[2px] px-[14px] rounded-md">
            Vendors
          </button>
        </div>
      </div>
      {checked && (
        <FaRegTrashCan
          color="#A5A5A5"
          size="18"
          className="mt-1 ml-auto cursor-pointer"
        />
      )}
    </div>
  );
};
