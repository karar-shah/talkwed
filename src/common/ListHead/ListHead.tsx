import React from "react";

const ListHead = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="flex mb-8">
      <div className="bg-brand w-[3px] h-[70px] me-3 rounded" />
      <div>
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="font-bold text-[26px]"
        />

        <p className="text-lg font-medium text-[#4E4E4E]">{subTitle}</p>
      </div>
    </div>
  );
};

export default ListHead;
