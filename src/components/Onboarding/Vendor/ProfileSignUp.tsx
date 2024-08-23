"use client";
import Button from "@/common/Button";
import { cn } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

export default function ProfileSignUp() {
  const [profileComplete, setprofileComplete] = useState(false);
  return (
    <div className="flex flex-col gap-7 max-w-screen-xl mx-auto p-6 leading-normal ">
      {/* 1 */}
      <div className=" flex flex-col rounded-2xl shadow-custom1  overflow-hidden">
        <div className="bg-brand bg-opacity-5 gap-4 flex py-9 px-20 max-md:px-10 justify-items-end items-end  border-b border-brand border-opacity-10 w-full">
          <div className="text-2xl font-semibold text-brand-heading max-md:text-xl">
            You skipped some steps{" "}
          </div>
        </div>
        <div className="flex justify-between items-center h-full w-full  max-md:flex-col-reverse max-md:items-start">
          <div className="py-9 px-20 max-md:px-10 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              {profileComplete && (
                <div className="font-semibold text-lg max-md:base">
                  Looks Good, Smith!
                </div>
              )}
              <div className="text-lg max-md:base font-semibold text-brand-muted2 w-full">
                You must complete the skipped steps before you can submit your
                profile
              </div>
            </div>
            <div className="flex  gap-4">
              <button
                className="border border-brand text-brand rounded-lg bg-transparent py-2 px-4 w-fit text-lg max-md:base font-semibold"
                onClick={() => setprofileComplete(true)}
              >
                Edit Details
              </button>
              {profileComplete && (
                <Button
                  className="bg-brand text-white rounded-md py-[10px] px-4 text-center text-lg max-md:base font-bold block"
                  href="#"
                  title="Submit Profile"
                  type="button"
                  btn={true}
                />
              )}
            </div>
            <div className="flex flex-col gap-7 max-w-[560px]"></div>
          </div>
          <div className="relative flex  items-center  justify-end py-9 px-20 max-md:px-10 max-md:mt-10  ">
            <img
              src={"./onboarding/image5.svg"}
              alt={"notepad svg"}
              className="absolute  z-10 w-[105px] max-md:w-[100px] h-[105px] max-md:h-[100px] max-md:top-0 max-md:left-10"
              // width={141}
              // height={141}
            />
            <img
              src={"./onboarding/image6.svg"}
              alt={"notepad svg"}
              className="absolute  z-20 w-[105px] max-md:w-[100px] h-[105px] max-md:h-[100px] max-md:top-0 max-md:left-10"
              // width={141}
              // height={141}
            />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex gap-8 h-fit mb-20 max-md:flex-col">
        {/* Profile Overview */}
        <div className=" flex flex-col gap-7">
          <div className="px-16  max-md:px-10  py-11 rounded-2xl shadow-custom1  overflow-hidden ">
            <div className="space-y-4 text-brand-paragraph ">
              <div className="flex space-x-3 items-center">
                <img
                  src={"/formuser.png"}
                  alt={"/form1.png"}
                  className="rounded-full"
                  width={80}
                />
                <div>
                  <h4 className=" font-semibold text-[22px] text-brand-heading">
                    {"Smith I."}
                  </h4>
                  <p className="text-sm font-normal">
                    <span className="font-medium text-lg text-brand-muted2">
                      {"New York, NY"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="font-medium text-[22px] text-brand-muted">
                Dreamlife Photos & Video
              </div>
              <p className="flex text-base font-medium">
                {
                  "Hello there! I'm a seasoned photographer with a knack for capturing the essence of life's most precious moments. Specializing in [mention your specialty, e.g., wedding photography, portrait photography, nature photography], I bring [number] years of experience to every shoot. From candid snapshots to carefully composed portraits, my goal is to immortalize memories that you'll cherish forever. Proficient in both traditional film and digital photography, I use my creative eye and technical skills to craft images that tell compelling stories. Let's work together to create timeless photographs that capture the beauty of your special moments."
                }
              </p>
            </div>
          </div>
          <div className=" relative flex flex-col rounded-2xl shadow-custom1  overflow-hidden min-w-[360px] w-full">
            <div className="bg-brand bg-opacity-5 gap-4 flex py-5 px-16  max-md:px-10  justify-items-end items-end  border-b border-brand border-opacity-10">
              <div className="text-2xl font-semibold text-brand-heading max-md:text-xl">
                Previous Work Samples{" "}
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <div className="py-10 px-16  max-md:px-10  flex  gap-5 max-md:gap-2 text-lg font-semibold text-brand-muted2 ">
                <img
                  src={"./onboarding/Rectangle 34624389.svg"}
                  alt={"notepad svg"}
                  className=" rounded max-md:w-[100px] h-[105px] max-md:h-[100px] "
                  // width={141}
                  // height={141}
                />
                <img
                  src={"./onboarding/Rectangle 34624390.svg"}
                  alt={"notepad svg"}
                  className=" rounded max-md:w-[100px] h-[105px] max-md:h-[100px]  "
                  // width={141}
                  // height={141}
                />
                <img
                  src={"./onboarding/Rectangle 34624391.svg"}
                  alt={"notepad svg"}
                  className="  rounded max-md:w-[100px] h-[105px] max-md:h-[100px] "
                  // width={141}
                  // height={141}
                />
                <img
                  src={"./onboarding/Rectangle 34624392.svg"}
                  alt={"notepad svg"}
                  className=" max-md:hidden rounded max-md:w-[100px] h-[105px] max-md:h-[100px]"
                  // width={141}
                  // height={141}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center py-9 px-16  max-md:px-10  gap-4">
            <Link
              href="/onboarding-vendor"
              className="border border-brand text-brand rounded-lg bg-transparent py-2 px-4 w-fit text-lg font-semibold"
            >
              Edit Details
            </Link>
            <Button
              className={cn(
                " text-white rounded-md py-[10px] px-4 text-center text-lg font-bold block",
                profileComplete ? "bg-brand" : "bg-brand-muted2"
              )}
              href="#"
              title="Submit Profile"
              type="button"
              btn={true}
            />
          </div>
        </div>
        {/* More Detail BOX */}
        <div className="flex flex-col rounded-2xl shadow-custom1  overflow-hidden min-w-[360px] w-full h-fit pb-[100px]">
          <div className="bg-brand bg-opacity-5 gap-4 flex py-6 px-7 justify-items-end items-end  border-b border-brand border-opacity-10">
            <div className="text-2xl font-semibold text-brand-heading">
              More Details{" "}
            </div>
          </div>
          <div className="flex justify-between items-center  w-full">
            <div className="py-5 px-7 flex flex-col gap-7 text-lg font-semibold text-brand-muted2 w-full">
              <div className="flex flex-col gap-1 border-b-medium pb-7 ">
                <div className="">Price</div>
                <div className="">$1220 - $2425</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="">Contact Number</div>
                <div className="">+92 3298873462487</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
    </div>
  );
}
