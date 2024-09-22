"use client";

import { useModalAction, useModalState } from "@/context/modal.context";
import AddEvent from "@/templates/Modals/AddEvent/AddEvent";
import AddVendor from "@/templates/Modals/AddVendor";
import AddWaterMark from "@/templates/Modals/AddWaterMark";
import ChangeEmail from "@/templates/Modals/ChangeEmail/ChangeEmail";
import ClientMessageVendor from "@/templates/Modals/ClientMessageVendor";
import CreateCustomDeal from "@/templates/Modals/CreateCustomDeal";
import CreateNewSet from "@/templates/Modals/CreateNewSet";
import CreateQuickShareLink from "@/templates/Modals/CreateQuickShareLink";
import DeleteAccount from "@/templates/Modals/DeleteAccount";
import DeleteChat from "@/templates/Modals/DeleteChat/DeleteChat";
import DeletePhotos from "@/templates/Modals/DeletePhotos/DeletePhotos";
import DeleteTask from "@/templates/Modals/DeleteTask";
import EditCustomDeal from "@/templates/Modals/EditCustomDeal";
import EventBookings from "@/templates/Modals/EventBookings/EventBookings";
import MessageVendor from "@/templates/Modals/MessageVendor";
import RemoveAccess from "@/templates/Modals/RemoveAccess";
import RemoveVendor from "@/templates/Modals/RemoveVendor";
import ReportSender from "@/templates/Modals/ReportSender/ReportSender";
import SaveLink from "@/templates/Modals/SaveLink";
import SetAvailability from "@/templates/Modals/SetAvailability/SetAvailability";
import Share from "@/templates/Modals/Share";
import UploadWaterMarkImage from "@/templates/Modals/UploadWaterMarkImage";
import dynamic from "next/dynamic";
import Modal from ".";
const GetDeal = dynamic(() => import("@/templates/Modals/GetDeal"));
export default function ManagedModal() {
  const { isOpen, view, title, subTitle, size, bodyOnly } = useModalState();
  const { closeModal } = useModalAction();
  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      title={title}
      size={size}
      subTitle={subTitle}
      bodyOnly={bodyOnly}
    >
      {view === "GET_DEAL" && <GetDeal />}
      {view === "MESSAGE_VENDOR" && <MessageVendor />}
      {view === "SHARE" && <Share />}
      {view === "DELETE_TASK" && <DeleteTask />}
      {view === "CLIENT_MESSAGE_VENDOR" && <ClientMessageVendor />}
      {view === "REMOVE_VENDOR" && <RemoveVendor />}
      {view === "ADD_VENDOR" && <AddVendor />}
      {view === "DELETE_ACCOUNT" && <DeleteAccount />}
      {view === "SAVE_LINK" && <SaveLink />}
      {view === "CREATE_CUSTOM_DEAL" && <CreateCustomDeal />}
      {view === "EDIT_CUSTOM_DEAL" && <EditCustomDeal />}
      {view === "CREATE_QUICK_SHARE_LINK" && <CreateQuickShareLink />}
      {view === "REMOVE_ACCESS" && <RemoveAccess />}
      {view === "CREATE_NEW_SET" && <CreateNewSet />}
      {view === "ADD_WATERMARK" && <AddWaterMark />}
      {view === "UPLOAD_WATERMARK_IMAGE" && <UploadWaterMarkImage />}
      {view === "CHANGE_EMAIL" && <ChangeEmail />}
      {view === "DELETE_CHAT" && <DeleteChat />}
      {view ==='REPORT_SENDER' && <ReportSender/> }
      {view === "DELETE_PHOTOS" && <DeletePhotos />}
      {view ==='ADD_EVENT' && <AddEvent/>}
      {view=== 'EVENT_BOOKINGS' && <EventBookings />}
      {view ==='SET_AVAILABILITY' && <SetAvailability />}
    </Modal>
  );
}
