"use client";
import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
} from "next-share";
import { IoIosLink } from "react-icons/io";
import { usePathname } from "next/navigation";
import { config } from "@/config";
import { useModalState } from "@/context/modal.context";
import Button from "@/common/Button";

const Share = () => {
  const { data } = useModalState();

  let url = config.APP_URL + usePathname();
  const [copySuccess, setCopySuccess] = useState("Copy");

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopySuccess("Copy");
    }, 3000);
  };
  return (
    <div className="w-full   mx-auto  bg-brand-light rounded-3xl relative space-y-5">
      <p className="text-[#111111]">Share this link via</p>
      <div className="border-0 flex items-center space-x-4">
        <FacebookShareButton url={url} quote={data} hashtag={"#nextshare"}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={data}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <WhatsappShareButton url={url} title={data} separator=":: ">
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <EmailShareButton url={url} subject={data} body="body">
          <EmailIcon size={40} round />
        </EmailShareButton>
        <TelegramShareButton url={url} title={data}>
          <TelegramIcon size={40} round />
        </TelegramShareButton>
        <TumblrShareButton url={url} title={data}>
          <TumblrIcon size={40} round />
        </TumblrShareButton>
        <WorkplaceShareButton url={url} quote={data}>
          <WorkplaceIcon size={40} round />
        </WorkplaceShareButton>
      </div>
      <p className="text-[#111111] ">Or copy link</p>
      <div className="border rounded p-1 ps-2 flex justify-between items-center">
        <div className="flex items-center flex-1 ">
          <IoIosLink className="me-1" />
          <div className="truncate w-[300px]">{url}</div>
        </div>
        <div className="flex-none">
          <Button
            title={copySuccess}
            btn
            onClick={copyCodeToClipboard}
            className="py-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Share;
