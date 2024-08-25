"use client";
import { cn } from "@nextui-org/system";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface SheetProps {
  header?: string | React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const Sheet: React.FC<SheetProps> = ({
  header,
  isOpen,
  setIsOpen,
  className,
  children,
}) => {
  // const toggleSheet = () => {
  //   setIsOpen(!isOpen);
  // };

  // useEffect(() => {
  //   setIsOpen(open);
  // }, [open]);

  return (
    <div>
      {/* <button
        onClick={toggleSheet}
        className="fixed z-[999] top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Sheet
      </button> */}

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 z-20" : "opacity-0 pointer-events-none -z-10"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-2/5 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out  z-[999]  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={cn(className)}>
          <div className="flex items-center justify-between">
            {header}
            <IoMdClose
              color="#8B8B8B"
              size={24}
              className="absolute top-8 right-8"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Sheet;
