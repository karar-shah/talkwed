"use client";
import { Button, Progress } from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { FavouriteVendors } from "./_components/FavouriteVendor";
import { FilteredVendors } from "./_components/FilteredVendor";
import { HiredVendors } from "./_components/HiredVendor";
import { category } from "./data";

const Page = () => {
  const [selected, setSelected] = useState<"favourite" | "hired">("favourite");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const addCategory = (title: string) => {
    if (!selectedCategory.includes(title)) {
      setSelectedCategory((prev) => [...prev, title]);
    }
  };

  const handleClearFilter = (title: string) => {
    setSelectedCategory((prev) => prev.filter((c) => c !== title));
  };

  return (
    <div className="max-w-[1280px] mx-auto pl-6 pt-12 pb-20">
      <div className="flex flex-wrap w-full -mx-4 space-y-10 md:space-y-0">
        <div className="w-full md:w-3/12 px-4">
          <div className="border rounded-lg w-full p-5">
            <p className="text-lg font-semibold text-[#6C6C6C]">
              0 out of 21 <span className="font-medium">categories hired</span>
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
            <h1 className="text-[#444444] text-2xl font-bold ">My vendors</h1>
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
  );
};

export default Page;
