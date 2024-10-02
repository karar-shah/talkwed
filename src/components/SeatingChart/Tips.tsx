import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const tipsData = [
  {
    id: 1,
    title: "Tables",
    description: "Drag and drop the table to canvas and place where you want",
    targetSelector: "#section-one",
    position: "right",
  },
  {
    id: 2,
    title: "Charts",
    description: "Click on the chart icon to add a new chart",
    targetSelector: "#section-two",
    position: "right",
  },
  {
    id: 3,
    title: "Filters",
    description: "Use filters to narrow down your data",
    targetSelector: "#section-two",
    position: "right",
  },
];

const Tips = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState<number | null>(0);
  const [targetPosition, setTargetPosition] = useState({ top: 166, left: 300 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentTipIndex === null || currentTipIndex >= tipsData.length) {
      setIsVisible(false);
      return;
    }

    const currentTip = tipsData[currentTipIndex];
    const targetElement = document.querySelector(currentTip.targetSelector);

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const position = calculatePosition(rect, currentTip.position);
      setTargetPosition(position);
    } else {
      console.log("Target not found:", currentTip.targetSelector);
      // If target not found, skip to next tip
      handleNext();
    }
  }, [currentTipIndex]);

  const calculatePosition = (rect: any, position: any) => {
    const tipWidth = 300; // Adjust based on your tip width
    const offset = 20; // Space between tip and target

    if (position === "right") {
      console.log({
        top: rect.top + window.scrollY,
        left: rect.right + window.scrollX + offset,
      });
      return {
        top: rect.top + window.scrollY,
        left: rect.right + window.scrollX + offset,
      };
    } else {
      console.log({
        top: rect.top + window.scrollY,
        left: rect.right + window.scrollX + offset,
      });
      // Position on the left
      return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX - tipWidth - offset,
      };
    }
  };

  const handleNext = () => {
    console.log(
      "Next",
      currentTipIndex,
      currentTipIndex! < tipsData.length - 1
    );
    if (currentTipIndex !== null && currentTipIndex < tipsData.length - 1) {
      setCurrentTipIndex(currentTipIndex + 1);
    } else {
      // Close tips when reaching the end
      console.log("Closing tips");
      setCurrentTipIndex(null);
    }
  };

  const handleSkipAll = () => {
    setCurrentTipIndex(null);
  };

  if (!isVisible || currentTipIndex === null) {
    return null; // Do not render anything
  }

  const currentTip = tipsData[currentTipIndex];

  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleSkipAll}
      ></div>

      {/* Tips Component */}
      <div
        className="fixed z-50 w-72 p-4 bg-white shadow-lg border rounded-md"
        style={{ top: targetPosition.top, left: targetPosition.left }}
      >
        <h2 className="text-lg font-semibold">{currentTip.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{currentTip.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-semibold">
            {currentTipIndex + 1} of {tipsData.length}
          </span>
          <div>
            <Button
              variant="light"
              className="w-fit py-2 h-[40px] max-w-[130px] font-medium text-brand bg-none"
              onClick={handleSkipAll}
            >
              Skip all
            </Button>
            <Button
              variant="solid"
              className="w-fit py-2 h-[40px] max-w-[130px] rounded-lg  text-white font-medium bg-brand"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
