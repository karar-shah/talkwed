"use client";
import { useState } from "react";
import AccountSettings from "./_components/AccountSettings";
import Notifications from "./_components/Notifications";
import UserInformation from "./_components/UserInformation";

enum SETTINGS {
  "USER_INFORMATION",
  "ACCOUNT_SETTINGS",
  "NOTIFICATIONS",
}

const Page = () => {
  const [selectedSetting, setSelectedSetting] = useState<SETTINGS>(
    SETTINGS.USER_INFORMATION
  );
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="flex flex-wrap -mx-3 pt-5 pb-20">
        <nav className="w-full md:w-3/12 pl-3 pr-12">
          <p className="font-bold text-[ #595959] text-lg">Settings</p>
          <ul className="space-y-4 pt-10">
            <li
              onClick={() => setSelectedSetting(SETTINGS.USER_INFORMATION)}
              className={`hover:cursor-pointer font-medium  text-medium text-[#6F6F6F] ${
                selectedSetting === SETTINGS.USER_INFORMATION
                  ? "font-semibold text-[#5A5A5A] border-l-5 border-[#9924E9] py-3 pl-[15px] pr-[18px] bg-[#F9F2FE] "
                  : ""
              }`}
            >
              User Information
            </li>
            <li
              onClick={() => setSelectedSetting(SETTINGS.ACCOUNT_SETTINGS)}
              className={`hover:cursor-pointer font-medium  text-medium text-[#6F6F6F] ${
                selectedSetting === SETTINGS.ACCOUNT_SETTINGS
                  ? "font-semibold text-[#5A5A5A] border-l-5 border-[#9924E9] py-3 pl-[15px] pr-[18px] bg-[#F9F2FE] "
                  : ""
              }`}
            >
              Account Settings
            </li>
            <li
              onClick={() => setSelectedSetting(SETTINGS.NOTIFICATIONS)}
              className={`hover:cursor-pointer font-medium  text-medium text-[#6F6F6F] ${
                selectedSetting === SETTINGS.NOTIFICATIONS
                  ? "font-semibold text-[#5A5A5A] border-l-5 border-[#9924E9] py-3 pl-[15px] pr-[18px] bg-[#F9F2FE] "
                  : ""
              }`}
            >
              Notifications
            </li>
          </ul>
        </nav>
        <div className="w-full md:w-9/12 px-3">
          {selectedSetting === SETTINGS.USER_INFORMATION && <UserInformation />}
          {selectedSetting === SETTINGS.ACCOUNT_SETTINGS && <AccountSettings />}
          {selectedSetting === SETTINGS.NOTIFICATIONS && <Notifications />}
        </div>
      </div>
    </div>
  );
};

export default Page;
