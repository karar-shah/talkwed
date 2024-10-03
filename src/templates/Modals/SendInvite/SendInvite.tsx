import { Button, Chip, Textarea } from "@nextui-org/react";
import React from "react";
import { CiCamera } from "react-icons/ci";

const SendInvite = () => {
  return (
    <div>
      <p className="text-sm text-[#353535]">
        The invite will be sent only to those selected guests who have their
        email addresses saved.
      </p>
      <div>
        <p className="text-[#353535] font-semibold text-sm mb-1.5 mt-6">
          Recipient
        </p>
        <div className="flex flex-col border border-[#DBDBDB] md:px-6 py-3 rounded-md">
          <div className=" flex flex-wrap">
            <RecipientChip email="Sam@gmail.com" />
            <RecipientChip email="Calie3@gmail.com" />
            <RecipientChip email="Jack@gmail.com" />
          </div>
          <Button
            variant="light"
            className="text-[#6B14A6] font-semibold text-sm h-5 underline w-12 px-0 mt-2"
          >
            See all
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="message"
          className="text-[#353535] font-semibold text-sm mb-1"
        >
          Message
        </label>
        <Textarea
          id="description"
          variant="bordered"
          placeholder="Type your message here..."
          type="text"
          className={"mt-2 text-brand-heading "}
          classNames={{
            inputWrapper:
              "input-wrapper  border border-[#bfbfbf] px-5 py-2 rounded-md  h-24",
            input: "input text-base max-md:text-sm",
          }}
        />
      </div>
      <div className="inline-block mt-3 bg-[#EFEFEF] rounded-full p-1">
        <CiCamera size={24} color="#767676" className="" />
      </div>
      <div className="flex justify-end">
        <Button
          variant="solid"
          className="bg-brand text-white text-lg font-medium rounded-lg w-36 my-6 h-12"
        >
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default SendInvite;
const RecipientChip = ({ email }: any) => {
  return (
    <Chip
      onClose={() => console.log("close")}
      variant="bordered"
      className="text-base font-medium text-[#4D4C4C] mr-3 mb-2"
      classNames={{
        base: "bg-[#9924E90D] border border-[#9924E94D] px-3.5 py-1",
      }}
    >
      {email}
    </Chip>
  );
};
