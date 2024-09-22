import { Input, Textarea } from "@nextui-org/react";
import Image from "next/image";

const DeleteAccount = () => {
  return (
    <div className="px-1 pb-[26px] space-y-6 -my-2">
      <div className="flex flex-col justify-center items-center  text-center">
        <Image src="/icons/sad.png " width={100} height={100} alt="sad-emogi" />
        <div className="space-y-1.5">
          <p className="font-semibold text-xl text-[#353535]">Sad to see you go</p>
          <p className="text-sm text-[#6B6B6B] font-medium">
            Are you sure you want to delete your account? This action is
            permanent and cannot be undone. If there{"'"}s anything we can do to
            improve your experience, please let us know.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="border-t-1 border-[#DDDDDD]"></div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className={"font-semibold text-[#6C6C6C]"}
          >
            Confirm password
          </label>
          <Input
            id="email"
            placeholder="Enter your password"
            size="md"
            variant="bordered"
            type="email"
            className={"my-1 text-brand-heading "}
            classNames={{
              inputWrapper: "input-wrapper input-border px-3.5 py-3 h-fit",
              input: "input text-lg max-md:text-sm ",
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="name"
            className={"font-semibold text-[#6C6C6C]"}
          >
            Feedback
          </label>
          <Textarea
            id="feedback"
            variant="bordered"
            placeholder="Share your feedback! Help us improve by telling us why you are deleting your account."
            type="text"
            className={"my-1 text-brand-heading"}
            classNames={{
              inputWrapper: "input-wrapper input-border px-5 py-1.5  h-[102px]",
              input: "input text-lg max-md:text-sm",
            }}
          />
        </div>
      </div>
      <div className="space-x-6 !mt-8 flex justify-center">
        <button className="w-fit md:w-[185px] font-medium text-medium text-brand border-1 border-brand rounded-lg px-4 py-2.5">
          Cancel
        </button>
        <button className="w-fit md:w-[185px] font-medium text-medium text-white bg-brand rounded-lg px-4 py-2.5">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
