import Button from "@/common/Button";
import ListHead from "@/common/ListHead";
import React from "react";
let list = [
  {
    image: "/destination1.svg",
    title: "Anguilla",
  },
  {
    image: "/destination2.svg",
    title: "Barbados",
  },
  {
    image: "/destination3.svg",
    title: "Bahamas",
  },
  {
    image: "/destination4.svg",
    title: "Antigua and Barbuda",
  },
];
const Destination = () => {
  return (
    <div>
      <ListHead
        title={`Plan your <span class="text-brand">destination</span> wedding.`}
        subTitle={
          "Wherever you choose to wed globally, Talkwed's international network of wedding professionals is ready to help you celebrate."
        }
      />
      <div className="grid md:grid-cols-4  sm:grid-cols-2  grid-cols-1 gap-4 ">
        {list.map((item, index) => (
          <div className="relative w-full" key={index}>
            <img
              src={item.image}
              alt="Wadding1"
              height={210}
              className="w-full"
            />
            <div className="absolute bg-[#ffffff6b] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center px-4 backdrop-blur-[5px] bottom-2 start-2 h-[56px] w-[95%] rounded-[5px] ">
              <p className="font-bold text-lg text-center w-full">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button
        title="Discover all destinations"
        href="/"
        arrow
        className="my-5 mx-auto"
      />
    </div>
  );
};

export default Destination;
