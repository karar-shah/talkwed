"use client";
import {
  Input
} from "@nextui-org/react";
import Link from "next/link";
import { LuInfo } from "react-icons/lu";
const AccountSettings = () => {
  return (
    <>
      <div className="space-y-8">
        <h2 className="font-bold text-[#444444] text-2xl">Account Settings</h2>
        <div className="w-full md:max-w-[1033px] border border-[#DADADA] rounded-md overflow-hidden">
          <h3 className="font-semibold text-lg  bg-[#F9F2FE] text-[#535353] py-3 px-12 ">
            Email Address
          </h3>
          <section className="px-12 py-8 space-y-9">
            <div className="space-y-3">
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className={"font-semibold text-base text-[#6C6C6C]"}
                >
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter the new email"
                  size="md"
                  variant="bordered"
                  type="email"
                  className={"my-2 text-brand-heading "}
                  classNames={{
                    inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
                    input: "input text-lg max-md:text-sm",
                  }}
                />
              </div>
              <div className="border border-[#3AC3D6] bg-[#ebf9fb] rounded-[4px] flex px-2.5 py-2 items-center space-x-2">
                <LuInfo size={24} color="#3AC3D6" />

                <p className="text-sm  text-[#686868]">
                  An email will be sent to your new address. Verify it to update
                  your account email.
                </p>
              </div>
            </div>
            <button className="font-medium text-medium text-brand border-1 border-brand rounded-lg px-4 py-3">
              Change Email
            </button>
          </section>
        </div>
        <div className="w-full md:max-w-[1033px] border border-[#DADADA] rounded-md overflow-hidden">
          <h3 className="font-semibold text-lg bg-[#F9F2FE] text-[#535353] py-3 px-12">
            Account Password
          </h3>
          <section className="px-12 py-8 space-y-9">
            <div className="space-y-3">
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className={"font-semibold text-base text-[#6C6C6C]"}
                >
                  Password
                </label>
                <Input
                  id="email"
                  placeholder="Enter new password"
                  size="md"
                  variant="bordered"
                  type="email"
                  className={"my-2 text-brand-heading "}
                  classNames={{
                    inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
                    input: "input text-lg max-md:text-sm",
                  }}
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className={"font-semibold text-base text-[#6C6C6C]"}
                >
                  Confirm password
                </label>
                <Input
                  id="email"
                  placeholder="Confirm new password"
                  size="md"
                  variant="bordered"
                  type="email"
                  className={"my-2 text-brand-heading "}
                  classNames={{
                    inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
                    input: "input text-lg max-md:text-sm",
                  }}
                />
              </div>
              <p className="border border-[#3AC3D6] bg-[#ebf9fb] rounded-[4px] flex items-start px-2.5 py-2 space-x-2">
                <LuInfo size={24} color="#3AC3D6" />

                <span className="text-sm  text-[#686868]">
                  An email will be sent to your new address. Verify it to update
                  your account email.
                </span>
              </p>
            </div>
            <button className="font-medium text-medium text-brand border-1 border-brand rounded-lg px-4 py-3">
              Change Password
            </button>
          </section>
        </div>
        <div className="w-full md:max-w-[1033px] border border-[#DADADA] rounded-md overflow-hidden">
          <h3 className="font-semibold text-lg bg-[#F9F2FE] text-[#535353] py-3 px-12">
            Linked Account
          </h3>
          <section className="px-12 py-8 space-y-9">
            <div className="space-y-3">
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className={"font-semibold text-base text-[#6C6C6C]"}
                >
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter email address"
                  size="md"
                  variant="bordered"
                  type="email"
                  className={"my-2 text-brand-heading "}
                  classNames={{
                    inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
                    input: "input text-lg max-md:text-sm",
                  }}
                />
              </div>
              <p className="border border-[#3AC3D6] bg-[#ebf9fb] rounded-[4px] flex items-start px-2.5 py-2 space-x-2">
                <LuInfo size={24} color="#3AC3D6" />

                <span className="text-sm text-[#686868]">
                  Plan together with your partner! Link accounts to share your
                  wedding details and planning tools. Please note that this will
                  overwrite your partner{"'"}s current app info.
                </span>
              </p>
            </div>
            <button className="font-medium text-medium text-brand border-1 border-brand rounded-lg px-4 py-3">
              Link Account
            </button>
          </section>
        </div>
        <div className="w-full md:max-w-[1033px] border border-[#DADADA] rounded-md overflow-hidden space-y-7 ">
          <h2 className="font-semibold text-lg py-3 px-12 bg-[#F9F2FE] text-[#535353] ">
            Delete Account
          </h2>
          <div className="px-12 space-y-7">
            <p className="font-semibold text-medium text-[#6C6C6C] ">
              Your account and all saved information will be deleted, but your
              forum posts will remain there. Are you sure you want to delete
              your account?
            </p>
            <Link
              href="/"
              className="font-medium text-brand text-medium underline decoration-brand"
            >
              Delete Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
