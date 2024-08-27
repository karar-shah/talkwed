"use client";
import { Button, Progress, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaRegEdit, FaRegHeart } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoStar } from "react-icons/io5";

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
  const [selectedCategory, setSelectedCategory] = useState<string[]>([
    "Venue",
    "Catering",
  ]);

  const addCategory = (title: string) => {
    if (!selectedCategory.includes(title)) {
      setSelectedCategory((prev) => [...prev, title]);
    }
  };

  const handleClearFilter = (title: string) => {
    setSelectedCategory((prev) => prev.filter((c) => c !== title));
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
                  <p className="text-[#595959] font-semibold mt-8">
                    Applied filters
                  </p>
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
                    <div
                      className={`${
                        selectedCategory.includes(item.title)
                          ? "text-[#767676] font-bold"
                          : "font-semibold text-[#808080]"
                      } `}
                    >
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
              {selectedCategory.length ? (
                <FilteredVendors />
              ) : selected === "favourite" ? (
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
    bgUrl: "/venue_bg.svg",
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
export const categoryTypes = [
  { key: "DressAttire", label: "Dress & Attire" },
  { key: "Guests", label: "Guests" },
  { key: "Planning", label: "Planning" },
  { key: "Vendors", label: "Vendors" },
  { key: "Invitations", label: "Invitations" },
  { key: "Jewelry", label: "Jewelry" },
  { key: "Legal", label: "Legal" },
];
const FilteredVendors = () => (
  <div className="border rounded-lg flex-grow">
    <p className="font-semibold text-[#808080] p-5 mb-2">
      Still looking for vendor?{" "}
      <span className="underline text-brand">Search vendor</span>
    </p>
    <div className="flex flex-wrap p-4 -mx-2">
      <div className="px-2 w-4/12 ">
        <div className="border  rounded-md overflow-hidden">
          <div
            className={`min-h-60 relative bg-[url('/venue_bg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden`}
          >
            <div className="flex items-center justify-center absolute top-3 right-3 p-2 cursor-pointer z-10 bg-white/30">
              <FiTrash2 color="white" size={18} />
            </div>

            <div className="size-full bg-black bg-opacity-30 absolute top-0 left-0 flex items-center justify-end flex-col pb-4 px-4">
              <div className="bg-white/70 text-[#333333] w-full rounded-md py-2 px-3">
                <div className="line-clamp-1 text-lg font-bold">
                  Blue Venado Beach...
                </div>
                <div className="font-medium">Hastings, MI</div>
                <div className="flex items-center gap-1">
                  {" "}
                  <IoStar color="#EAAE00" size={18} />
                  <span className="font-semibold">4.9</span>
                  <span className="font-medium">(145)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="py-2.5 px-3.5 space-y-5">
            <Select
              items={categoryTypes}
              placeholder="Select category"
              className=""
              variant="faded"
              radius="sm"
              classNames={{
                trigger: "triggerh-fit border-none bg-[#FFF5DA]",
                value: "value text-[#333333] font-medium",
              }}
            >
              {(categoryType) => (
                <SelectItem key={categoryType.key}>
                  {categoryType.label}
                </SelectItem>
              )}
            </Select>
            <div className="flex gap-3">
              <FaRegEdit color="#838383" size={20} />
              <div className="underline text-brand">Add note</div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] text-[#333333] flex items-center px-3.5 py-3 space-x-3 mt-10">
            <HiOutlineMail color="#7A7A7A" size={22} />
            <span className="font-medium">Contact </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
