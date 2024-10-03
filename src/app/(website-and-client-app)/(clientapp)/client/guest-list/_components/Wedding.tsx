"use client";
import { useModalAction } from "@/context/modal.context";
import EditGuestSheet from "@/templates/Sheets/EditGuestSheet";
import MoveGuestSheet from "@/templates/Sheets/MoveGuestSheet";
import { Progress, Tab, Tabs } from "@nextui-org/react";

import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import GuestsTable from "./GuestsTable";
const overviewList = [
  {
    event: "Wedding",
    guests: 3,
    attending: 3,
    declined: 0,
    imgSrc: "/icons/image 129.svg",
  },
  {
    event: "Rehearsal Dinner",
    guests: 2,
    attending: 2,
    declined: 0,
    imgSrc: "/icons/image 129 (1).svg",
  },
  {
    event: "Shower",
    guests: 3,
    attending: 2,
    declined: 0,
    imgSrc: "/icons/image 129 (2).svg",
  },
];
const groupsList = [
  { title: "Couples", number: "2" },
  { title: "Groom's Family", number: "4" },
  { title: "Bride's Family", number: "4" },
  { title: "Unassigned", number: "6" },
  { title: "Coworkers", number: "0" },
  { title: "Mutual Friends", number: "0" },
];
const Wedding = () => {
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
      <h1 className="text-2xl text-[#444444] font-bold mb-6">Wedding</h1>
      <div className="-m-2.5 flex flex-wrap">
        {overviewList.map((item) => (
          <div
            className="p-2.5 w-4/12 flex flex-col flex-1"
            key={item.event}
            data-testid="overview"
          >
            <div
              key={item.event}
              className="border border-[#DADADA] rounded-lg flex flex-col flex-1 py-4 px-6"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-bold text-[#5A5A5A]">
                    {item.event}
                  </p>
                  <div>
                    <p className="font-medium text-[#6C6C6C]">
                      <span className="font-bold text-xl">{item.guests}</span>{" "}
                      Guests
                    </p>
                    <p className="font-medium text-[#6C6C6C]">
                      <span className="font-bold text-xl">
                        {item.attending}
                      </span>{" "}
                      Attending
                    </p>
                    <p className="font-medium text-[#6C6C6C]">
                      <span className="font-bold text-xl">{item.declined}</span>{" "}
                      Declined
                    </p>
                  </div>
                </div>
                <img src={item.imgSrc} alt="decor" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col mt-16">
        <Tabs aria-label="Options">
          <Tab key="groups" title="groups">
            <div className="border border-[#DADADA] rounded-lg">
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
          </Tab>
          <Tab key="summary" title="summary">
          <div className=" flex -m-3.5">
      <div className="w-8/12 p-3.5">
        <div className="flex flex-col  space-y-8">
          <SeatingCharts />
          <InvitationsCard />
          <Menu />
        </div>
      </div>
      <div className="w-4/12 p-3.5">
        <div className=" border border-[#DADADA] rounded-[10px] pt-5 pb-24 lg:px-8 drop-shadow">
          <p className="text-[#444444] font-bold text-xl ">Groups</p>
          <div className="flex flex-col divide-y-1 divide-[#D8D8D8]">
            {groupsList.map((item) => (
              <Group title={item.title} number={item.number} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Wedding;

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
const SeatingCharts = () => {
  return (
    <div className="lg:px-5 pb-9 pt-3 border border-[#DADADA] rounded-[10px] drop-shadow">
      <p className="font-bold text-xl text-[#444444]">Seating charts</p>
      <div className="flex justify-between lg:mr-9">
        <img src="/icons/Group 5930.svg" alt="" />
        <Seating title="Tables" number="3" />
        <div className="border-r border-[#DEDEDE]"></div>
        <Seating title="Seats Available" number="6" />
        <div className="border-r border-[#DEDEDE]"></div>
        <Seating title="Seats Assigned" number="3" />
      </div>
    </div>
  );
};

const Seating = ({ title, number }: any) => {
  return (
    <div className="">
      <p className="font-semibold text-lg text-[#5A5A5A] ">{title}</p>
      <p className="text-[#6C6C6C] font-medium">
        <span>{number}</span> Added
      </p>
    </div>
  );
};
const InvitationsCard = () => {
  return (
    <div className="pt-3 lg:px-5 border border-[#DADADA] rounded-[10px] drop-shadow">
      <p className="font-bold text-xl text-[#444444]">Invitations</p>

      <div className="flex  justify-between my-9 lg:mr-9">
        <div className="flex space-x-6">
          <img src="/icons/image 145.svg" alt="" />
          <div>
            <p className="font-semibold text-lg text-[#5A5A5A]">Sent Invites</p>
            <p className="text-[#6C6C6C] font-medium">
              <span className="font-semibold">0 </span> Sent
            </p>
          </div>
        </div>
        <div className="border-r border-[#DEDEDE]"></div>
        <div className="flex space-x-6">
          <img src="/icons/image 146.svg" alt="" />
          <div>
            <p className="font-semibold text-lg text-[#5A5A5A]">
              Pending Invites
            </p>
            <p className="text-[#6C6C6C] font-medium">
              <span className="font-semibold">6</span> Not sent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const menuList = [
    { title: "Beef", number: 0, imgSrc: "/icons/image 145 (0).svg" },
    { title: "Chicken", number: 0, imgSrc: "/icons/image 145 (1).svg" },
    { title: "Child meal", number: 0, imgSrc: "/icons/image 145 (2).svg" },
    { title: "Fish", number: 0, imgSrc: "/icons/image 145 (3).svg" },
    { title: "Lamb", number: 0, imgSrc: "/icons/image 145 (4).svg" },
    { title: "Vegetarian", number: 0, imgSrc: "/icons/image 145 (5).svg" },
    { title: "Others", number: 0, imgSrc: "/icons/image 145 (6).svg" },
  ];
  return (
    <div className="lg:px-5 pt-3 border border-[#DADADA] rounded-[10px] drop-shadow">
      <p className="font-bold text-xl text-[#444444]">Menu</p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 mt-7 ">
        {menuList.map((item) => (
          <div key={item.title} className="flex  space-x-3 mb-11">
            <img src={item.imgSrc} alt="" />
            <div>
              <p className="font-semibold text-lg text-[#5A5A5A] ">
                {item.title}
              </p>
              <p className="text-[#6C6C6C] font-medium leading-5">
                <span className="font-semibold">{item.number}</span> Sent
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Group = ({ title, number }: any) => {
  return (
    <div className="flex flex-col space-y-2 py-4">
      <p className="font-semibold text-lg text-[#5A5A5A]">
        {title} <span className="font-medium text-base">({number} guests)</span>
      </p>
      <Progress
        aria-label="Loading..."
        color="secondary"
        value={number}
        maxValue={20}
        className=""
        size="md"
      />
    </div>
  );
};