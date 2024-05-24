import Breadcrumb from "@/common/Breadcrumb";
import Search from "@/common/Search";
import React from "react";
import Articles from "./Articles";
import Container from "@/common/Container";
import Categories from "./Categories";
import Tabs from "./Tabs";
import Typography from "@/common/Typography";
import Plans from "./Plans";
let list = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Wedding ideas",
    link: "/ideas",
    active: true,
  },
];
const Ideas = () => {
  return (
    <div>
      <div className="gradient-bg">
        <div className="max-w-[1280px] mx-auto px-6">
          <Breadcrumb list={list} />

          <div className="md:grid grid-cols-2  gap-20 bg-gradient-to-b from-[rgba(255, 255, 255, 0.23)] to-purple-900  py-12 pb-16">
            <div className="space-y-4">
              <h1 className="text-[50px] font-bold">
                Unlock the latest&nbsp;
                <span className="text-brand">trends</span>&nbsp; and&nbsp;
                <span className="text-brand">ideas</span>&nbsp;for your wedding.
              </h1>

              <Search placeholder={"Search wedding ideas"} />
            </div>
            <div className=" ">
              <div className="flex items-center gap-2 w-full">
                <img src="/ideas/home1.svg" alt="ideas for your wedding" />
                <img src="/ideas/home2.svg" alt="ideas for your wedding" />
                <img src="/ideas/home3.svg" alt="ideas for your wedding" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="py-20 space-y-20">
        <Tabs />
        <div className="grid grid-cols-7 gap-16">
          <div className="col-span-5">
            <Articles />
          </div>
          <div className="col-span-2 ">
            <Categories />
          </div>
        </div>
        <hr />
        <Plans />
      </Container>
    </div>
  );
};

export default Ideas;
