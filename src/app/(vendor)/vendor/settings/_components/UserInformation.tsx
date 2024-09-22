"use client";
import {
  Button,
  Input,
  Textarea
} from "@nextui-org/react";
import Image from "next/image";
const UserInformation = () => {
  return (
    <>
      <h2 className="font-bold text-[#444444] text-[22px] leading-7 py-6">
        User Information
      </h2>

      <div className="space-y-11">
        <div className="border rounded-md">
          <h3 className="font-semibold text-lg leading-6 bg-[#F9F2FE] text-[#535353] py-3 pl-11 rounded-md">
            Personal Information
          </h3>
          <section className="md:pl-12 px-4 md:px-0 pb-11 pt-7 flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 space-y-5">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="name"
                  className={"font-semibold text-base text-[#6C6C6C]"}
                >
                  Your name
                </label>
                <Input
                  id="name"
                  placeholder="Smith"
                  size="md"
                  variant="bordered"
                  type="text"
                  className={"my-2 text-brand-heading "}
                  classNames={{
                    inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
                    input: "input text-lg max-md:text-sm",
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="name"
                  className={"font-semibold text-base text-[#6C6C6C]"}
                >
                  Contact number
                </label>
                <Input
                  id="contact"
                  placeholder="+1 764 874 8736"
                  size="md"
                  variant="bordered"
                  type="text"
                  className={"my-2 text-brand-heading "}
                  classNames={{
                    inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
                    input: "input text-lg max-md:text-sm",
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="name"
                  className={"font-semibold text-base text-[#6C6C6C]"}
                >
                  About me
                </label>
                <Textarea
                  id="aboutMe"
                  variant="bordered"
                  placeholder="Enter text"
                  type="text"
                  className={"my-2 text-brand-heading "}
                  classNames={{
                    inputWrapper:
                      "input-wrapper input-border px-5 py-3  h-[102px]",
                    input: "input text-lg max-md:text-sm",
                  }}
                />
              </div>
            </div>
            <div className="w-full min-h-60 md:w-1/2">
              <div className="relative w-full">
                <Image
                  src="/Rectangle 34624440.svg"
                  alt="settings prfile"
                  width={161}
                  height={161}
                  className="absolute top-5 right-10"
                />
                <Image
                  src="/icons/Group 5901.svg"
                  alt="camera icon"
                  width={45}
                  height={45}
                  className="border-white absolute top-32 right-12 "
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Button
        variant="solid"
        className="w-full mt-10 py-3.5 h-[50px] max-w-[152px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
      >
        Save Changes
      </Button>
    </>
  );
};

export default UserInformation;
