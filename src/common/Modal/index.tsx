import { MODAL_SIZE } from "@/context/modal.context";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader
} from "@nextui-org/modal";
import React, { FC } from "react";
type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  title: string;
  size?: MODAL_SIZE;
  subTitle?: string;
  bodyOnly?: boolean;
};

const ModalLayout: FC<ModalProps> = ({
  children,
  open,
  onClose,
  title,
  size = "md",
  bodyOnly = false,
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
        {!bodyOnly && <ModalHeader className="flex flex-col">
          {title}
          {subTitle && (
            <p className="text-sm font-normal text-[#353535]">{subTitle}</p>
          )}
          <hr className="mt-1" />
        </ModalHeader>}
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
