import React from "react";
import { IBrowserDummyTabs } from "./Couple";

export default function BrowserDummy({
  browserTabs,
}: {
  browserTabs: IBrowserDummyTabs;
}) {
  return (
    <div
      className="md:relative  border-1 border-b-0 border-[#DDDDDD] rounded-xl  overflow-hidden w-full max-w-[730px] right-[-100px] bottom-[-10px] z-0 max-md:max-w-[500px]"
      style={{ boxShadow: "-1px -1px 15px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="md:absolute w-full ">
        {/* button bar */}
        <div className="flex items-center top-0 left-0 px-11 justify-between h-8 bg-[#F8F5F5]">
          <div className="flex items-center gap-2 basis-1/3 ">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="flex items-center justify-start  py-6 px-11 gap-3 border-b-1 border-[#D9D9D9] bg-white w-full">
          <img
            src={"./onboarding/Group5777.svg"}
            alt="Menue Icon"
            height={40}
            width={40}
            className=""
          />
          <div className="text-3xl max-md:text-xl font-semibold text-brand-muted2">
            You & Your Partner
          </div>
        </div>
        <div className="px-11 py-10 flex flex-col gap-6 font-normal text-[22px] max-md:text-lg text-brand-muted2">
          {browserTabs.textArray.map((item) => (
            <div key={item.text} className="flex gap-4 items-center">
              <item.icon className="w-6 h-6" />
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
