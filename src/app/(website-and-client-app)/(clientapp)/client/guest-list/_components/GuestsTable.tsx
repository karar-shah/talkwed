"use client";
import { useModalAction } from "@/context/modal.context";
import {
  Avatar,
  Button,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

const GuestsTable = ({
  isOpenEditGuestSheet,
  setIsOpenMoveGuestSheet,
}: any) => {
  return (
    <Table
      aria-label="Couple Table"
      classNames={{
        wrapper: "rounded-none shadow-none p-0",
      }}
    >
      {/* couple header  */}
      <TableHeader className="px-16">
        <TableColumn className="lg:px-16 py-5">
          <p className="text-[#444444] text-lg font-bold">
            Couple <span className="text-base font-medium">(2)</span>
          </p>
        </TableColumn>
        <TableColumn className="font-semibold text-[#868686] text-base">
          Wedding
        </TableColumn>
        <TableColumn className="font-semibold text-[#868686] text-base">
          Rehearsal Dinner
        </TableColumn>
        <TableColumn className="font-semibold text-[#868686] text-base">
          Shower
        </TableColumn>
        <TableColumn>
          <EditBtn />
        </TableColumn>
      </TableHeader>
      <TableBody>
        {/* Couple rows  */}
        <TableRow className="">
          <TableCell className="font-semibold text-lg text-[#5A5A5A] lg:pl-7 py-5">
            <div className="flex items-center space-x-5">
              <Checkbox
                radius="none"
                color="secondary"
                size="sm"
                classNames={{
                  wrapper: "rounded-[3px]",
                }}
              />
              <Guest
                name="Smith"
                imgSrc="https://avatar.iran.liara.run/public/46"
              />
            </div>
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell>
            <DotsPopOver
              setIsOpenEditGuestSheet={isOpenEditGuestSheet}
              setIsOpenMoveGuestSheet={setIsOpenMoveGuestSheet}
            />
          </TableCell>
        </TableRow>
        <TableRow className="">
          <TableCell className="font-semibold text-lg text-[#5A5A5A] lg:pl-7 py-5">
            <div className="flex items-center space-x-5">
              <Checkbox
                radius="none"
                color="secondary"
                size="sm"
                classNames={{
                  wrapper: "rounded-[3px]",
                }}
              />
              <Guest
                name="Emily"
                imgSrc="https://avatar.iran.liara.run/public/80"
              />
            </div>
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell>
            <DotsPopOver
              setIsOpenEditGuestSheet={isOpenEditGuestSheet}
              setIsOpenMoveGuestSheet={setIsOpenMoveGuestSheet}
            />
          </TableCell>
        </TableRow>
        {/* Groom Family Header  */}
        <TableRow className="bg-[#f4f4f5]">
          <TableCell className="lg:px-16 py-5">
            <p className="text-[#444444] text-lg font-bold">
              Groom Family <span className="text-base font-medium">(1)</span>
            </p>
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Wedding
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Rehearsal Dinner
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Shower
          </TableCell>
          <TableCell>
            <EditBtn />
          </TableCell>
        </TableRow>
        {/* Groom Family Rows  */}
        <TableRow>
          <TableCell className="font-semibold text-lg text-[#5A5A5A] lg:pl-7 py-5">
            <div className="flex items-center space-x-5">
              <Checkbox
                radius="none"
                color="secondary"
                size="sm"
                classNames={{
                  wrapper: "rounded-[3px]",
                }}
              />
              <Guest
                name="Jack Tailer"
                imgSrc="https://avatar.iran.liara.run/public/48"
              />
            </div>
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell className="font-medium text-lg text-[#5A5A5A]">
            <Attending />
          </TableCell>
          <TableCell>
            <DotsPopOver
              setIsOpenEditGuestSheet={isOpenEditGuestSheet}
              setIsOpenMoveGuestSheet={setIsOpenMoveGuestSheet}
            />
          </TableCell>
        </TableRow>
        {/* Unassigned   */}
        <TableRow className="bg-[#f4f4f5]">
          <TableCell className="lg:px-16 py-5">
            <p className="text-[#444444] text-lg font-bold">
              Unassigned <span className="text-base font-medium">(0)</span>
            </p>
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Wedding
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Rehearsal Dinner
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Shower
          </TableCell>
          <TableCell>
            <EditBtn />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={5} aria-colspan={5} className="lg:pl-14 py-5">
            <NoGuests />
          </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
        </TableRow>
        {/* Co-workers   */}
        <TableRow className="bg-[#f4f4f5]">
          <TableCell className="lg:px-16 py-5">
            <p className="text-[#444444] text-lg font-bold">
              Coworkers <span className="text-base font-medium">(0)</span>
            </p>
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Wedding
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Rehearsal Dinner
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Shower
          </TableCell>
          <TableCell>
            <EditBtn />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={5} aria-colspan={5} className="lg:pl-14 py-5">
            <NoGuests />
          </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
        </TableRow>
        {/* Mutual Friends   */}
        <TableRow className="bg-[#f4f4f5]">
          <TableCell className="lg:px-16 py-5">
            <p className="text-[#444444] text-lg font-bold">
              Mutual Friends <span className="text-base font-medium">(0)</span>
            </p>
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Wedding
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Rehearsal Dinner
          </TableCell>
          <TableCell className="font-semibold text-[#868686] text-base">
            Shower
          </TableCell>
          <TableCell>
            <EditBtn />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={5} aria-colspan={5} className="lg:pl-14 py-5">
            <NoGuests />
          </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
          <TableCell className="hidden"> </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default GuestsTable;

const DotsPopOver = ({
  setIsOpenEditGuestSheet,
  setIsOpenMoveGuestSheet,
}: any) => {
  const { openModal } = useModalAction();
  const [isOpenPopOver, setIsOpenPopOver] = useState(false);
  return (
    <div>
      <Popover placement="bottom" showArrow={true} isOpen={isOpenPopOver}>
        <PopoverTrigger>
          <Button variant="light" className="h-fit min-w-1 px-0">
            <IoEllipsisVertical
              color="#828282"
              size={22}
              onClick={() => setIsOpenPopOver(true)}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-md px-1">
          <div className="">
            <p
              className="py-1.5 text-[#5A5A5A] font-medium text-lg px-5 cursor-pointer"
              onClick={() => {
                setIsOpenEditGuestSheet(true);
                setIsOpenPopOver(false);
              }}
            >
              Edit
            </p>
            <div className="border-t border-[#D4D4D4]"></div>
            <p
              className="py-1.5 text-[#5A5A5A] font-medium text-lg px-5 cursor-pointer"
              onClick={() => {
                setIsOpenMoveGuestSheet(true);
                setIsOpenPopOver(false);
              }}
            >
              Move
            </p>
            <div className="border-t border-[#D4D4D4]"></div>
            <p
              className="py-1.5 text-[#5A5A5A] font-medium text-lg px-5 cursor-pointer"
              onClick={() => {
                setIsOpenPopOver(false);
              }}
            >
              Send Invite
            </p>
            <div className="border-t border-[#D4D4D4]"></div>
            <p
              className="py-1.5 text-[#5A5A5A] font-medium text-lg px-5 cursor-pointer"
              onClick={() => {
                setIsOpenPopOver(false);
                openModal({
                  title: "Remove Guests",
                  size: "xl",
                  modal: "REMOVE_GUEST",
                });
              }}
            >
              Remove
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
const Attending = () => {
  const [attendingStatus, setAttendingStatus] = useState("Attending");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center">
      <p className="mr-0.5 leading-5">{attendingStatus}</p>
      <Popover
        placement="bottom"
        showArrow
        isOpen={isOpen}
        shouldCloseOnInteractOutside={() => true}
      >
        <PopoverTrigger>
          <Button variant="light" className="h-fit min-w-1 px-0">
            <FaAngleDown
              color="#656565"
              size={18}
              onClick={() => setIsOpen(true)}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-md px-1">
          <div className="">
            <p
              className="px-5 py-1.5 font-semibold text-lg text-[#5A5A5A] cursor-pointer"
              onClick={() => {
                setAttendingStatus("Attending");
                setIsOpen(false);
              }}
            >
              Attending
            </p>
            <div className="border-t border-[#D4D4D4]"></div>
            <p
              className="px-5 py-1.5 font-semibold text-lg text-[#5A5A5A] cursor-pointer"
              onClick={() => {
                setAttendingStatus("Pending");
                setIsOpen(false);
              }}
            >
              Pending
            </p>
            <div className="border-t border-[#D4D4D4]"></div>
            <p
              className="px-5 py-1.5 font-semibold text-lg text-[#5A5A5A] cursor-pointer"
              onClick={() => {
                setAttendingStatus("Canceled");
                setIsOpen(false);
              }}
            >
              Canceled
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
const EditBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModalAction();
  return (
    <>
      <Popover placement="bottom" isOpen={isOpen}>
        <PopoverTrigger>
          <Button
            variant="light"
            className="h-fit px-0 min-w-7 gap-0 font-semibold text-base text-[#6B14A6] underline"
            onClick={() => setIsOpen(true)}
          >
            Edit
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-md">
          <div className="px-1 py-2">
            <p
              className="text-[#5A5A5A] font-medium text-base cursor-pointer"
              onClick={() => {
                openModal({
                  title: "Edit Group Name",
                  size: "xl",
                  modal: "EDIT_GROUP_NAME",
                });
                setIsOpen(false);
              }}
            >
              Rename Group
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
const Guest = ({ name, imgSrc }: any) => {
  return (
    <div className="flex items-center space-x-2">
      <Avatar src={imgSrc} />
      <p className="font-medium text-[#868686]">{name}</p>
    </div>
  );
};
const NoGuests = () => {
  return (
    <div className="flex space-x-1 items-center text-[#5A5A5A] text-lg font-medium">
      <img src="/icons/image 132.svg" alt="No guests" />
      No Guests in this list
    </div>
  );
};
