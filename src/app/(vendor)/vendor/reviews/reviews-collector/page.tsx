"use client";
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import { LuInfo } from "react-icons/lu";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";
const reviewCollectorList = [
  {
    title: "Total Reviews",
    number: 12,
    analyticsName: "Reviews",
    icon: "/icons/reviews-icon.svg",
  },
  {
    title: "Request Sent",
    number: 4.5,
    analyticsName: "Stars",
    icon: "/icons/requestSent-icon.svg",
  },
  {
    title: "Not Replied to",
    number: 0,
    analyticsName: "Views",
    icon: "/icons/notReplied-icon.svg",
  },
  {
    title: "Without photo",
    number: 0,
    analyticsName: "Views",
    icon: "/icons/noCamera-icon.svg",
  },
];
const recipientList = [{ key: "recepient1", label: "recepient1" }];
const page = () => {
  return (
    <div className="p-6 lg:p-8">
      <h2 className="font-bold text-2xl text-[#444444] mb-4">
        Review Collector
      </h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap -m-3 ">
          <div className="w-full md:w-3/12 p-3 ">
            <div className="w-full border border-[#DADADA] grow-0 rounded-md pt-3.5 px-5 pb-6">
              <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-5xl text-[#525252] mb-1">
                  4.5
                  <span className="text-[#525252] text-base font-normal ml-4">
                    out of <span className="text-lg font-medium">5.0</span>
                  </span>
                </p>
                <p className="txet-[#505050] mb-5">Very Good</p>
                <Rating rating={4.5} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12 p-3 flex flex-col space-y-5">
            <div className="w-full flex flex-wrap space-y-5 lg:space-y-0 lg:space-x-5 ">
              {reviewCollectorList.map((item) => (
                <div
                  key={item.title}
                  className="w-full md:w-3/12  flex flex-col flex-1"
                >
                  <AnalyticsCard item={item} />
                </div>
              ))}
            </div>
            <div className="border border-[#3AC3D6] bg-[#ebf9fb] rounded-[4px] flex px-2.5 py-2 space-x-2">
              <div className="size-6">
                <LuInfo size={24} color="#3AC3D6" />
              </div>

              <p className="text-sm text-[#686868]">
                You cannot request reviews until your business is validated.
                Ensure you add high-quality photos and a detailed description to
                your Storefront for it to be published.
              </p>
            </div>
            <div className="border border-[#DADADA] px-4 lg:px-8 pt-6 pb-14 rounded-md">
              <p className="font-bold text-xl text-[#444444]">
                Send Review Request
              </p>
              <div className="lg:w-7/12 flex flex-col space-y-9 ">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[#6C6C6C]  font-semibold mb-1"
                  >
                    Recipient{" "}
                    <span className="font-medium text-sm">
                      (Only who booked you)
                    </span>
                  </label>
                  <Select
                    items={recipientList}
                    name="personName"
                    variant="bordered"
                    placeholder="Select a recipient"
                    className={"mt-2"}
                    classNames={{
                      label: "text-base max-md:text-sm",
                      trigger:
                        "border border-[#BFBFBF] rounded-md py-2 px-5 h-12",
                    }}
                  >
                    {(year) => (
                      <SelectItem key={year.key}>{year.label}</SelectItem>
                    )}
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-[#6C6C6C] font-semibold mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    variant="bordered"
                    placeholder="Enter text"
                    type="text"
                    className={"my-2 text-brand-heading "}
                    classNames={{
                      inputWrapper:
                        "input-wrapper input-border border border-[#bfbfbf] px-3 py-2 min-h-60 flex items-start",
                      input: "input text-base max-md:text-sm ",
                    }}
                  />
                </div>
              </div>
              <p className="text-sm text-[#6F6F6F]">
                Note: a link to write a review directly on your Storefront will
                be included in the email.
              </p>
              <Button
                variant="solid"
                size="lg"
                className="text-white text-lg bg-brand rounded-lg mt-7 mb-15"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Rating = ({ rating }: any) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>
            {i < Math.floor(rating) ? (
              <MdStar color="#FBBC05" className="size-9" />
            ) : i === Math.floor(rating) && rating % 1 >= 0.5 ? (
              <span className="half-star">
                <MdStarHalf color="#FBBC05" className="size-9" />
              </span>
            ) : (
              <MdStarBorder color="#FBBC05" className="size-9" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
const AnalyticsCard = ({ item }: any) => {
  return (
    <div className="flex flex-col flex-1 border border-[#dadada] rounded-md ">
      <div className=" flex items-center space-x-5 py-4 px-7">
        <img src={item.icon} alt="message-icon" className="size-[50px]" />
        <div className="">
          <p className="text-[#656565] font-medium whitespace-nowrap">
            {item.title}
          </p>
          <p className="font-semibold text-[#383838]">
            <span className="font-bold text-3xl mr-1.5">{item.number}</span>
            {item.analyticsName}
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
