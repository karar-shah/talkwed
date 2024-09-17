import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaPlay, FaRegTrashAlt } from "react-icons/fa";

const Videos = () => {
  const [showGallery, setShowGallery] = useState(false);
  return (
    <div className="">
      <p className="font-bold text-2xl text-[#444444] mb-3">Photo Gallery</p>
      <div className="flex items-start bg-[#9924E908] border border-[#9924E921] rounded-[3px] space-x-6 pt-4 pl-6 pb-7">
        <img src="/icons/addVideo-icon.svg" alt="video-icon" />
        <div>
          <p className="font-medium text-lg text-[#525252] mb-1">
            Highlight your work by uploading videos to your Storefront.
          </p>
          <p className="text-[#686868]">
            You can add unlimited videos showcasing your business and wedding
            services.
          </p>
          <Button
            variant="solid"
            size="lg"
            className="bg-brand text-white rounded-lg text-lg font-medium py-3 px-4 mt-5"
          >
            Add Videos
          </Button>
        </div>
      </div>
      <div className="border border-[#DADADA] rounded-md mt-6 flex flex-col">
        {showGallery ? (
          <div className="pt-6 px-6 pb-40">
            <div className="bg-video-gradient bg-no-repeat h-[150px] w-[200px] rounded-md relative">
              <span className="flex justify-between items-center p-1 cursor-pointer bg-white/70 absolute top-2 right-2 rounded-sm">
                <FaRegTrashAlt />
              </span>
              <span className="flex justify-between items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <FaPlay className="size-5" fill="white" />
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-32 pb-28"  >
            <img
              src="/icons/video-icon.svg"
              alt="video-icon"
              className="size-[60px] mb-3"
            />
            <p className="font-bold text-[#464646] text-xl mb-1">
              No video to display
            </p>
            <p className="font-medium">
              You haven&apos;t uploaded any video yet.{" "}
              <span
                className="text-brand underline font-semibold"
                onClick={() => setShowGallery(true)}
              >
                Add Video
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
