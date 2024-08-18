"use client";
import Button from "@/common/Button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const ExitModal = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="text-brand-link flex items-center mt-10 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <IoIosArrowBack />
        <div className="underline">Back</div>
      </div>
      <Modal size="md" isOpen={open} onClose={() => setOpen(false)}>
        <ModalContent className="py-6 mx-2">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col font-bold text-center py-0">
                <img
                  src="/icons/exitModal.svg"
                  alt="exitModal"
                  className="size-20 mx-auto my-4"
                />
                Don’t leave yet
              </ModalHeader>
              <ModalBody className="px-6 md:px-20">
                <p className="font-medium text-lg text-center">
                  Leaving this page could mean losing your review.
                </p>
              </ModalBody>
              <ModalFooter className="flex flex-col items-center justify-center">
                <Button
                  title="Continue Process"
                  btn
                  variant="file"
                  className="px-8 py-2"
                  onClick={onClose}
                />
                <Button
                  title="Exit the process"
                  btn
                  className={`border-none bg-transparent text-brand font-semibold underline`}
                  onClick={() => router.back()}
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExitModal;
