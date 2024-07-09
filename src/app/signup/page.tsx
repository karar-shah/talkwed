"use client";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import TextWithBorder from "@/common/TextWithBorder";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="my-12">
      <div className="max-w-[1280px] mx-auto px-6 leading-normal">
        <h1 className="text-start text-xl font-bold text-[#585858] mb-6">
          Sign up Now
        </h1>
        <div className="flex justify-between items-center gap-5">
          <div className="w-1/2 ... ">
            <div className="flex gap-5">
              <Input
                size="md"
                variant="bordered"
                type="text"
                label="Verification Code"
                className="my-5"
              />
              <Input
                size="md"
                variant="bordered"
                type="text"
                label="Verification Code"
                className="my-5"
              />
            </div>
            <div className="flex gap-5">
              <Input
                size="md"
                variant="bordered"
                type="text"
                label="Verification Code"
                className="my-5"
              />
              <Input
                size="md"
                variant="bordered"
                type="text"
                label="Verification Code"
                className="my-5"
              />
            </div>
            <div className="flex items-center gap-3 mb-5">
              <p> I am</p>
              <RadioGroup orientation="horizontal" className="flex gap-3">
                <Radio value="planning">Planning my wedding</Radio>
                <Radio value="vendor">Vendor</Radio>
              </RadioGroup>
            </div>
            <div className="w-full flex">
              <Button
                className="bg-brand text-white rounded py-6 my-5 w-full"
                href="#"
                variant="flat"
              >
                Sign up
              </Button>
            </div>
            <TextWithBorder text="OR" />

            <div className="w-full flex items-center justify-center border border-[#A8A8A8] rounded-md p-2">
              <FaGoogle className="m-2" />
              <p className="m-0">Sign up with Google</p>
            </div>
            <div className="w-full flex items-center justify-center">
              <p className="mt-4">
                {"Don't have an account? "}
                <Link href="/signin" className="text-[#6B14A6]">
                  {" "}
                  sign in{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="w-1/2 bg-slate-400 relative">
            <img
              src="/signup_img.svg"
              alt="signup"
              height={210}
              className="w-full"
            />
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-[#b78ad5] bg-opacity-80 backdrop-blur-sm p-5 w-2/3 rounded">
              <p className="text-white text-center font-semibold text-xl">
                Join our community today and unlock exclusive benefits by
                <br />
                signing up now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
