"use client";

import dynamic from "next/dynamic";
import { useModalAction, useModalState } from "@/context/modal.context";
import Modal from ".";
import MessageVendor from "@/templates/Modals/MessageVendor";
import Share from "@/templates/Modals/Share";
const GetDeal = dynamic(() => import("@/templates/Modals/GetDeal"));
export default function ManagedModal() {
  const { isOpen, view, title, subTitle, size } = useModalState();
  const { closeModal } = useModalAction();
  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      title={title}
      size={size}
      subTitle={subTitle}
    >
      {view === "GET_DEAL" && <GetDeal />}
      {view === "MESSAGE_VENDOR" && <MessageVendor />}
      {view === "SHARE" && <Share />}
    </Modal>
  );
}
