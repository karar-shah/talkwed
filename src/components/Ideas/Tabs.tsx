import CustomSlider from "@/common/Slider/CustomSlider";
import Typography from "@/common/Typography";
import React from "react";
let list = [
  {
    title: "Planning Basics",
    image: "/ideas/tab1.svg",
  },
  {
    title: "Wedding Ceremony",
    image: "/ideas/tab2.svg",
  },
  {
    title: "Hair & Makeup",
    image: "/ideas/tab3.svg",
  },
  {
    title: "Destination Wedding",
    image: "/ideas/tab1.svg",
  },
  {
    title: "Wedding fashion",
    image: "/ideas/tab2.svg",
  },
  {
    title: "Destination Wedding",
    image: "/ideas/tab3.svg",
  },
];
const Tabs = () => {
  return (
    <CustomSlider slidesPerView={5} >
      {list?.map((item, index) => (
        <div
          key={index}
          className={`rounded relative w-full`}
          style={{ background: `url(${item.image})`, height: "80px", backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
        >
          <span className="bg-[#00000096] rounded z-0 absolute w-full h-full start-0"></span>
           <div className="flex items-center justify-center h-full relative z-10">
           <Typography component="h2" className="text-2xl text-white " title={item.title} />
           </div>
        </div>
      ))}
    </CustomSlider>
  );
};

export default Tabs;
