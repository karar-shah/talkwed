import { Input } from "@nextui-org/react";

const SocialMedia = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-[#444444] mb-9">Social Media</p>
      <div className="border border-[#DADADA] pt-5 pl-9 rounded-md">
        <p className="font-medium text-[#6C6C6C]">
          Get more visibility on social media through TalkWed
        </p>
        <p className="text-sm text-[#777777]">
          Share your social media profiles with us and increase the
          possibilities to have your pictures published.
        </p>
        <div className="flex flex-wrap mt-10">
          <div className="flex items-center bg-[#F9F8F8] border border-[#A8A8A8] rounded-md md:w-5/12 mr-7 mb-6 overflow-hidden ">
            <div className="px-4 py-2.5 border-r border-[#A8A8A8]">
              <img
                src="/icons/image 141.svg"
                alt="facebook-icon"
                className="size-[30px] "
              />
            </div>

            <Input
              name="fbLink"
              placeholder="e.g. www.facebook.com/yourBusiness"
              size="md"
              type="text"
              classNames={{
                input: "text-base max-md:text-sm ",
                inputWrapper: "bg-white rounded-none py-4 px-5 h-fit",
              }}
            />
          </div>
          <div className="flex items-center bg-[#F9F8F8] border border-[#A8A8A8] rounded-md md:w-5/12 mr-7 mb-6 overflow-hidden ">
            <div className="px-4 py-2.5 border-r border-[#A8A8A8]">
              <img
                src="/icons/image 142.svg"
                alt="facebook-icon"
                className="size-[30px] "
              />
            </div>

            <Input
              name="fbLink"
              placeholder="e.g. www.facebook.com/yourBusiness"
              size="md"
              type="text"
              classNames={{
                input: "text-base max-md:text-sm ",
                inputWrapper: "bg-white rounded-none py-4 px-5 h-fit",
              }}
            />
          </div>
          <div className="flex items-center bg-[#F9F8F8] border border-[#A8A8A8] rounded-md md:w-5/12 mr-7 mb-6 overflow-hidden ">
            <div className="px-4 py-2.5 border-r border-[#A8A8A8]">
              <img
                src="/icons/image 143.svg"
                alt="facebook-icon"
                className="size-[30px] "
              />
            </div>

            <Input
              name="fbLink"
              placeholder="e.g. www.facebook.com/yourBusiness"
              size="md"
              type="text"
              classNames={{
                input: "text-base max-md:text-sm ",
                inputWrapper: "bg-white rounded-none py-4 px-5 h-fit",
              }}
            />
          </div>
          <div className="flex items-center bg-[#F9F8F8] border border-[#A8A8A8] rounded-md md:w-5/12 mr-7 mb-6 overflow-hidden ">
            <div className="px-4 py-2.5 border-r border-[#A8A8A8]">
              <img
                src="/icons/image 144.svg"
                alt="facebook-icon"
                className="size-[30px] "
              />
            </div>

            <Input
              name="fbLink"
              placeholder="e.g. www.facebook.com/yourBusiness"
              size="md"
              type="text"
              classNames={{
                input: "text-base max-md:text-sm ",
                inputWrapper: "bg-white rounded-none py-4 px-5 h-fit",
              }}
            />
          </div>
        </div>
        <button className="py-3 mt-5 px-10 text-white bg-brand text-lg rounded-md mb-[106px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
