import React, { FC, Fragment } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { MODAL_SIZE } from "@/context/modal.context";
type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  title: string;
  size?: MODAL_SIZE;
  subTitle?: string;
};

const ModalLayout: FC<ModalProps> = ({
  children,
  open,
  onClose,
  title,
  size = "md",
  subTitle,
}) => {
  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      size={size}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col ">
          {title}
          {subTitle && (
            <p className="text-sm font-normal text-[#353535]">{subTitle}</p>
          )}
          <hr className="mt-1" />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
