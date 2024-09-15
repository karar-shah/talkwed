"use client";
import { useState } from "react";
import { LuInfo } from "react-icons/lu";
import { StoreFrontTabProps } from "../page";
import RichTextEditor from "./RichTextEditor";

const BusinessDetails = ({ setActiveIndex }: StoreFrontTabProps) => {
  const [content, setContent] = useState("");

  return (
    <div>
      <h1 className="font-bold text-2xl text-[#444444]">Business Details</h1>
      <div className="flex space-x-3 bg-[#3AC3D64A]/10 py-2 px-2.5 mt-3 mb-5 border border-[#3AC3D64A/30]">
        <div className="size-6 mt-1">
          <LuInfo size={24} color="#3AC3D6" />
        </div>
        <p className="text-[#686868]">
          Your storefront showcases detailed information about your wedding
          services, designed to attract and engage couples who are planning
          their special day.
        </p>
      </div>
      <div>
        <p className="text-[#6C6C6C] font-semibold mb-1">
          Describe your business and services
        </p>
        <RichTextEditor />
      </div>
      {/* <Button
        className="bg-brand text-white rounded-md py-4 px-10 my-5 text-center text-lg font-bold block"
        href="#"
        title="Preview"
        type="button"
        btn={true}
        onClick={() => setActiveIndex((activeIndex) => activeIndex + 1)}
      /> */}
    </div>
  );
};

export default BusinessDetails;
