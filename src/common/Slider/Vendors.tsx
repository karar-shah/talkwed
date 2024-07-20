import React from "react";
import ListHead from "../ListHead";
let list = [
  {
    icon: "/vendors/1.svg",
    image: "/Wadding1.png",
    title: "Wedding Venue",
  },
  {
    icon: "/vendors/2.svg",
    image: "/vendor1.svg",
    title: "Wedding Photographers",
  },
  {
    icon: "/vendors/3.svg",
    image: "/vendor2.svg",
    title: "Wedding Caterers",
  },
  {
    icon: "/vendors/4.svg",
    image: "/vendor3.svg",
    title: "Wedding Attire",
  },
];
const Vendors = () => {
  return (
    <div>
      <ListHead
        title={`Discover all the <span class="text-brand">vendors</span> required for your event.`}
        subTitle={
          "Reach out to seasoned wedding professionals to transform your dream into reality."
        }
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 ">
        {list.map((item, index) => (
          <div className="relative w-full" key={index}>
            <img
              src={item.image}
              alt="Wadding1"
              height={210}
              className="w-full"
            />
            <div className="absolute  bg-[#ffffff6b] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center px-4 backdrop-blur-[5px] bottom-2 start-2 h-[56px] w-[95%] rounded-[5px] ">
              <img
                src={item.icon}
                alt="Wadding1"
                height={32}
                width={32}
                className="me-2"
              />

              <p className="font-bold text-lg">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
