"use client";
import { useModalAction } from "@/context/modal.context";
import EditGuestSheet from "@/templates/Sheets/EditGuestSheet";
import MoveGuestSheet from "@/templates/Sheets/MoveGuestSheet";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure
} from "@nextui-org/react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import GuestsTable from "./GuestsTable";
const Overview = () => {
  const [isOpenEditGuestSheet, setIsOpenEditGuestSheet] = useState(false);
  const [isOpenMoveGuestSheet, setIsOpenMoveGuestSheet] = useState(false);
  return (
    <>
      <EditGuestSheet
        isOpen={isOpenEditGuestSheet}
        setIsOpen={setIsOpenEditGuestSheet}
      />
      <MoveGuestSheet
        isOpen={isOpenMoveGuestSheet}
        setIsOpen={setIsOpenMoveGuestSheet}
      />
      <div className="border border-[#DADADA]">
        <div className="lg:px-7  flex justify-between items-center py-4">
          <SearchBox />
          <ButtonsDiv />
        </div>
        <div className="border-t border-[#DEDEDE] "></div>
        <SelectAllDiv />
        <GuestsTable
          isOpenEditGuestSheet={setIsOpenEditGuestSheet}
          setIsOpenMoveGuestSheet={setIsOpenMoveGuestSheet}
        />
      </div>
    </>
  )
}

export default Overview

const SearchBox = () => {
  return (
    <div className="w-4/12">
      <Input
        name="country"
        placeholder="Search Guests..."
        size="md"
        type="text"
        startContent={<IoSearchOutline color="#848484" size={24} />}
        classNames={{
          label: "text-black dark:text-black",
          input: [
            "bg-[#F9F9F9] dark:bg-[#f9f9f9]",
            "text-[#636363] dark:text-[#636363]",
            "placeholder:text-[#636363] dark:placeholder:text-[#636363] text-base ",
          ],

          inputWrapper:
            "border border-[#C9C9C9] bg-[#F9F9F9] lg:pl-9 rounded-lg py-3 px-[13px] h-12 text-red-300 flex",
        }}
      />
    </div>
  );
};

const ButtonsDiv = () => {
  const { openModal } = useModalAction();
  return (
    <div className="flex space-x-4">
      <Button
        variant="bordered"
        size="lg"
        onClick={() => {
          openModal({
            title: "Create New Group",
            size: "lg",
            modal: "CREATE_NEW_GROUP",
          });
        }}
        className="text-brand border border-brand rounded-lg font-medium px-4 cursor-pointer"
      >
        <span className="text-3xl font-light">+</span>Group
      </Button>
      <Button
        variant="solid"
        size="lg"
        className="text-white  bg-brand rounded-lg font-medium px-4 cursor-pointer"
      >
        <span className="text-3xl font-light">+</span>Guest
      </Button>
    </div>
  );
};

const SelectAllDiv = () => {
  const { openModal } = useModalAction();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex justify-between pt-6 pb-2 lg:pl-7 lg:pr-10">
        <div className="flex space-x-5 items-center ">
          <Checkbox
            radius="none"
            color="secondary"
            size="sm"
            classNames={{
              wrapper: "rounded-[3px]",
            }}
          />
          <p className="font-medium text-[#868686]">Select all</p>
        </div>
        <div className="flex">
          {/* send invite */}
          <Button
            onPress={onOpen}
            variant="light"
            className="flex space-x-2 items-center cursor-pointer h-[22px] gap-0 px-0"
          >
            <MdOutlineMailOutline color="#848484" size={22} />
            <p className="text-[#313131] text-sm font-medium">Send Invite</p>
          </Button>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody>
                    <div className="flex flex-col justify-center items-center pt-6">
                      <img
                        src="/icons/info-icon.svg"
                        alt=""
                        className="size-[75px] mb-4"
                      />
                      <p className="font-semibold text-lg text-[#424242] text-center">
                        Email Addresses Required for Invites
                      </p>
                      <p className="text-[#424242] text-center">
                        You can send invites only to the guests from your list
                        who have their email addresses saved.
                      </p>
                      <Button
                        variant="solid"
                        onPress={() => {
                          openModal({
                            title: "Send Invite",
                            size: "2xl",
                            modal: "SEND_INVITE",
                          });
                          onClose();
                        }}
                        className="bg-brand text-white text-lg font-medium rounded-lg w-28 my-6 h-12"
                      >
                        Got It
                      </Button>
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>

          <div className="border-r border-[#BEBEBE] mx-4 "></div>
          <Button
            variant="light"
            className="flex space-x-2 items-center cursor-pointer h-[22px] gap-0 px-0"
            onClick={() => {
              openModal({
                title: "Remove All Guests",
                size: "xl",
                modal: "REMOVE_ALL_GUESTS",
              });
            }}
          >
            <RiDeleteBin5Line color="#848484" size={22} />
            <p className="text-[#313131] text-sm font-medium">Remove</p>
          </Button>
        </div>
      </div>
    </>
  );
};