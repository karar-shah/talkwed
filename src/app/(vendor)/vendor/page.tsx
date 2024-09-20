"use client";

import TextWithLine from "@/common/TextWithLine";
import ProfileViewsChart from "@/components/ProfileViewsChart";
import AnalyticsCards from "./_components/AnalyticsCards";
import ClientFeedbacks from "./_components/ClientFeedbacks";
import CompleteStorefront from "./_components/CompleteStorefront";
import RecentMessages from "./_components/RecentMessages";

const page = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 pb-20">
      <h1 className="flex items-center space-x-2 text-[#3F3F3F] text-2xl font-bold pt-7 pb-11">
        <span>Hi, Smith! </span>
        <img src="/icons/image 112.svg" alt="hand icon" />
      </h1>
      <div className="pb-5">
        <TextWithLine text="Top Aggregates of Last 12 Months" />
      </div>
      <AnalyticsCards />
      <div className="mt-20 mb-5">
        <TextWithLine text="Analytics" />
      </div>
      <div className="flex flex-wrap -m-3">
        <div className="flex flex-col w-full lg:w-8/12 p-3">
          <ProfileViewsChart />
        </div>
        <div className="w-full lg:w-4/12 p-3">
         <CompleteStorefront />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3  ">
        <div className="w-full lg:w-5/12 p-3 flex flex-col flex-1">
          <RecentMessages />
        </div>
        <div className="w-full lg:w-7/12 p-3 ">
          <ClientFeedbacks />
        </div>
      </div>
    </div>
  );
};

export default page;
