"use client";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import TextWithBorder from "@/common/TextWithBorder";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import InputField from "@/common/Input/InputField";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto p-6 leading-normal">
        <div className="flex justify-between items-center gap-16">
          <div className="w-1/2 ... ">
            <h1 className="text-start text-2xl font-semibold text-[#585858] mb-6">
              Sign up Now
            </h1>
            <div className="grid  grid-cols-2 gap-5">
              <InputField
                size="md"
                variant="bordered"
                type="text"
                label="First Name"
                classNames={{ inputWrapper: "input-border" }}
              />
              <Input
                size="md"
                variant="bordered"
                type="text"
                label="Last Name"
                classNames={{ inputWrapper: "input-border" }}
              />

              <Input
                size="md"
                variant="bordered"
                type="text"
                label="Email"
                classNames={{ inputWrapper: "input-border" }}
              />
              <Input
                size="md"
                variant="bordered"
                type="text"
                label="Password"
                classNames={{ inputWrapper: "input-border" }}
              />
            </div>
            <div className="flex items-center gap-3 my-5">
              <p> I am</p>
              <RadioGroup orientation="horizontal" className="flex gap-3">
                <Radio value="planning">Planning my wedding</Radio>
                <Radio value="vendor">Vendor</Radio>
              </RadioGroup>
            </div>
            <div className="w-full flex">
              <Button
                className="bg-brand text-white rounded py-6 my-5 w-full text-lg font-medium"
                href="#"
                variant="flat"
              >
                Sign up
              </Button>
            </div>
            <TextWithBorder text="OR" />

            <div className="w-full flex items-center justify-center border border-[#A8A8A8] rounded-md p-2">
              <FcGoogle className="m-2" />
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

export default SignUp;
