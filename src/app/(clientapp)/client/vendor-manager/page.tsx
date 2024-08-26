"use client";
import { Button, Progress } from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const category = [
  {
    title: "Venue",
    count: 0,
  },
  {
    title: "Catering",
    count: 0,
  },
  {
    title: "Photography",
    count: 0,
  },
  {
    title: "Band",
    count: 0,
  },
  {
    title: "Transportation",
    count: 0,
  },
  {
    title: "Invitations",
    count: 0,
  },
];

const Page = () => {
  const [selected, setSelected] = useState<"favourite" | "hired">("favourite");
  return (
    <>
      <div className="max-w-[1280px] mx-auto pl-6 pt-12 pb-20">
        <div className="flex flex-wrap w-full -mx-4">
          <div className="w-full md:w-3/12 px-4">
            <div className="border rounded-lg w-full p-5">
              <p className="text-lg font-semibold text-[#6C6C6C]">
                0 out of 21{" "}
                <span className="font-medium">categories hired</span>
              </p>
              <Progress
                aria-label="Loading..."
                color="secondary"
                value={5}
                className="mt-4"
                size="md"
              />

              <div className="text-[#595959] font-semibold mt-12 mb-4">
                By category
              </div>
              <div className="space-y-3">
                {category.map((item, i) => (
                  <div className="text-[#808080]" key={i}>
                    <div className="font-semibold text-lg">
                      {item.title}{" "}
                      <span className="font-medium">({item.count})</span>
                    </div>
                  </div>
                ))}
                <div className="text-[#5C148C] underline cursor-pointer font-medium">
                  Show more
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12 px-4 flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-[#444444] text-2xl font-bold">My vendors</h1>

              <Button
                startContent={<BiPlus size={20} />}
                size="lg"
                variant="bordered"
                className="text-brand border-brand border rounded-lg text-lg font-medium"
              >
                Add Vendor
              </Button>
            </div>
            <div className="my-5 inline-flex items-center border rounded-full border-brand/30 max-h-10 overflow-hidden max-w-52">
              <Button
                size="lg"
                radius="full"
                variant={selected === "favourite" ? "faded" : "light"}
                className={`border-none font-medium ${
                  selected === "favourite" ? "text-brand" : "text-[#848484]"
                }`}
                onClick={() => setSelected("favourite")}
              >
                Favourites
              </Button>
              <Button
                size="lg"
                radius="full"
                variant={selected === "hired" ? "faded" : "light"}
                className={`border-none font-medium ${
                  selected === "hired" ? "text-brand" : "text-[#848484]"
                }`}
                onClick={() => setSelected("hired")}
              >
                Hired
              </Button>
            </div>
            <div className="border rounded-lg flex flex-col items-center justify-center h-full">
              <img
              src="/icons/NothingFound 1.svg"
              alt="Nothing Found"
              className="size-48"
              />
              <p className="text-custom-gray-500 font-semibold text-lg text-center">No vendors were found. Please
                <br/>
                 <span className="text-brand underline cursor-pointer">search for vendors</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
