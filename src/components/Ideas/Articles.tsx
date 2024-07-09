'use client'
import Pagination from "@/common/Pagination";
import Typography from "@/common/Typography";
import Link from "next/link";
import React, { useState } from "react";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = articles.length;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <Typography
        component="h2"
        className="mb-3"
        title="Recently added articles"
      />
      <>
        <div className="grid grid-cols-3 gap-4">
          {currentItems?.map((item, index) => {
            let layoutClass = "";

            if (index === 0) {
              layoutClass = "col-span-2 ";

            } else if (index === 1) {
              layoutClass = "col-span-1 ";

            } else if (index === 2) {
              layoutClass = "col-span-1";
            } else if (index === 3) {
              layoutClass = "col-span-1";
            } else if (index === 4) {
              layoutClass = "col-span-1";
            } else if (index === 5) {
              layoutClass = "col-span-1 ";

            } else if (index === 6) {
              layoutClass = "col-span-2 ";

            }

            return (
              <div
                key={index}
                className={`bg-white shadow-lg rounded flex flex-col items-stretch h-full ${layoutClass}`}
              >
                <Link href={`/ideas/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-64 object-cover rounded`}
                  />
                  <div className="p-4 flex flex-col justify-between items-stretch flex-grow space-y-2">
                    <Typography
                      component="p"
                      className="capitalize font-light"
                      title={item.category}
                    />
                    <Typography component="h4" title={item.title} />
                    <Typography component="p" title={item.meta} />
                    <Typography
                      component="p"
                      className="text-sm text-[#7B7B7B]"
                      title={`by ${item.user}, updated on ${item.date}`}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    </section>
  );
};

export default Articles;

let articles = [
  { id: 1,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 2,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 3,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 4,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 5,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 6,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 7,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },

  { id: 8,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 9,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 10,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 11,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 12,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 13,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  { id: 14,
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
];
