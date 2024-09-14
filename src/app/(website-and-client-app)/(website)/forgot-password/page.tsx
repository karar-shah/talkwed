"use client";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const ForgotPasswordPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-screen-md mx-auto md:max-w-2/3 border border-[#d3abee] rounded-md m-16 py-12 px-16">
        <div className="flex flex-col md:px-16">
          <h1 className="text-center text-xl font-bold text-[#585858] mb-10">
            Forgot Password
          </h1>
          <Input
            size="md"
            variant="bordered"
            type="text"
            label="Verification Code"
            className="my-5"
          />
          <Input
            label="Password"
            variant="bordered"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <BsEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="mb-5"
          />

          <Input
            label="Confirm Password"
            variant="bordered"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <BsEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="mb-5"
          />

          <Button
            className="bg-brand text-white rounded py-6 my-5"
            href="#"
            variant="flat"
          >
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
