"use client";
import { useModalAction } from "@/context/modal.context";
import { Button, Input } from "@nextui-org/react";
import { LuInfo } from "react-icons/lu";
const AccountSettings = () => {
  const { openModal } = useModalAction();
  return (
    <>
      <div className="space-y-8">
        <h2 className="font-bold text-[#444444] text-2xl">Account Settings</h2>
        <div className="w-full md:max-w-[1033px] border border-[#DADADA] rounded-md overflow-hidden">
          <h3 className="font-semibold text-lg  bg-[#F9F2FE] text-[#535353] py-3.5 px-12 ">
            Email Address
          </h3>
          <section className="pl-12 pr-10 pt-7 pb-8 space-y-9">
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
                  className={"text-brand-heading "}
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
            <button className="font-medium text-medium text-brand border-1 border-brand rounded-lg px-[18px] py-3">
              Change Email
            </button>
          </section>
        </div>
        <div className="w-full md:max-w-[1033px] border border-[#DADADA] rounded-md overflow-hidden">
          <h3 className="font-semibold text-lg bg-[#F9F2FE] text-[#535353] py-3.5 px-12">
            Account Password
          </h3>
          <section className="pl-12 pr-10 pt-7 pb-8 space-y-9">
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
                  className={" text-brand-heading "}
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
                  className={" text-brand-heading "}
                  classNames={{
                    inputWrapper: "input-wrapper input-border px-5 py-3 h-fit",
                    input: "input text-lg max-md:text-sm",
                  }}
                />
              </div>
              <div className="border border-[#3AC3D6] bg-[#ebf9fb] rounded-[4px] flex px-2.5 py-2 items-center space-x-2">
                <LuInfo size={24} color="#3AC3D6" />

                <p className="text-sm  text-[#686868]">
                  An email will be sent to your address. Verify it to update
                  your account password.
                </p>
              </div>
            </div>
            <button className="font-medium text-medium text-brand border-1 border-brand rounded-lg px-[18px] py-3">
              Change Password
            </button>
          </section>
        </div>
          
        <div className="w-full md:max-w-[1033px] border border-[#DADADA] rounded-md overflow-hidden">
          <h2 className="font-semibold text-lg py-3.5 px-12 bg-[#F9F2FE] text-[#535353] ">
            Delete Account
          </h2>
          <div className="px-12 pt-7 pb-8 space-y-5">
            <p className="font-semibold text-medium text-[#6C6C6C] ">
              Your account and all saved information will be deleted, but your
              forum posts will remain there. Are you sure you want to delete
              your account?
            </p>
            <Button
              variant="ghost"
              onClick={() =>
                openModal({
                  title: "Delete Task",
                  modal: "DELETE_ACCOUNT",
                  size: "lg",
                  bodyOnly: true,
                })
              }
              className="bg-transparent font-medium border-none text-medium text-brand underline decoration-brand hover:!bg-transparent px-0"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
