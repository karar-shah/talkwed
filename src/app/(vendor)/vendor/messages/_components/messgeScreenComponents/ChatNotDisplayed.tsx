import { KeyMatricCard } from "./KeyMatricCard";

export const ChatsNotDisplayed = () => {
  const keyMatricsList = [
    {
      title: "Replied",
      icon: "/icons/image 111.svg",
      number: 0,
      text: "Replied",
    },
    {
      title: "Booked",
      icon: "/icons/image 111 (1).svg",
      number: 0,
      text: "Booked",
    },
    {
      title: "Discarded",
      icon: "/icons/image 111 (2).svg",
      number: 0,
      text: "Discarded",
    },
    {
      title: "Avg. Response Time",
      icon: "/icons/image 111 (3).svg",
      number: 0,
      text: "views",
    },
  ];
  return (
    <div className="pl-8 pt-5 pr-2 max-lg:flex max-lg:flex-col-reverse">
      <h2 className="font-bold text-2xl text-[#444444] mb-4">Key Metrics</h2>
      <div className=" flex flex-wrap">
        {keyMatricsList.map((item) => (
          <div key={item.title} className=" flex flex-col flex-1">
            <KeyMatricCard item={item} key={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center py-28 lg:w-1/2 text-center">
          <img src="/icons/image 135(1).svg" alt="" />
          <p className="font-bold text-lg text-[#464646]">
            Click on a chat to view it
          </p>
          <p className="font-medium text-[#6A6A6A]">
            Here you can send and receive messages from vendors, venue and
            wedding forum members
          </p>
        </div>
      </div>
    </div>
  );
};
