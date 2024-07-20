import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ModalProvider } from "@/context/modal.context";
import ManagedModal from "@/common/Modal/ManagedModal";

const Providers = ({ children, ...rest }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      <ManagedModal />
      <NextUIProvider>{children}</NextUIProvider>
    </ModalProvider>
  );
};

export default Providers;
