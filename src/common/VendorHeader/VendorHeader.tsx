import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@nextui-org/react";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { HiMiniArrowPath } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const VendorHeader = () => {
  return (
    <div className="bg-[#5C148C] relative">
      <div className="max-w-[1280px] mx-auto px-6 text-white flex items-center justify-between">
        <div className="text-2xl font-bold">TalkWed</div>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <div className="flex items-center py-2.5 cursor-pointer">
              <FaRegBell size={24} color="white" />
              <div className="size-10 rounded-full bg-[#4CB29A] text-[22px] font-bold text-white ml-6 mr-2 flex items-center justify-center">
                A
              </div>
              <div>
                <TbTriangleInvertedFilled color="white" size={14} />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="rounded-md px-3 pt-4 pb-5">
            <div className="">
              <div className="flex space-x-3">
                <Avatar
                  name="A"
                  size="lg"
                  className="bg-[#4CB29A] text-white font-bold text-3xl"
                />
                <div>
                  <h2 className="font-medium text-lg text-[#3F3F3F]">
                    Smith jackson.
                  </h2>
                  <p className="font-medium text-sm text-[#515151] underline">
                    Photographer
                  </p>
                </div>
              </div>
              <div className="border-t border-[#D2D2D2] mb-8 mt-3"></div>
              <div className="flex flex-col space-y-4">
                <Link href="/vendor/settings" className="flex space-x-3 items-center">
                  <IoSettingsOutline size={20} color="#888888" />
                  <p className="text-[#3F3F3F] text-base font-semibold">
                    Settings
                  </p>
                </Link>
                <Link href='/' className="flex space-x-3 items-center">
                  <HiMiniArrowPath size={20} color="#888888" />
                  <p className="text-[#3F3F3F] text-base font-semibold">
                    Switch to website
                  </p>
                </Link>
                <div className="flex space-x-3 items-center">
                  <BiLogOut size={20} color="#888888" />
                  <p className="text-[#3F3F3F] text-base font-semibold">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <img
        src="/header/Vector 378.svg"
        alt="Gradient background"
        className="hidden lg:block absolute top-0 right-60"
      />
      <img
        src="/header/Vector 379.svg"
        alt="Gradient background"
        className="hidden lg:block absolute top-0 right-96"
      />
      <img
        src="/header/Vector 380.svg"
        alt="Gradient background"
        className="hidden lg:block absolute top-0 left-60"
      />
    </div>
  );
};

export default VendorHeader;
