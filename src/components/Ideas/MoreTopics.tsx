import CustomSlider from "@/common/Slider/CustomSlider";
import React from "react";

let list = [
  {
    image: "/vendor21.svg",
    title: "TRENDS & TIPS",
    heading: "2022 Wedding Trends That Are Actually Doable",
    para: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    date: "By Jack S, updated on December 29,2023",
  },
  {
    image: "/vendor21.svg",
    title: "TRENDS & TIPS",
    heading: "2022 Wedding Trends That Are Actually Doable",
    para: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    date: "By Jack S, updated on December 29,2023",
  },
  {
    image: "/vendor21.svg",
    title: "TRENDS & TIPS",
    heading: "2022 Wedding Trends That Are Actually Doable",
    para: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    date: "By Jack S, updated on December 29,2023",
  },
  {
    image: "/vendor21.svg",
    title: "TRENDS & TIPS",
    heading: "2022 Wedding Trends That Are Actually Doable",
    para: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    date: "By Jack S, updated on December 29,2023",
  },
  {
    image: "/vendor21.svg",
    title: "TRENDS & TIPS",
    heading: "2022 Wedding Trends That Are Actually Doable",
    para: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    date: "By Jack S, updated on December 29,2023",
  },
];
const MoreTopics = () => {
  return (
    <section>
      <h1 className="text-brand-heading text-[26px] font-bold mb-4">
        More Topics you may interested in
      </h1>
      <CustomSlider slidesPerView={3}>
        {list?.map((item, index) => (
          <div key={index} className="bg-white shadow-lg p-5 rounded w-full">
            <img
              src={item.image}
              alt="Top rated vendor"
              height={220}
              className="max-w-[367px] rounded max-h-[220px]"
            />
            <div className="space-y-1 pt-2">
              <div className="text-start">
                <h4 className=" text-sm truncate font-light">{item.title}</h4>

                <h4 className="text-[16px] text-bold truncate text-[#2E2E2E] my-2">
                  {item.heading}
                </h4>
                <p className="text-sm my-2 font-light">{item.para}</p>
                <p className="text-xs my-2 font-light">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </CustomSlider>
    </section>
  );
};

export default MoreTopics;
