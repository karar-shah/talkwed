import Typography from "@/common/Typography";
import React from "react";

let list = [
  {
    title: "Checklist",
    image: "/ideas/plan1.svg",
  },
  {
    title: "Guest list",
    image: "/ideas/plan2.svg",
  },
  {
    title: "Seating chart",
    image: "/ideas/plan3.svg",
  },
  {
    title: "Budget",
    image: "/ideas/plan4.svg",
  },
];

const Plans = () => {
  return (
    <div >
      <Typography
        component="h2"
        className="text-2xl mb-8"
        title="Plan your unique wedding"
      />
      <div className="grid md:grid-cols-4 gap-6">
        {list?.map((item, index) => (
          <div
            className="border border-[#9924e94d]  bg-[#9924e908] flex items-center p-2 rounded"
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
              width={73}
              height={80}
              className="rounded me-3"
            />
            <Typography component="h3" title={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
