import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { CiCamera, CiCircleCheck } from "react-icons/ci";
import { PiPencilLine } from "react-icons/pi";
import { EmblaCarousel } from "./Carousel";

const cardsData = [
  {
    title: "Services hired",
    subtitle: "0 out of 21",
    progress: 0,
  },
  {
    title: "Tasks Completed",
    subtitle: "2 out of 34",
    progress: 10,
  },
  {
    title: "Guests attended",
    subtitle: "3 out of 3",
    progress: 100,
  },
  {
    title: "Seated guests",
    subtitle: "3 out of 3",
    progress: 100,
  },
  {
    title: "Budget Tracker",
    subtitle: "$243 used",
    progress: 10,
  },
  {
    title: "Saved Collection",
    subtitle: "1 saved",
    progress: 50,
  },
  {
    title: "Deals Availed",
    subtitle: "0 out of 18",
    progress: 0,
  },
];
const page = () => {
  return (
    <div className="pt-10 pb-20 max-w-[1280px] mx-auto px-6 space-y-20">
      <div className="flex -mx-3 flex-wrap">
        <div className="w-full  md:w-3/12 px-3">
          <div className="">
            <Card>
              <CardBody className="p-4 space-y-3">
                <div className="relative">
                  <img
                    src="/mywedding.svg"
                    alt="my wedding cover"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-3 right-3 p-2 bg-white bg-opacity-90 rounded-lg shadow-xl cursor-pointer">
                    <CiCamera className="text-[#969696] size-6" />
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#9924E9] to-[#9924E9]/75 from-70% to-90% text-white rounded relative">
                  <div className="absolute right-4 top-3">
                    <PiPencilLine className="size-6" />
                  </div>
                  <div className="text-xl font-semibold">July 10, 2024</div>
                  <div className="text-xl font-medium">
                    66 <span className="text-base">days</span> 18{" "}
                    <span className="span text-base">hrs</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="w-full md:w-9/12 px-3">
          <div className="text-center md:text-start mt-5 md:mt-0">
            <h1 className="text-2xl text-custom-gray-500 font-bold">
              Welcome, Smith & Emily
            </h1>
            <h2 className="font-medium text-[#6C6C6C] text-lg">
              January 01, 2024 - Wednesday
            </h2>
            <div className="mt-8 flex flex-wrap -m-3 w-full">
              {cardsData.map((item, index) => {
                return (
                  <div className="p-3 w-full sm:w-6/12 lg:w-3/12" key={index}>
                    <Card key={index} className="h-full w-full">
                      <CardBody className="px-3 py-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-[#5A5A5A]">
                              {item.title}
                            </div>
                            <div className="text-base text-[#6C6C6C]">
                              {item.subtitle}
                            </div>
                          </div>
                          <div></div>
                          <div className="font-medium text-custom-gray-500">
                            <div className="relative size-10">
                              <svg
                                className="size-8 -rotate-90"
                                viewBox="0 0 36 36"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  className="stroke-current text-[#D4D4D4]"
                                  stroke-width="4"
                                ></circle>
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  className="stroke-current text-[#9924E9]"
                                  stroke-width="4"
                                  strokeDasharray={`${item.progress}, 100`}
                                  strokeDashoffset="0"
                                  stroke-linecap="round"
                                  style={{
                                    visibility:
                                      item.progress > 0 ? "visible" : "hidden",
                                  }}
                                ></circle>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 w-full space-y-4 md:space-y-0">
        <div className="w-full md:w-5/12 px-2 flex">
          <Card className="w-full flex flex-col">
            <CardHeader className="py-4 px-6 flex justify-between items-center">
              <div className="text-xl font-bold">
                Guest List{" "}
                <span className="text-lg font-medium text-custom-gray-500">
                  (3)
                </span>
              </div>
              <div className="text-brand underline cursor-pointer font-semibold">
                View all
              </div>
            </CardHeader>
            <Divider className="mx-6 w-auto" />
            <CardBody className="py-12 flex-grow flex flex-col items-center justify-center">
              <img
                src="/icons/guests.svg"
                alt="guests"
                className="size-14 object-cover"
              />
              <p className="text-[#6D6D6D] font-medium">
                You haven&apos;t added any guests yet
              </p>
              <Button
                startContent={<BiPlus size={20} />}
                variant="bordered"
                className="text-brand border-brand border rounded-lg text-lg font-medium mt-5"
              >
                Add Guest
              </Button>
            </CardBody>
          </Card>
        </div>
        <div className="w-full md:w-7/12 px-2 flex">
          <Card className="w-full flex flex-col">
            <CardHeader className="py-4 px-6 flex justify-between items-center">
              <div className="text-xl font-bold">Check List</div>
              <div className="text-brand underline cursor-pointer font-semibold">
                View all
              </div>
            </CardHeader>
            <Divider className="mx-6 w-auto" />
            <CardBody className="py-8 px-6 flex-grow">
              <ul className="text-lg font-semibold space-y-8 text-[#5A5A5A]">
                <li className="flex items-center gap-4">
                  <CiCircleCheck className="size-6 text-[#6D6D6D] " /> Find and
                  hire your wedding planner
                </li>
                <li className="flex items-center gap-4">
                  <CiCircleCheck className="size-6 text-[#6D6D6D] " /> Set a
                  wedding budget
                </li>
                <li className="flex items-center gap-4">
                  <CiCircleCheck className="size-6 text-[#6D6D6D] " /> Start
                  creating your guest list
                </li>
                <li className="flex items-center gap-4">
                  <CiCircleCheck className="size-6 text-[#6D6D6D] " /> Find and
                  book your venue
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 w-full space-y-4 md:space-y-0">
        <div className="w-full md:w-7/12 px-2 flex">
          <Card className="w-full flex flex-col">
            <CardHeader className="py-4 px-6 text-xl font-bold">
              Deals
              <span className=" pl-1 text-lg font-medium text-custom-gray-500">
                (18)
              </span>
            </CardHeader>
            <Divider className="mx-6 w-auto" />
            <CardBody className="py-12 flex-grow">
              <EmblaCarousel />
            </CardBody>
          </Card>
        </div>
        <div className="w-full md:w-5/12 px-2 flex">
          <Card className="w-full flex flex-col">
            <CardHeader className="py-4 px-6 flex justify-between items-center">
              <div className="text-xl font-bold">Budget</div>
              <div className="text-brand underline cursor-pointer font-semibold">
                Go to budget
              </div>
            </CardHeader>
            <Divider className="mx-6 w-auto" />
            <CardBody className="py-8 px-6 flex-grow text-[#6D6D6D]">
              <div className="flex divide-x flex-row pt-10">
                <div className="flex items-center gap-3 w-1/2 justify-center">
                  <img
                    src="/icons/image 125.svg"
                    alt="consts"
                    className="size-9 object-cover"
                  />
                  <div>
                    <div className="font-semibold">Estimated cost</div>
                    <div className="text-xl font-semibold">$ 4,204</div>
                  </div>
                </div>
                <div className="flex items-center gap-3  w-1/2 justify-center">
                  <img
                    src="/icons/image 126.svg"
                    alt="consts"
                    className="size-9 object-cover"
                  />
                  <div>
                    <div className="font-semibold">Final cost</div>
                    <div className="text-xl font-semibold">$ 2,630</div>
                  </div>
                </div>
              </div>
              <Button
                variant="bordered"
                className="text-brand border-brand border rounded-lg text-lg font-medium mt-14 max-w-44 mx-auto"
                size="md"
              >
                Manage expenses
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
