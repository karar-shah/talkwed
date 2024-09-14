"use client";

import Button from "@/common/Button";
import ProfileViewsChart from "@/components/ProfileViewsChart";
import { Progress } from "@nextui-org/react";

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
const page = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <h1 className="flex items-center space-x-2 text-[#3F3F3F] text-2xl font-bold pt-7 pb-11">
        <span>Hi, Smith! </span>
        <img src="/icons/image 112.svg" alt="hand icon" />
      </h1>
      <div className="pb-5">
        <TextWithLine text="Top Aggregates of Last 12 Months" />
      </div>
      <div className="-m-3 flex flex-wrap">
        {analyticsList.map((analytic) => (
          <div
            key={analytic.title}
            className="md:w-3/12 p-3 flex flex-col flex-1"
          >
            <AnalyticsCard analytic={analytic} />
          </div>
        ))}
      </div>
      <div className="mt-20 mb-5">
        <TextWithLine text="Analytics" />
      </div>
      <div className="flex flex-wrap -m-3">
        <div className="w-8/12 p-3">
          <ProfileViewsChart />
        </div>
        <div className="w-4/12 p-3">
          <div className="border border-[#DADADA] w-full rounded-md flex flex-col flex-1">
            <div className="pt-7 pb-10 px-5">
              <h2 className="text-xl font-medium text-[#444444]">
                Complete your Storefront
              </h2>
              <p className="text-[#575757]">
                You&apos;re just 3 steps away from completing your storefront.
              </p>
              <p className="flex justify-end text-[#575757] mt-5">10%</p>
              <Progress
              aria-label="Loading..."
              color="secondary"
              value={5}
              className=""
              size="md"
            />
              <div className="flex flex-col justify-center items-center space-y-7 mt-9">
                <img
                  src="/icons/storefront-icon.svg"
                  alt="storefront-icon"
                  className="size-[100px]"
                />
                <Button
                  btn={true}
                  title="Complete Storefront"
                  className="bg-white text-[#6B14A6] border border-[#5C148C] py-3.5 px-[18px] text-base font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3  ">
        <div className="w-full lg:w-5/12 p-3">
          <div className="  border border-[#DADADA] px-6 pt-7 pb-[170px]  rounded-[10px]">
            <div className="flex items-center justify-between">
              <p className="text-xl text-[#444444]">Recent Messages</p>
              <Button
                btn={false}
                title="View all"
                className="border-none underline"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-3.5 mt-20">
              <img
                src="/icons/leads-icon.svg"
                alt="leads-icon"
                className="size-24"
              />
              <p className="text-lg text-[#616161]">
                You haven’t received any message yet
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 p-3">
          <div className=" pt-7 pl-8 border border-[#DADADA] rounded-[10px] ">
            <p className="text-[#444444] text-xl font-medium">
              Client Feedbacks
            </p>
            <div className="flex flex-col items-center justify-center text-center px-[87px] mb-24 mt-[87px]">
              <img
                src="/icons/feedback-icon.svg"
                alt="feedback-icon"
                className="size-[100px] mb-3.5"
              />
              <p className="text-lg text-[#616161] mb-1.5">
                You haven’t received any reviews yet
              </p>
              <p className="font-light text-[#8C8C8C]">
                Reviews play a crucial role when clients are choosing a vendor.
                Encourage your clients to leave reviews and provide feedback on
                your services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const TextWithLine = ({ text }: { text: string }) => (
  <div className="flex items-center w-full">
    <p className="text-[#7C7C7C] font-semibold whitespace-nowrap mr-5">
      {text}
    </p>
    <div className="flex-grow">
      <div className="border-t border-[#B7B6B6] w-full"></div>
    </div>
  </div>
);

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
