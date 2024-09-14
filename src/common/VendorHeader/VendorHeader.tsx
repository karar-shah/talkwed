import { FaRegBell } from "react-icons/fa";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const VendorHeader = () => {
  return (
    <div className="bg-[#5C148C]">
    <div className="max-w-[1280px] mx-auto px-6 text-white flex items-center justify-between">
      <div className="text-2xl font-bold">TalkWed</div>
      <div className="flex items-center py-2.5">
        <FaRegBell size={24} color="white" />
        <div className="size-10 rounded-full bg-[#4CB29A] text-[22px] font-bold text-white ml-6 mr-2 flex items-center justify-center">
          A
        </div>
        <div>
          <TbTriangleInvertedFilled color="white" size={14} />
        </div></div>
      </div>
    </div>
  );
};

export default VendorHeader;
