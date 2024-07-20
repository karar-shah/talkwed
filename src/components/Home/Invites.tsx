import Button from "@/common/Button";
import ListHead from "@/common/ListHead";
import React from "react";
let list = [
  {
    image: "/invite1.svg",
    title: "Save the dates",
  },
  {
    image: "/invite2.svg",
    title: "Invitations",
  },
  {
    image: "/invite3.svg",
    title: "Ceremony & reception",
  },
  {
    image: "/invite4.svg",
    title: "Thank you’s",
  },
];
const Invites = () => {
  return (
    <div>
      <ListHead
        title={`Shop <span class="text-brand">invites</span> for wedding.`}
        subTitle={"Explore our invitation and paper collection."}
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
            <div className="absolute   bg-[#ffffff6b]  shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center px-4 backdrop-blur-[5px] bottom-2 start-2 h-[56px] w-[95%] rounded-[5px] ">
              <p className="font-bold text-lg text-center w-full">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button title="Explore more" href="/" arrow className="my-5 mx-auto" />
    </div>
  );
};

export default Invites;
