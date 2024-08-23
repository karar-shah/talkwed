import Link from "next/link";
import React from "react";
import { PlanningTools1, resources } from ".";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black py-4 md:px-0 px-6 z-20 relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="py-8 md:grid grid-cols-4 gap-16 md:space-y-0 space-y-5">
          <div>
            <Link href={"/"} className="font-bold  text-brand">
              TALKWED
            </Link>
          </div>
          <div className="text-[#F7FAFE] text-[15px]">
            <h4 className=" font-bold ">Resources</h4>
            {resources?.map((item, index) => (
              <p key={index} className="font-normal">
                <Link href={item.link}>{item.title}</Link>
              </p>
            ))}
          </div>
          <div className="text-[#F7FAFE] text-[15px]">
            <h4 className=" font-bold ">Planning tools</h4>
            {PlanningTools1?.map((item, index) => (
              <p key={index} className="font-normal">
                <Link href={item.link}>{item.title}</Link>
              </p>
            ))}
          </div>
          <div className="text-[#F7FAFE] text-[15px]">
            <h4 className=" font-bold ">Connect with us</h4>
            <div className="mb-2">
              <p>Email</p>
              <a href="">talkwed123@gmail.com </a>
            </div>
            <p>Follow us on</p>
            <div className="flex item-center text-white space-x-3 text-xl">
              <a href="/">
                <FaFacebookSquare />
              </a>
              <a href="/">
                <FaInstagramSquare />
              </a>
              <a href="/">
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-white">
            © 2024 TalkWed LLC. All Rights Reserved. | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
