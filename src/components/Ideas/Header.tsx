import Search from "@/common/Search";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="gradient-bg">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="md:grid grid-cols-2 pt-20 gap-20 bg-gradient-to-b from-[rgba(255, 255, 255, 0.23)] to-purple-900  h-[600px]">
            <div className="">
              <h1 className="text-[50px] font-bold">
                Your Ultimate <span className="text-brand">Wedding</span>
                Companion
              </h1>
              <p className="text-xl font-medium mt-12 mb-4">
                Let’s find your wedding team
              </p>
              <Search />
            </div>
            <div className=" ">
              <div className="flex items-center gap-2 w-full">
                <img src="/home4.svg" alt="" />
                <img src="/home1.svg" alt="" />

                <div className="space-y-2">
                  <img src="/home3.svg" alt="" />
                  <img src="/home2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
