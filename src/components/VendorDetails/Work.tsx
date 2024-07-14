import React from "react";

const Work = () => {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2">
          <img
            src="/work/1.svg"
            alt=""
            className="object-cover	 w-full h-full"
          />
        </div>
        <div className="row-span-2 col-start-3">
          <img
            src="/work/2.svg"
            alt=""
            className="object-cover	 w-full h-full"
          />
        </div>
        <div className="row-span-2 col-start-4 space-y-2">
          <img
            src="/work/3.svg"
            alt=""
            className="object-cover	 w-full h-full max-h-[49%] rounded"
          />
          <img
            src="/work/1.svg"
            alt=""
            className="object-cover	 w-full h-full max-h-[49%] rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
