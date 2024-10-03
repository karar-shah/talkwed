import { Checkbox } from "@nextui-org/react";
import { GoDotFill } from "react-icons/go";

export const FilterList = () => {
  const filterItems = [
    { name: "Unread", dot: "white" },
    { name: "Read", dot: "white" },
    { name: "Pending", dot: "#EDAB00" },
    { name: "Replied", dot: "#0290CD" },
    { name: "Booked", dot: "#04B100" },
    { name: "Reported", dot: "#FE454F" },
  ];
  return (
    <div className="flex flex-col divide-y-1 divide-[#EAEAEA]">
      {filterItems.map((item) => (
        <div
          key={item.name}
          className="flex py-3 px-3 space-x-1.5  justify-between items-center"
        >
          <div className="flex space-x-2.5  items-center">
            <Checkbox
              radius="none"
              color="secondary"
              size="sm"
              classNames={{
                wrapper: "rounded-[3px]",
              }}
            />
            <p className="">{item.name}</p>
          </div>
          <GoDotFill color={item.dot} />
        </div>
      ))}
    </div>
  );
};
