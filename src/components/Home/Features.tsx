import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
let list = [
  {
    title: "Discover the Best Wedding Vendors Nationwide",
    paragraph:
      "Find the perfect wedding venue, photographer, DJ, and planner with our extensive directory and millions of trusted reviews.",
  },
  {
    title: "Effortless Wedding Planning Tools at Your Fingertips",
    paragraph:
      "Stay organized from start to finish with our easy-to-use wedding planning app and essential tools.",
  },
  {
    title: "Unlock Wedding Inspiration and Ideas Galore",
    paragraph:
      "Get expert advice, explore real weddings, and dive into the latest trends in dresses and hairstyles.",
  },
  {
    title: "Join Our Vibrant Wedding Community",
    paragraph:
      "Connect with engaged couples, share experiences, and seek advice in our active forums and local groups.",
  },
];
const Features = () => {
  return (
    <div className="border-gradient relative py-9 lg:grid grid-cols-2 gap-16">
      <div>
        <h2 className="text-brand-dark font-bold text-[26px] ">
          Essential <span className="text-brand">Features</span> of TalkWed
        </h2>
        <div className="space-y-3 my-4 ">
          {list?.map((item, index) => (
            <div key={index}>
              <h4 className="text-brand-muted font-bold text-[22px]">
                {item.title}
              </h4>
              <p className="text-brand-muted2 text-lg font-medium">
                {" "}
                {item.paragraph}
              </p>
            </div>
          ))}
          <Link
            href={"/"}
            className="text-brand border border-brand rounded p-2 flex items-center w-fit px-3"
          >
            Join us now <BsArrowRight className="ms-3" />
          </Link>
        </div>
      </div>

      <div className="absolute  bottom-12 -end-6  lg:block hidden">
        <div className="grid grid-cols-2 grid-rows-3 gap-4">
          <div className="ms-auto">
            <img
              src="./feature1.svg"
              alt="Essential Features of TalkWed"
              width={166}
              className="rounded h-full "
            />
          </div>
          <div className="row-span-3">
            <img
              src="./Features.svg"
              alt="Essential Features of TalkWed"
              width={344}
              height={354}
              className="rounded w-full h-full object-cover"
            />
          </div>
          <div className="ms-auto">
            <img
              src="./feature3.svg"
              alt="Essential Features of TalkWed"
              width={166}
              height={106}
              className="rounded  -end-4 bottom-0"
            />
          </div>
          <div className="ms-auto">
            <img
              src="./feature3.svg"
              alt="Essential Features of TalkWed"
              width={166}
              height={106}
              className="rounded  -end-4 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
