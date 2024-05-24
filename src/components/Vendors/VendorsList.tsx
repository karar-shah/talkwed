import CustomSlider from "@/common/Slider/CustomSlider";
import React from "react";
let list = [
  {
    image: "/vendors/vendors31.svg",
    title: "Wedding Cake",
    vendors: 1238,
  },
  {
    image: "/vendors/vendors32.svg",
    title: "Photography",
    vendors: 1238,
  },
  {
    image: "/vendors/vendors33.svg",
    title: "Catering",
    vendors: 1238,
  },
  {
    image: "/vendors/vendors34.svg",
    title: "Band",
    vendors: 1238,
  },
  {
    image: "/vendors/vendors35.svg",
    title: "Wedding Attire",
    vendors: 1238,
  },
];
const VendorsList = () => {
  return (
    <section>
      <h1 className="text-brand-heading text-[26px] font-bold mb-4">
        Discover the vendors by category
      </h1>
      <CustomSlider slidesPerView={5} spaceBetween={10}>
        {list.map((item, index) => (
          <div className="relative w-full" key={index}>
            <img
              src={item.image}
              alt="Wadding1"
              height={210}
              className="w-full"
            />
            <div className="absolute    bg-[#ffffff6b] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center px-4 backdrop-blur-[5px] bottom-2 start-2 h-[56px] w-[95%] rounded-[5px] ">
              <div>
                <p className=" font-bold text-lg text-start">{item.title}</p>
                <p className="font-semibold text-sm  text-start">
                  ({item.vendors} vendors)
                </p>
              </div>
            </div>
          </div>
        ))}
      </CustomSlider>
    </section>
  );
};

export default VendorsList;
