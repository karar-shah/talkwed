import Button from "@/common/Button";
import { useModalAction } from "@/context/modal.context";
import { Input } from "@nextui-org/react";

const SaveLink = () => {
  const { closeModal } = useModalAction();
  return (
    <div className="pt-2 pb-8 px-5 flex flex-col space-y-4">
      <div>
        <h2 className="text-[22px] font-semibold text-[#464646]">Save Link</h2>
        <p className="text-[#848484] text-sm font-medium">
          By saving the link of gallery you will be able to easily access it
          from here
        </p>
        <div className="border-t border-[#DADADA] mt-2"></div>
      </div>
      <div>
        <p className="font-medium text-[#6C6C6C]">Cover Photo</p>
        <div className="w-4/12 bg-red-300 relative  rounded-md">
          <div className=" rounded-md bg-[#EDEDED] flex justify-center items-center py-6">
            <img
              src="/icons/image-icon.svg"
              alt="picture"
              className="size-20"
            />
          </div>
          <img
            src="/icons/camera-icon.svg"
            alt="camera-icon"
            className="size-8 absolute bottom-0 right-0 translate-x-1/2"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-8 ">
        <div className="flex flex-col space-y-3.5">
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="title"
              className="text-[#5F5F5F] font-medium text-medium mb-1.5"
            >
              Title *
            </label>
            <Input
              name="title"
              placeholder="Enter title"
              size="md"
              type="text"
              variant="bordered"
              className={"my-2"}
              classNames={{
                input: "text-lg max-md:text-sm ",
                inputWrapper:
                  "border border-[#A8A8A8] rounded-md py-3.5 px-[18px] h-fit",
              }}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="url"
              className="text-[#5F5F5F] font-medium text-medium mb-1.5"
            >
              Gallery link *
            </label>
            <Input
              name="gallery-url"
              placeholder="Enter the URL of gallery"
              size="md"
              type="text"
              variant="bordered"
              className={"my-2"}
              classNames={{
                input: "text-lg max-md:text-sm ",
                inputWrapper:
                  "border border-[#A8A8A8] rounded-md py-3.5 px-[18px] h-fit",
              }}
            />
          </div>
        </div>
        <div onClick={closeModal}>
          <Button
            btn={false}
            title="Save Link"
            href="/client/gallery/my-gallery/items"
            className="bg-brand text-white font-medium text-lg px-[30px] py-3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SaveLink;
