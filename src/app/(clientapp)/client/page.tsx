import { Card, CardBody } from "@nextui-org/react";
import { CiCamera } from "react-icons/ci";
import { PiPencilLine } from "react-icons/pi";

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
    <div className="pt-10 max-w-[1280px] mx-auto px-6">
      <div className="flex gap-5">
        <div className="w-3/12">
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
        <div className="w-9/12">
          <h1 className="text-2xl text-[#444444] font-bold">
            Welcome, Smith & Emily
          </h1>
          <h2 className="font-medium text-[#6C6C6C] text-lg">
            January 01, 2024 - Wednesday
          </h2>
          <div className="mt-8 flex flex-wrap -m-3 w-full">
            {cardsData.map((item, index) => {
              return (
                <div className="p-3 w-3/12" key={index}>
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
                        <div className="font-medium text-[#444444]">
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
  );
};

export default page;
