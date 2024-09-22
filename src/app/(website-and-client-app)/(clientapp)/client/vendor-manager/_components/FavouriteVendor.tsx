import { Button } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { favouritesContent } from "../data";

export const FavouriteVendors = () => (
  <div className="border rounded-lg flex-grow">
    <div className="flex flex-wrap p-4 -mx-2 space-y-6 md:space-y-0">
      <div className="px-2 w-full md:w-3/12">
        <div className="border-dashed  min-h-48 flex items-center justify-center border-2 rounded-md">
          <p className="text-brand font-medium text-lg text-center underline">
            Search more vendors
          </p>
        </div>
      </div>
      {favouritesContent.map((item, i) => (
        <div className="px-2 w-full md:w-3/12" key={i}>
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