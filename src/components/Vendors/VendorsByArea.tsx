import CustomSlider from "@/common/Slider/CustomSlider";
import React from "react";
let list = [
  {
    area: "New York City",
    salons: 330,
    shops: 1238,
    officiants: 199,
  },
  {
    area: "Los Angeles",
    salons: 330,
    shops: 1238,
    officiants: 199,
  },
  {
    area: "Chicago",
    salons: 330,
    shops: 1238,
    officiants: 199,
  },
  {
    area: "Houston",
    salons: 330,
    shops: 1238,
    officiants: 199,
  },
  {
    area: "Phoenix",
    salons: 330,
    shops: 1238,
    officiants: 199,
  },
];
const VendorsByArea = () => {
  return (
    <section>
      <h1 className="text-brand-heading text-[26px] font-bold mb-4">
        Discover the vendors by area
      </h1>
      <CustomSlider slidesPerView={5} spaceBetween={10}>
        {list.map((item, index) => (
          <div className="bg-white shadow-lg rounded w-full p-4 py-6" key={index}>
            <p className=" font-medium text-brand-heading text-[22px] text-start mb-2">
              {item.area}
            </p>
            <div className="text-[#858585] text-base font-medium  text-start">
              <p>{item.salons}&nbsp;beauty salons</p>
              <p>{item.shops}&nbsp;bridal shops</p>
              <p>{item.officiants}&nbsp;officiants</p>
            </div>
          </div>
        ))}
      </CustomSlider>
    </section>
  );
};

export default VendorsByArea;
