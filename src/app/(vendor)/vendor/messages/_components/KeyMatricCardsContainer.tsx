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
    title: "Response Time",
    icon: "/icons/image 111 (3).svg",
    number: 0,
    text: "views",
  },
];
const KeyMatricCardsContainer = () => {
  return (
    <div>
    <h2 className="font-bold text-2xl text-[#444444] mb-4">
      Key Metrics
    </h2>
    <div className="flex flex-wrap -m-2.5 lg:pr-6">
      {keyMatricsList.map((item) => (
        <div
          key={item.title}
          className="w-full sm:w-6/12 xl:w-3/12 p-2.5"
        >
          <KeyMatricCard item={item} key={item} />
        </div>
      ))}
    </div>
  </div>
  )
}


const KeyMatricCard = ({ item }: any) => {
  return (
    <div className="border border-[#dadada] rounded-md">
      <div className="flex items-center space-x-5 py-5 px-4">
        <img src={item.icon} alt="message-icon" className="size-[50px]" />
        <div className="">
          <p className="text-[#656565] font-medium whitespace-nowrap">{item.title}</p>
          <p className="font-semibold text-[#383838]">
            <span className="font-bold text-3xl mr-1.5">{item.number}</span>
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default KeyMatricCardsContainer

