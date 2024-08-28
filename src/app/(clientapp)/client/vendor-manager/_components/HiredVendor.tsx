import { useState } from "react";
import { HiredVendorView } from "./HiredVendorView";

export const HiredVendors = () => {
  const [isHired, setIsHired] = useState(false);
  return (
    <>
      {isHired ? (
        <HiredVendorView />
      ) : (
        <div className="border rounded-lg flex flex-col items-center justify-center h-full">
          <img
            src="/icons/NothingFound 1.svg"
            alt="Nothing Found"
            className="size-48"
          />
          <p className="text-custom-gray-500 font-semibold text-lg text-center">
            No vendors were found. Please
            <br />
            <span
              className="text-brand underline cursor-pointer"
              onClick={() => setIsHired(true)}
            >
              search for vendors
            </span>
            .
          </p>
        </div>
      )}
    </>
  );
};

