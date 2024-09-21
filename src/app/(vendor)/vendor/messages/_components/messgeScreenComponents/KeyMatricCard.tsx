export const KeyMatricCard = ({ item }: any) => {
  return (
    <div className="flex flex-col flex-1 border border-[#dadada] rounded-md mr-4">
      <div className=" flex items-center space-x-5 py-5 px-4">
        <img src={item.icon} alt="message-icon" className="size-[50px]" />
        <div className="">
          <p className="text-[#656565] font-medium">{item.title}</p>
          <p className="font-semibold text-[#383838]">
            <span className="font-bold text-3xl mr-1.5">{item.number}</span>
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};
