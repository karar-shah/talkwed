import React from "react";
import { IoMdClose } from "react-icons/io";

interface SheetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  className?: string;
}

const CenterSheet: React.FC<SheetProps> = ({
  isOpen,
  setIsOpen,
  className,
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Modal */}
      <div
        className={`fixed top-1/2 left-1/2 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "-translate-x-1/2 -translate-y-1/2 opacity-100 scale-100 z-50"
            : "-translate-x-1/2 -translate-y-1/2 opacity-0 scale-95 pointer-events-none z-10"
        } bg-white shadow-lg rounded-lg p-6 w-11/12 max-w-md mx-auto`}
      >
        <div className={className}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Remove Table</h2>
            <IoMdClose
              color="#8B8B8B"
              size={24}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Content */}
          <p className="text-gray-700 mb-6">
            Are you sure you want to remove the table? This action cannot be
            undone.
          </p>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Add your remove logic here
                setIsOpen(false);
              }}
              className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterSheet;
