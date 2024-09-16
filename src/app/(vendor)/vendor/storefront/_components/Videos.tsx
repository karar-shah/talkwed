import { Button } from "@nextui-org/react"

const Videos = () => {
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
          <Button variant="solid" size="lg" className="bg-brand text-white rounded-lg text-lg font-medium py-3 px-4 mt-5">
            Add Videos
          </Button>
        </div>
      </div>
      <div className="border border-[#DADADA] rounded-md mt-6 pt-32 pb-28 flex flex-col justify-center items-center">
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
          <span className="text-brand underline font-semibold">Add Video</span>
        </p>
      </div>
    </div>
  )
}

export default Videos