import { FaRegEdit } from "react-icons/fa";

export const HiredVendorView = () => (
  <div className="border rounded-lg flex-grow">
    <p className="font-semibold text-[#808080] p-5 mb-2">
      Still looking for vendor?{" "}
      <span className="underline text-brand">Search vendor</span>
    </p>
    <div className="flex flex-wrap p-4 -mx-2">
      <div className="px-2 w-4/12 ">
        <div className="border  rounded-md overflow-hidden">
          <div
            className={`min-h-60 relative bg-[url('/venue_bg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden`}
          >
            <div className="size-full bg-black bg-opacity-30 absolute top-0 left-0 flex items-center justify-end flex-col pb-4 px-4">
              <div className="bg-white/70 text-[#333333] w-full rounded-md py-2 px-3">
                <div className="line-clamp-1 font-medium">BANQUET HALLS</div>
                <div className="font-semibold text-lg">
                  Blue Venado Beach...
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] text-[#333333] flex items-center px-3.5 py-3 space-x-3">
            <FaRegEdit color="#7A7A7A" size={22} />
            <span className="font-medium">Give a review </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
