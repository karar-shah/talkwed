"use client";
import { useMemo, useState } from "react";
import Saved from "./Saved";
import Visits from "./Visits";
import Wall from "./Wall";

const tabs = [
  { id: "wall", label: "Wall", component: Wall },
  { id: "visits", label: "Visits", component: Visits },
  { id: "saved", label: "Saved", component: Saved },
];

const friends = [
  {
    id: 1,
    image: "/friends/f1.svg",
    title: "Cliodhna",
  },
  {
    id: 2,
    image: "/friends/f2.svg",
    title: "Nick",
  },
  {
    id: 3,
    image: "/friends/f3.svg",
    title: "Jennifer",
  },
];

const DetailsSection = () => {
  const [active, setActive] = useState("wall");

  const ActiveComponent = useMemo(() => {
    return tabs.find((tab) => tab.id === active)?.component || Wall;
  }, [active]);

  return (
    <div className="pb-6">
      <div className="border mb-6">
        <ul className="flex space-x-5 border-b pt-5 mx-2.5">
          {tabs.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => setActive(id)}
              className={`cursor-pointer text-brand-muted2 pb-4 ${
                active === id
                  ? "border-b-3 border-[#9924E9] font-semibold"
                  : "font-medium"
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
        <ActiveComponent />
      </div>
      {active === "wall" && (
        <div className="border pt-5 px-8 pb-10 flex items-center gap-4 flex-wrap ">
          {friends.map((friend) => (
            <div className="border px-5 pt-3 pb-4 text-center" key={friend.id}>
              <img src={friend.image} alt={friend.title} />
              <div className="pt-4 font-semibold text-[#353535]">
                {friend.title}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailsSection;
