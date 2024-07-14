"use client";
import Checkbox from "@/common/Checkbox";
import Link from "next/link";
import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import TextWithBorder from "@/common/TextWithBorder";
import Input from "@/common/Input";
import Button from "@/common/Button";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dateTo, setDateTo] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTo(e.target.checked);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-screen-md mx-auto md:max-w-2/3 border-slate-600 shadow-md rounded-md m-16 py-12 px-16">
        <div className="flex flex-col md:px-16">
          <h1 className="text-center text-[26px] font-medium text-[#585858] mb-10">
            Login to TalkWed
          </h1>

          <Input
            size="md"
            variant="bordered"
            type="email"
            label="Email"
            className="my-5 "
            classNames={{ inputWrapper: "input-border" }}
          />
          <Input
            label="Password"
            variant="bordered"
            classNames={{ inputWrapper: "input-border" }}
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

          <div className="flex justify-between">
            <Checkbox
              id="from"
              name="from"
              label="Remember me"
              checked={dateTo}
              onChange={handleDateTo}
            />
            <Link href="/forgot-password" className="text-[#6B14A6]">
              Forgot password?
            </Link>
          </div>
          <Button
            className="bg-brand text-white rounded-md py-4 my-5 w-full text-center mx-auto text-lg font-medium block"
            href="#"
            title="Sign In"
          />

          <TextWithBorder text="OR" />
          <div className="w-full flex items-center justify-center border border-[#A8A8A8] rounded-md p-2">
            <FcGoogle className="m-2" />
            <p className="m-0">Sign up with Google</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="mt-4">
              {`Don't have an account?`}{" "}
              <Link href="/signup" className="text-[#6B14A6]">
                {" "}
                sign up{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
