"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionCustom() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-4 data-[open=true]:border-l-4 data-[open=true]:rounded border-[#6b14a663]   data-[open=true]:bg-[#6b14a605]",
    indicator: "text-medium",
    content: "text-small px-2",
  };
  return (
    <Accordion defaultExpandedKeys={["1"]} itemClasses={itemClasses}>
      <AccordionItem
        key="1"
        className=" "
        aria-label="What is the average catering price per person for plated service?"
        title="What is the average catering price per person for plated service?"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="What is the average catering price per person for buffet service?"
        title="What is the average catering price per person for buffet service?"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Which of the following are included in the starting price?"
        title="Which of the following are included in the starting price?"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
