"use client";

import { useModalAction, useModalState } from "@/context/modal.context";
import AddVendor from "@/templates/Modals/AddVendor";
import ClientMessageVendor from "@/templates/Modals/ClientMessageVendor";
import CreateCustomDeal from "@/templates/Modals/CreateCustomDeal";
import DeleteAccount from "@/templates/Modals/DeleteAccount";
import DeleteTask from "@/templates/Modals/DeleteTask";
import EditCustomDeal from "@/templates/Modals/EditCustomDeal";
import MessageVendor from "@/templates/Modals/MessageVendor";
import RemoveVendor from "@/templates/Modals/RemoveVendor";
import SaveLink from "@/templates/Modals/SaveLink";
import Share from "@/templates/Modals/Share";
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
    </Modal>
  );
}
