import { Button } from "@nextui-org/react";
import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";

const Photos = () => {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <div>
      <p className="font-bold text-2xl text-[#444444] mb-3">Photo Gallery</p>
      <div className="space-y-5">
        <div className="bg-[#9924E908] border border-[#9924E921] pt-4 px-6 pb-5 flex space-x-6 rounded-[3px] ">
          <img src="/icons/image 116.svg" alt="add-image" className="size-14" />
          <div>
            <p className="font-medium text-lg text-[#525252] mb-[2px]">
              Show your Work
            </p>
            <p className="text-[#686868]">
              Upload at least 8 photos to showcase your products or services,
              giving couples a clear idea of your work. Storefronts with more
              photos usually attract more leads.
            </p>
            <Button
              variant="solid"
              size="lg"
              className="bg-brand text-white rounded-lg text-lg px-4 py-3 mt-[18px]"
              onClick={() => setShowGallery(true)}
            >
              Add Photos
            </Button>
          </div>
        </div>

        {showGallery ? (
          <>
            <div className="pt-6 lg:pl-6">
              <div className="flex w-full flex-wrap space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="inline-block relative max-lg:w-full">
                  <img src="/Rectangle 34624327.svg" alt="wedding-image" className="object-cover w-full"/>
                  <span className="bg-brand text-white font-semibold text-sm py-1 px-2 rounded-[3px] absolute top-2 left-2">
                    Main
                  </span>
                  <span className="flex justify-between items-center p-0.5 bg-white/70 absolute top-2 right-2 rounded-sm">
                    <IoEllipsisVertical />
                  </span>
                </div>

                <div className="inline-block relative max-lg:w-full">
                  <img src="/Rectangle 34624328.svg" alt="wedding-image" className="object-cover w-full"/>
                  <span className="flex justify-between items-center p-0.5 bg-white/70 absolute top-2 right-2 rounded-sm">
                    <IoEllipsisVertical />
                  </span>
                </div>
                <div className="inline-block relative max-lg:w-full">
                  <img src="/Rectangle 34624329.svg" alt="wedding-image" className="object-cover w-full"/>
                  <span className="flex justify-between items-center p-0.5 bg-white/70 absolute top-2 right-2 rounded-sm">
                    <IoEllipsisVertical />
                  </span>
                </div>
              </div>
              <br />
            </div>
          </>
        ) : (
          <div className="px-6 text-center border border-[#DADADA] rounded-md pt-32 pb-[107px] flex flex-col justify-center items-center">
            <img src="/icons/image 139.svg" alt="gallery" />
            <p className="text-[#464646] text-xl font-bold mt-4 mb-1">
              No Photos to display
            </p>
            <p className="font-medium">
              You haven&apos;t uploaded any photo yet.{" "}
              <span
                className="text-brand underline font-semibold"
                onClick={() => setShowGallery(true)}
              >
                Add Photos
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
