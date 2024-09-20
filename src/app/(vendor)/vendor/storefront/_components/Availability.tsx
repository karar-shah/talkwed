"use client";
import { Button, cn, Select, SelectItem, Switch } from "@nextui-org/react";
import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
const bookingsList = [
  {
    title: "Bookings this month",
    number: 0,
    icon: "/icons/monthBooking-icon.svg",
  },
  {
    title: "Today's Booking",
    number: 0,
    icon: "/icons/dayBooking-icon.svg",
  },
  {
    title: "Bookings this week",
    number: 0,
    icon: "/icons/weekBooking-icon.svg",
  },
];
const years = [
  { key: "2024", label: "2024" },
  { key: "2025", label: "2025" },
  { key: "2026", label: "2026" },
];
const months = [
  { key: "january", label: "january" },
  { key: "february", label: "february" },
  { key: "march", label: "march" },
  { key: "april", label: "april" },
  { key: "may", label: "may" },
  { key: "june", label: "june" },
  { key: "july", label: "july" },
  { key: "august", label: "august" },
  { key: "september", label: "september" },
  { key: "october", label: "october" },
  { key: "november", label: "november" },
  { key: "december", label: "december" },
];
const Availability = () => {
  return (
    <div className="flex flex-col">
      <AvailabilityHeader />
      <BookingCardsDiv />

      <FilterButtons />
      <div className="border border-[#DADADA] rounded-md flex flex-col divide-y-1 divide-[#CBCBCB] ">
        <WeekCard week="1" />
        <AvailabilityCard date="1st June" day="(Sat)" />
        <AvailabilityCard date="2nd June" day="(Sun)" />
        <WeekCard week="2" />
        <AvailabilityCard date="3rd June" day="(Mon)" />
        <AvailabilityCard date="4th June" day="(Tue)" />
        <AvailabilityCard date="5th June" day="(Wed)" />
        <AvailabilityCard date="6th June" day="(Thu)" />
        <AvailabilityCard date="7th June" day="(Fri)" />
        <AvailabilityCard date="8th June" day="(Sat)" />
        <AvailabilityCard date="9th June" day="(Sun)" />
      </div>
    </div>
  );
};

export default Availability;

// w-full md:w-3/12 p-3
const BookingCard = ({ booking }: any) => {
  return (
    <div className="flex flex-col flex-1 border border-[#dadada] rounded-md">
      <div className=" flex items-center space-x-5 py-5 px-8">
        <img src={booking.icon} alt="message-icon" className="max-w-20" />
        <div className="">
          <p className="text-[#656565] font-medium whitespace-nowrap">{booking.title}</p>
          <p className="font-semibold text-[#383838]">
            <span className="font-bold text-3xl mr-1.5">{booking.number}</span>
            Bookings
          </p>
        </div>
      </div>
    </div>
  );
};
const AvailabilityCard = ({ date, day }: any) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex  items-center ">
      <div className="text-center  w-3/12 lg:w-2/12">
        <p className="font-semibold text-lg text-[#5A5A5A]">
          {date} <span className="font-medium">{day}</span>
        </p>
      </div>
      <div className="w-px h-[77px] bg-[#D3D3D3]"></div>
      <div className="flex  justify-between w-9/12 lg:w-10/12 pl-4 pr-7">
        <div className=" flex space-x-2.5 items-center">
          <FiPlusCircle color={isOn ? "#6B14A6" : "#676767"} className="size-[22px]" />
          <p className={`${isOn ? "text-[#6B14A6]" : "text-[#676767]" } text-lg font-semibold`}>Add Event</p>
        </div>
        <div className="flex lg:space-x-20 items-center">
          <Switch
            checked={isOn}
            onChange={(e) => setIsOn(e.target.checked)}
            thumbIcon={isOn ? <>ON</> : <>OFF</>}
            size="lg"
            classNames={{
              base: cn(""),
              wrapper:
                "w-[73px] bg-[#F1F1F1] group-data-[selected=true]:bg-[#F1F1F1]",
              thumb: cn(
                "w-10 group-data-[selected=true]:w-10",
                "bg-[#818181] text-white",
                "group-data-[selected=true]:bg-[#9924E9]"
              ),
            }}
          ></Switch>
          <IoEllipsisVertical />
        </div>
      </div>
    </div>
  );
};

const AvailabilityHeader = () => {
  return (
    <div className="flex justify-between mb-5">
      <p className="font-bold text-2xl text-[#444444] mb-9">Availability</p>
      <Button
        variant="solid"
        size="lg"
        className="bg-brand text-white rounded-md  font-medium text-lg "
      >
        Set Availability
      </Button>
    </div>
  );
};
const WeekCard = ({ week }: any) => {
  return (
    <div className="bg-[#9924E908] pb-6 pt-5 px-4 lg:pl-8 flex justify-between">
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        <p className="font-bold text-lg text-[#4F4F4F] text-nowrap">Week {week}</p>
        <p className="font-medium text-[#6C6C6C]">(27th May - 2nd June)</p>
      </div>
      <p className="font-medium lg:mr-28 text-[#4F4F4F]">Availability</p>
    </div>
  );
};
const FilterButtons = () => {
  return (
    <div className="flex justify-between items-end mb-3 flex-wrap">
      <div className=" flex  justify-start space-x-2.5 mt-10">
        <Button
          startContent={<BiFilterAlt className="size-3.5" />}
          variant="bordered"
          radius="sm"
          className="items-center  flex  bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
        >
          Filter
        </Button>
        <Select
          items={years}
          name="dealType"
          variant="bordered"
          placeholder="2024"
          className="w-24"
          classNames={{
            label: "text-base max-md:text-sm",
            trigger:
              "border border-[#BFBFBF] rounded-md  px-5 h-fit bg-[#9924E90D] w-24 text-[#6B14A6B2]",
            selectorIcon: "stroke-[#6B14A6B2]",
          }}
        >
          {(year) => <SelectItem key={year.key}>{year.label}</SelectItem>}
        </Select>
        <Select
          items={months}
          name="dealType"
          variant="bordered"
          placeholder="July"
          className="w-24"
          classNames={{
            label: "text-base max-md:text-sm",
            innerWrapper: "",
            trigger:
              "border border-[#BFBFBF] rounded-md  px-5 h-fit bg-[#9924E90D] w-24",
            selectorIcon: "stroke-[#6B14A6B2]",
          }}
        >
          {(month) => <SelectItem key={month.key}>{month.label}</SelectItem>}
        </Select>
      </div>
      <Button
        variant="light"
        className="text-brand-link underline text-base font-medium px-0 data-[hover=true]:bg-transparent"
      >
        See events on calendar
      </Button>
    </div>
  );
};

const BookingCardsDiv = () => {
  return (
    <div className="w-full flex flex-wrap space-y-4 lg:space-y-0">
      {bookingsList.map((booking) => (
        <div
          key={booking.title}
          className="w-full md:w-3/12 pr-3 flex flex-col flex-1"
        >
          <BookingCard booking={booking} />
        </div>
      ))}
    </div>
  );
};