"use client";
import { Button, Progress } from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

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
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const addCategory = (title: string) => {
    if (!selectedCategory.includes(title)) {
      setSelectedCategory(prev => [...prev, title]);
    }
  };


  const handleClearFilter = (title: string) => {
    setSelectedCategory(prev => prev.filter(c => c !== title));
  };

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

              {selectedCategory.length && (
                <div className="space-y-2">
                  <p className="text-[#595959] font-semibold mt-8">Applied filters</p>
                  {selectedCategory.map((item, i) => (
                    <Button
                      variant="faded"
                      radius="full"
                      className="text-brand mr-2 border-none font-medium"
                      endContent={
                        <IoMdClose
                          size={16}
                          color="#9924E9"
                          className="ml-auto"
                          onClick={() => handleClearFilter(item)}
                        />
                      }
                      key={i}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              )}

              <div className="text-[#595959] font-semibold mt-12 mb-4">
                By category
              </div>
              <div className="space-y-3">
                {category.map((item, i) => (
                  <div
                    className="text-[#808080] cursor-pointer"
                    key={i}
                    onClick={() => addCategory(item.title)}
                  >
                    <div className={`${selectedCategory.includes(item.title) ? "text-[#767676] font-bold" : "font-semibold text-[#808080]"} `}>
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
            <>
              {selected === "favourite" ? (
                <FavouriteVendors />
              ) : (
                <HiredVendors />
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

const HiredVendors = () => (
  <div className="border rounded-lg flex flex-col items-center justify-center h-full">
    <img
      src="/icons/NothingFound 1.svg"
      alt="Nothing Found"
      className="size-48"
    />
    <p className="text-custom-gray-500 font-semibold text-lg text-center">
      No vendors were found. Please
      <br />
      <span className="text-brand underline cursor-pointer">
        search for vendors
      </span>
      .
    </p>
  </div>
);

const favouritesContent = [
  {
    bgUrl: "/girl_taking_picture.png",
    heartCount: 2,
    buttonText: "Photography",
  },
  {
    bgUrl: "/form1.png",
    heartCount: 1,
    buttonText: "Venue",
  },
];
const FavouriteVendors = () => (
  <div className="border rounded-lg flex-grow">
    <div className="flex flex-wrap p-4 -mx-2">
      <div className="px-2 w-3/12">
        <div className="border-dashed  min-h-48 flex items-center justify-center border-2 rounded-md">
          <p className="text-brand font-medium text-lg text-center underline">
            Search more vendors
          </p>
        </div>
      </div>
      {favouritesContent.map((item, i) => (
        <div className="px-2 w-3/12" key={i}>
          <div
            className={`min-h-48 relative rounded-md bg-no-repeat bg-center bg-cover overflow-hidden`}
            style={{
              backgroundImage: `url(${item.bgUrl})`,
            }}
          >
            <div className="size-full bg-black bg-opacity-50 absolute top-0 left-0 flex items-center justify-end flex-col pb-4 px-4">
              <div className="flex items-center gap-1">
                <FaRegHeart color="white" size={40} />
                <div className="font-bold text-[40px] text-white">
                  {item.heartCount}
                </div>
              </div>
              <Button
                variant="solid"
                size="lg"
                radius="sm"
                className="bg-white/70 mt-6 text-[#333333] font-bold text-lg w-full px-3"
                endContent={
                  <BsArrowRight size={18} color="#333" className="ml-auto" />
                }
              >
                {item.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
