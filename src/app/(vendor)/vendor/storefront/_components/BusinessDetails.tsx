"use client";
import Button from "@/common/Button";
import { Input } from "@nextui-org/react";
import { LuInfo } from "react-icons/lu";
import { StoreFrontTabProps } from "../page";
import RichTextEditor from "./RichTextEditor";

const BusinessDetails = ({ setActiveIndex }: StoreFrontTabProps) => {

  return (
    <div>
      <h1 className="font-bold text-2xl text-[#444444]">Business Details</h1>
      <div className="flex space-x-3 bg-[#3AC3D64A]/10 py-2 px-2.5 mt-3 mb-5 border border-[#3AC3D64A/30]">
        <div className="size-6 mt-1">
          <LuInfo size={24} color="#3AC3D6" />
        </div>
        <p className="text-[#686868]">
          Your storefront showcases detailed information about your wedding
          services, designed to attract and engage couples who are planning
          their special day.
        </p>
      </div>
      <div>
        <p className="text-[#6C6C6C] font-semibold mb-1">
          Describe your business and services
        </p>
        <RichTextEditor />
      </div>
      <div className="h-[1px] bg-[#C0C0C0] w-full mt-12 mb-10"></div>
      <div className=" lg:w-1/2">
        <div className="flex flex-col space-y-5">
          <div>
            <label htmlFor="name" className="text-[#6C6C6C] font-semibold mb-1">
              Contact Person
            </label>
            <Input
              name="name"
              placeholder="Smith J."
              size="md"
              type="text"
              variant="bordered"
              className={"my-2"}
              classNames={{
                input: "text-lg max-md:text-sm ",
                inputWrapper:
                  "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-[#6C6C6C] font-semibold mb-1"
            >
              Email
            </label>
            <Input
              name="email"
              placeholder="smith19@gmail.com"
              size="md"
              type="text"
              variant="bordered"
              className={"my-2"}
              classNames={{
                input: "text-lg max-md:text-sm ",
                inputWrapper:
                  "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="text-[#6C6C6C] font-semibold mb-1"
            >
              Phone Number
            </label>
            <Input
              name="phoneNumber"
              placeholder="smith19@gmail.com"
              size="md"
              type="text"
              variant="bordered"
              className={"my-2"}
              classNames={{
                input: "text-lg max-md:text-sm ",
                inputWrapper:
                  "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="text-[#6C6C6C] font-semibold mb-1"
            >
              Mobile Number
            </label>
            <Input
              name="mobileNumber"
              placeholder="smith19@gmail.com"
              size="md"
              type="text"
              variant="bordered"
              className={"my-2"}
              classNames={{
                input: "text-lg max-md:text-sm ",
                inputWrapper:
                  "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
              }}
            />
          </div>
          <div>
            <label htmlFor="fax" className="text-[#6C6C6C] font-semibold mb-1">
              Fax
            </label>
            <Input
              name="fax"
              placeholder="Smith J."
              size="md"
              type="text"
              variant="bordered"
              className={"my-2"}
              classNames={{
                input: "text-lg max-md:text-sm ",
                inputWrapper:
                  "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
              }}
            />
          </div>
        </div>
      </div>
      <Button
        className="py-3 px-8 mt-24 bg-[#5C148C] text-white text-base font-medium shadow-md rounded-lg"
        href="#"
        title="Save"
        type="button"
        btn={true}
        onClick={() => setActiveIndex((activeIndex) => activeIndex + 1)}
      />
    </div>
  );
};

export default BusinessDetails;
