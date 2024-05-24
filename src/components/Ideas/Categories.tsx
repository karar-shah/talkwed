'use client'
import Typography from "@/common/Typography";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

const Categories = () => {
  return (
    <div>
      <Typography
        component="h2"
        title="Article topics on TalkWed"
        className="text-2xl  mb-3"
      />
      <Accordion  className="rounded-lg border p-0" > 
        {categoryList?.map((item, index) => (
          <AccordionItem key={index} aria-label={item.title} title={item.title} className="px-3" >
            {item.sub_category?.map((sub_category, index2) => (
              <div key={index2}>
                <Link href="/" className="flex items-center justify-between mb-2 text-brand-muted">
                  <div>{sub_category.title}</div>
                  <div>{sub_category.total}</div>
                </Link>
              </div>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Categories;

const categoryList = [
  {
    title: "Planning Basics",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
  {
    title: "Wedding Ceremony",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
  {
    title: "Wedding Reception",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
  {
    title: "Wedding Services",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
  {
    title: "Wedding Fashion",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
  {
    title: "Hair & Makeup",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
  {
    title: "Destination Weddings",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
  {
    title: "Married Life",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
  {
    title: "Events & Parties",
    sub_category: [
      {
        title: "Honeymoon Advice",
        total: 76,
      },
      {
        title: "Budget",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Legal Paperwork",
        total: 76,
      },
      {
        title: "Trends & Tips",
        total: 76,
      },
      {
        title: "Etiquette",
        total: 76,
      },
    ],
  },
];
