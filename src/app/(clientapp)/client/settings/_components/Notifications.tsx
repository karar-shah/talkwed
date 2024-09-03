"use client";
import { Switch } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Notifications = () => {
  const [isOn, setIsOn] = React.useState(true);
  return (
    <div className="space-y-9">
      <h2 className="font-bold text-[#444444] text-2xl">Notifications</h2>
      <div className="w-full border border-[#DADADA] rounded-md overflow-hidden pb-10">
        <h3 className="font-semibold text-lg bg-[#F9F2FE] text-[#535353] pt-3 pb-3.5 px-12">
          Email Notifications
        </h3>
        <div className="px-12 pt-5 text-[#6C6C6C] space-y-2.5">
          <p className="font-semibold  text-medium mb-6">
            Receive an email when someone
          </p>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-medium">Sends you a message</p>

            <Switch
              defaultSelected
              size="lg"
              color="default"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <div className="text-red-700">On</div>
                ) : (
                  <div>OFF</div>
                )
              }
            ></Switch>
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className=" font-semibold text-medium text-[#6C6C6C]">
              Participates in one of your discussions
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-medium text-[#6C6C6C]">
              Requests to add you as a friend
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-medium text-[#6C6C6C]">
              Accepts your friend request
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-medium text-[#6C6C6C]">
              Quotes one of your post
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
        </div>
        <div className="pl-12 pr-11 space-y-3 pt-9">
          <h3 className="font-semibold text-lg text-[#343434]">Newsletters</h3>
          <div className="flex justify-between items-center">
            <p className=" font-semibold text-medium text-[#6C6C6C]">
              TalkWed&apos;s newsletter
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className=" font-semibold text-medium text-[#6C6C6C]">
              Exclusive deals and discounts only available to TalkWed members
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
        </div>
      </div>
      <div className="w-full border border-[#DADADA] rounded-md overflow-hidden">
        <h3 className="font-semibold text-lg bg-[#F9F2FE] text-[#535353] pt-3 pb-3.5 px-12">
          App Notifications
        </h3>
        <div className="px-12 py-8 text-[#6C6C6C] space-y-2.5">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-medium">Sends you a message</p>
            {isOn ? (
              <Image
                src="/On.png"
                width={73}
                height={36}
                alt="On-btn"
                onClick={() => {
                  setIsOn(false);
                }}
              />
            ) : (
              <Image
                src="/off.png"
                width={73}
                height={36}
                alt="On-btn"
                onClick={() => {
                  setIsOn(true);
                }}
              />
            )}
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className=" font-semibold text-medium text-[#6C6C6C]">
              Participates in one of your discussions
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-medium text-[#6C6C6C]">
              Requests to add you as a friend
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-medium text-[#6C6C6C]">
              Accepts your friend request
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
          <div className="border border-[#D0D0D0]"></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-medium text-[#6C6C6C]">
              Quotes one of your post
            </p>
            <Image
              src="/On.png"
              width={73}
              height={36}
              alt="On-btn"
              onClick={() => {
                setIsOn(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
