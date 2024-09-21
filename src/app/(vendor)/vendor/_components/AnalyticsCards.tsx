
const analyticsList = [
  {
    title: "Leads Received",
    number: 0,
    analyticName: "Leads",
    icon: "/icons/leads-icon.svg",
  },
  {
    title: "Total Reviews",
    number: 12,
    analyticName: "Reviews",
    icon: "/icons/reviews-icon.svg",
  },
  {
    title: "Rating",
    number: 4.5,
    analyticName: "Stars",
    icon: "/icons/ratings-icon.svg",
  },
  {
    title: "Profile Views",
    number: 0,
    analyticName: "Views",
    icon: "/icons/views-icon.svg",
  },
];
const AnalyticsCards = () => {
  return (
    <div className="-m-3 flex flex-wrap">
      {analyticsList.map((analytic) => (
        <div
          key={analytic.title}
          className="w-full sm:w-6/12 xl:w-3/12 p-3 2xl:flex 2xl:flex-col 2xl:flex-1"
        >
          <AnalyticsCard analytic={analytic} />
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCards;

const AnalyticsCard = ({ analytic }: any) => {
  return (
    <div className="flex flex-col flex-1 border border-[#dadada] rounded-md">
      <div className="flex rounded-md items-center space-x-5 py-5 px-8">
        <img src={analytic.icon} alt="message-icon" className="size-[50px]" />
        <div>
          <p className="text-[#656565] font-medium">{analytic.title}</p>
          <p className="font-semibold text-[#383838]">
            <span className="font-bold text-3xl mr-1.5">{analytic.number}</span>
            {analytic.analyticName}
          </p>
        </div>
      </div>
    </div>
  );
};
