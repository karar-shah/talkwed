"use client";
import { useState } from "react";
import AccountSettings from "./_components/AccountSettings";
import UserInformation from "./_components/UserInformation";

enum SETTINGS {
  "USER_INFORMATION",
  "ACCOUNT_SETTINGS",
  "NOTIFICATIONS",
}

const Page = () => {
  const [selectedSetting, setSelectedSetting] = useState<SETTINGS>(SETTINGS.USER_INFORMATION);
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      <div className="flex flex-wrap -mx-3 pt-5 pb-20">
        <div className="w-full md:w-3/12 px-3">
          <h2 className="font-bold text-[#595959] text-lg py-6">Settings</h2>
          <ul>
            <li className="cursor-pointer"  onClick={()=>setSelectedSetting(SETTINGS.USER_INFORMATION)}>User Information</li>
            <li className="cursor-pointer" onClick={()=>setSelectedSetting(SETTINGS.ACCOUNT_SETTINGS)}>Account Settings</li>
            <li className="cursor-pointer" onClick={()=>setSelectedSetting(SETTINGS.NOTIFICATIONS)}>Notifications</li>
          </ul>
        </div>
        <div className="w-full md:w-9/12 px-3">
        {selectedSetting === SETTINGS.USER_INFORMATION && <UserInformation />}
        {selectedSetting === SETTINGS.ACCOUNT_SETTINGS && <AccountSettings />}
        </div>
      </div>
    </div>
  );
};

export default Page;
