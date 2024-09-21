"use client";
import { useState } from "react";

import { AllChatsHeader } from "./messgeScreenComponents/AllChatHeader";
import { AllChats } from "./messgeScreenComponents/AllChats";
import { ChatsNotDisplayed } from "./messgeScreenComponents/ChatNotDisplayed";
import { DisplayChat } from "./messgeScreenComponents/DisplayChat";

const MessagaesScreen = () => {
  const [isDisplayingChat, setIsDisplayingChat] = useState(false);
  return (
    <div className="flex flex-wrap max-lg:flex-col-reverse">
      <div className="w-full lg:w-3/12 border-r border-collapse border-[#9924E930]">
        <div className="border-[#9924E930] py-[18px] border-b pl-7 pr-4 bg-[#9924E90D]">
          <AllChatsHeader />
        </div>
        <AllChats setIsDisplayingChat={setIsDisplayingChat} />
      </div>
      <div className="w-full lg:w-9/12 flex flex-col flex-1">
        {isDisplayingChat ? (
          <DisplayChat setIsDisplayingChat={setIsDisplayingChat} />
        ) : (
          <ChatsNotDisplayed />
        )}
      </div>
    </div>
  );
};
export default MessagaesScreen;