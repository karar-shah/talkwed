import Breadcrumb from "@/common/Breadcrumb";
import Container from "@/common/Container";
import SearchForm from "@/common/SearchForm";
import React from "react";
import WeddingVenues from "../Venues/WeddingVenues";
import Categories from "../Ideas/Categories";
import { BsSend } from "react-icons/bs";
import Discussions from "./Discussions";

let list = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Forms",
    link: "/forms",
    active: true,
  },
];
const Forms = () => {
  return (
    <div>
      <div className="gradient-bg">
        <div className="max-w-[1280px] mx-auto px-6 leading-normal">
          <Breadcrumb list={list} />

          <div className="md:grid grid-cols-2  gap-20 bg-gradient-to-b from-[rgba(255, 255, 255, 0.23)] to-purple-900  py-12 pb-16">
            <div className="relative space-y-4">
              <h1 className="text-[50px] font-bold">
                <span className="text-brand">Engage</span>&nbsp; with couples,
                find answers, and get&nbsp;
                <span className="text-brand">support</span>
              </h1>

              <div className="absolute -bottom-4">
                <SearchForm
                  searchPlaceholder="Wedding Venues"
                  locationPlaceholder="New York"
                />
              </div>
            </div>
            <div className=" ">
              <div className="flex items-center gap-2 w-full">
                <img
                  src="/venues/venue_home1.svg"
                  alt="venues for your wedding"
                />
                <img
                  src="/venues/venue_home2.svg"
                  alt="venues for your wedding"
                />
                <img
                  src="/venues/venue_home3.svg"
                  alt="venues for your wedding"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="py-16 space-y-16">
        <div className="grid grid-cols-7 gap-16">
          <div className="col-span-5 space-y-4">
            <h3 className="text-lg font-semibold text-[#353535] ">
              Start a discussions
            </h3>
            <div className="border rounded p-4 w-full text-xl font-medium text-[#848484] flex items-center justify-between cursor-pointer">
              <div>Write your post...</div>
              <div>
                <BsSend />
              </div>
            </div>
            <Discussions />
          </div>
          <div className="col-span-2 ">
            <Categories />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Forms;
