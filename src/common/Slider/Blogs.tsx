import React from "react";
import ListHead from "../ListHead";
let list = [
  {
    category: "Rings & Jewelry",
    image: "/blog1.svg",
    title: "The prettiest bridal earrings for classy look ",
  },
  {
    category: "Bride & Bridesmaids",
    image: "/blog2.svg",
    title: "Best dresses for wedding day and more",
  },
  {
    category: "Wedding Guests",
    image: "/blog3.svg",
    title: "Stunning dresses to wear to your next summer wedding",
  },
  {
    category: "Hair & Makeup",
    image: "/blog4.svg",
    title: "Pretty hair styles that you would love to have on your..",
  },
];
const Blogs = () => {
  return (
    <>
      <div>
        <ListHead
          title={`Browse through <span class="text-brand">blogs</span> and inspiration.`}
          subTitle={
            "Gain inspiration and insights from the latest trends and expert advice provided by our wedding professionals."
          }
        />
        <div className="grid grid-cols-4 gap-4 ">
          {list.map((item, index) => (
            <div className="shadow rounded w-full h-full bg-white" key={index}>
              <img
                src={item.image}
                alt="Wadding1"
                height={131}
                className="w-full rounded-t"
              />
              <div className="px-2 py-4">
                <p className="text-brand-muted text-base font-medium">
                  {item.category}
                </p>
                <p className="font-semibold text-brand-muted">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
