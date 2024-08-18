import Typography from "@/common/Typography";
import { Button, Textarea } from "@nextui-org/react";
import { IoThumbsDownOutline, IoThumbsUpOutline } from "react-icons/io5";

export const SecondPart = () => {
  return (
    <>
      <Typography
        title="How was your experience at Live Picture Studios?"
        component="h2"
        className="text-[#8E8E8E] text-xl"
      />
      <div className="text-lg text-[#444444] font-medium mt-10">
        Would you recommend this vendor?
      </div>
      <div className="space-y-8">
        <div className="flex items-center space-x-4 mt-4">
          <Button
            variant="bordered"
            startContent={<IoThumbsUpOutline size={20} color="#444444" />}
            className="text-[#444444] font-medium rounded-sm"
          >
            Yes
          </Button>
          <div>or</div>
          <Button
            variant="bordered"
            startContent={<IoThumbsDownOutline size={20} color="#444444" />}
            className="text-[#444444] font-medium rounded-sm"
          >
            No
          </Button>
        </div>
        <div className="">
          <Textarea
            variant="bordered"
            label={<div className="text-[#444444] font-medium">Review</div>}
            minRows={5}
            labelPlacement="outside"
            placeholder="Write your review to help couples make informed decisions when choosing a vendor."
            className="max-w-lg mb-6 md:mb-0 text-[#444444] font-medium text-lg h-full"
          />
        </div>
        <div>
        <div className="text-[#444444] font-medium mb-2">Add photos to your review <span className="text-[#8E8E8E]">(optional)</span></div>
        <ImageUpload />
        </div>
      </div>
    </>
  );
};

const ImageUpload = () => (
  <div className="flex items-center justify-center w-full max-w-lg">
    <label
      htmlFor="dropzone-file"
      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <img src="/icons/imageUpload.svg" alt="imageUpload" />

        <p className="text-sm text-[#7B7B7B]">
          Click here to upload the image
        </p>
        <p className="text-xs text-[#979797]">
          file should be jpg, jpge, svg or png
        </p>
      </div>
      <input id="dropzone-file" type="file" className="hidden" />
    </label>
  </div>
);
