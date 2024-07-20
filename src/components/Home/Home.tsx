import ListCard from "@/common/ListCard";
import ListHead from "@/common/ListHead";
import SearchForm from "@/common/SearchForm";
import { BlogsSlider, VendorsSlider } from "@/common/Slider";
import TopVendor from "@/common/Slider/TopVendor";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Features from "./Features";
import Invites from "./Invites";
import Destination from "./Destination";

const Home = () => {
  return (
    <div className="">
      <div className="gradient-bg">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="md:grid grid-cols-2 md:pt-20 pt-5 gap-20 md:space-y-0 space-y-3  bg-gradient-to-b from-[rgba(255, 255, 255, 0.23)] to-purple-900  md:h-[600px]">
            <div className="">
              <h1 className="md:text-[50px] text-[40px] md:text-start text-center font-bold">
                Your Ultimate <span className="text-brand">Wedding</span>&nbsp;
                Companion
              </h1>
              <p className="text-xl font-medium mt-12 mb-4">
                Let’s find your wedding team
              </p>
              <SearchForm
                searchPlaceholder="Wedding Venues"
                locationPlaceholder="New York"
              />
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 w-full ">
                <div>
                  <img
                    src="/home4.svg"
                    alt=""
                    className="w-[178px] h-[282px] rounded-lg object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/home1.svg"
                    alt=""
                    className="w-[274px] sm:h-[402px] h-[300px] rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <img
                    src="/home3.svg"
                    alt=""
                    className="w-[151.89px] h-[215.36px]  rounded-lg object-cover"
                  />
                  <img
                    src="/home2.svg"
                    alt=""
                    className="w-[151.89px] h-[100.5px]  rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto p-4 space-y-28 mt-16">
        <div className="">
          <VendorsSlider />
        </div>
        <div className="">
          <div className="mb-4">
            <h2 className="font-bold text-[26px]">
              Enjoy planning your wedding
            </h2>
            <p className="text-lg font-medium text-[#4E4E4E] ">
              Start planning your wedding for free
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1  gap-16">
            <div className="border-3 rounded-[5px] border-[#9924e940] p-4 relative  ">
              <div className="max-w-[396px] space-y-3">
                <h3 className="text-brand-heading text-[22px] font-bold">
                  Invites & Papers
                </h3>
                <p className="text-brand-paragraph text-lg font-medium">
                  Get free samples of save the dates and invites before you
                  decide.
                </p>
                <Link
                  href={"/"}
                  className="text-brand underline flex items-center"
                >
                  Request free sample <BsArrowRight className="ms-3" />
                </Link>
              </div>
              <img
                src="./image 123.svg"
                alt="planning your wedding"
                className="absolute -end-6 top-6"
                width={150}
                height={177}
              />
            </div>

            <div className="border-3 rounded-[5px] border-[#9924e940] p-4 relative space-y-1 ">
              <div className="max-w-[396px] space-y-3">
                <h3 className="text-brand-heading text-[22px] font-bold">
                  Planning Tools
                </h3>
                <p className="text-brand-paragraph text-lg font-medium ">
                  All under control: Checklist, Budget Planner, Seating Chart
                  and much more!
                </p>
                <Link
                  href={"/"}
                  className="text-brand underline flex items-center"
                >
                  Discover our tools
                  <BsArrowRight className="ms-3" />
                </Link>
              </div>
              <img
                src="./image 123-1.svg"
                alt="planning your wedding"
                className="absolute -end-6 top-6"
                width={150}
                height={177}
              />
            </div>
          </div>
        </div>
        <TopVendor />
        <BlogsSlider />
        <Features />
        <Invites />
        <Destination />
      </div>
    </div>
  );
};

export default Home;
