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
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.23) 0%, #6B14A6 387.95%)",
        }}
      >
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
              <SearchForm />
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
      <div className="max-w-[1280px] mx-auto p-4 space-y-16 mt-16">
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
          <div className="grid grid-cols-2 gap-16">
            <div className="border-3 rounded-[5px] border-[#9924e940] p-4 relative  ">
            <div className="max-w-[396px] space-y-3">
            <h3 className="text-brand-heading text-[22px] font-bold">
                Invites & Papers
              </h3>
              <p className="text-brand-paragraph text-lg font-medium">
                Get free samples of save the dates and invites before you
                decide.
              </p>
              <Link href={'/'} className="text-brand underline flex items-center">Request free sample <BsArrowRight className="ms-3"/></Link>

            </div>
              <img src="./image 123.svg" alt="planning your wedding"  className="absolute -end-6 top-6" width={150} height={177}/>
            </div>
           
            <div className="border-3 rounded-[5px] border-[#9924e940] p-4 relative space-y-1 ">
            <div className="max-w-[396px] space-y-3">
            <h3 className="text-brand-heading text-[22px] font-bold">
            Planning Tools
              </h3>
              <p className="text-brand-paragraph text-lg font-medium ">
              All under control: Checklist, Budget Planner, Seating Chart and much more!
              </p>
              <Link href={'/'} className="text-brand underline flex items-center">Discover our tools<BsArrowRight className="ms-3"/></Link>

            </div>
              <img src="./image 123-1.svg" alt="planning your wedding"  className="absolute -end-6 top-6" width={150} height={177}/>
            </div>
          </div>
        </div>
        <TopVendor/>
        <div className="">
          <BlogsSlider />
        </div>
        <Features/>
        <Invites/>
        <Destination/>
      </div>
    </div>
  );
};

export default Home;
