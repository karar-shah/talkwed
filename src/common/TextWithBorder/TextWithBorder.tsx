import React from "react";

type TextWithBorderProps = {
    text: string;
  };

const TextWithBorder = ({text}: TextWithBorderProps) => {
  return (
    <div className="flex items-center justify-center my-5">
      <div className="flex-1 border-t border-[#A8A8A8] relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-[#A8A8A8]"></div>
        </div>
      </div>
      <span className="px-3 border-[#A8A8A8]">{text}</span>
      <div className="flex-1 border-t border-[#A8A8A8] relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-[#A8A8A8]"></div>
        </div>
      </div>
    </div>
  );
};

export default TextWithBorder;
