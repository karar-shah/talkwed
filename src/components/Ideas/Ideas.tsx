"use client";
import Breadcrumb from "@/common/Breadcrumb";
import Search from "@/common/Search";
import React, { useState } from "react";
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
let filterButtons = [
  {
    title: "All",
    results: 851,
  },
  {
    title: "Honeymoon tips",
    results: 76,
  },
  {
    title: "Budget",
    results: 50,
  },
  {
    title: "Legal",
    results: 10,
  },
  {
    title: "Trends",
    results: 440,
  },
  {
    title: "Etiquette",
    results: 100,
  },
  {
    title: "Proposals",
    results: 139,
  },
];
const Ideas = () => {
  const [activeFilter, setActiveFilter] = useState(filterButtons[0].title);
  const handleFilter = (title: string) => [setActiveFilter(title)];
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
        <div className="flex gap-8">
          {filterButtons.map((fltrBtn) => (
            <div
              className={`p-2 border-medium rounded-md ${
                activeFilter === fltrBtn.title
                  ? "bg-purple-200 border-purple-300 text-purple-700"
                  : ""
              }`}
            >
              <button type="button" onClick={() => handleFilter(fltrBtn.title)}>
                {fltrBtn.title}&nbsp;({fltrBtn.results})
              </button>
            </div>
          ))}
        </div>
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
