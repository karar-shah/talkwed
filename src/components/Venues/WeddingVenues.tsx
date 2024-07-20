"use client";
import React, { useState } from "react";
import Button from "@/common/Button";
import Typography from "@/common/Typography";
import { BsStarFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Pagination from "@/common/Pagination";
import Link from "next/link";

interface Article {
  category: string;
  image: string;
  title: string;
  meta: string;
  user: string;
  date: string;
}

const WeddingVenues = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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
        title="Let’s find your wedding venue"
      />
      <>
        <div className="grid md:grid-cols-1 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white sm:flex place-items-stretch h-full pb-10 ${
                index !== currentItems.length - 1 ? "border-b-medium" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                height={317}
                className="w-96 rounded"
              />
              <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
                <div className="md:flex justify-between md:space-y-0 space-y-3">
                  <div className="flex justify-center flex-col md:space-y-0 space-y-3">
                    <Link
                      href={"/vendors/photographer/dreamlife"}
                      className="underline"
                    >
                      <Typography component="h3" title={item.title} />
                    </Link>
                    <div className="flex items-center text-brand-muted2 text-base font-semibold">
                      <BsStarFill className="text-[#FBBC05]" />
                      <p>&nbsp;4.5&nbsp;(345)</p>
                      <p className="flex items-center text-brand-muted2 text-base font-semibold ml-3">
                        <IoLocationOutline />
                        &nbsp;New York, NY
                      </p>
                    </div>
                  </div>
                  <div className="buttons">
                    <Button
                      title="Request a Quote"
                      href="/"
                      className="bg-[#5C148C] text-white"
                    />
                  </div>
                </div>
                <Typography
                  component="p"
                  className="text-sm"
                  title={item.meta}
                />
                <Typography
                  component="p"
                  className="text-sm text-[#7B7B7B]"
                  title={`$654.34`}
                />
              </div>
            </div>
          ))}
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

export default WeddingVenues;

const articles: Article[] = [
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "Michael King - Artlook Photography is a wedding photographer that is based in Brooklyn, New York. Founded in 2010, the company has been providing fantastic services to clients for weddings and events for many years, enabling memories to be relived through the medium of media. Artlook Photography...",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue1.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "Michael King - Artlook Photography is a wedding photographer that is based in Brooklyn, New York. Founded in 2010, the company has been providing fantastic services to clients for weddings and events for many years, enabling memories to be relived through the medium of media. Artlook Photography...",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue2.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "Michael King - Artlook Photography is a wedding photographer that is based in Brooklyn, New York. Founded in 2010, the company has been providing fantastic services to clients for weddings and events for many years, enabling memories to be relived through the medium of media. Artlook Photography...",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "Michael King - Artlook Photography is a wedding photographer that is based in Brooklyn, New York. Founded in 2010, the company has been providing fantastic services to clients for weddings and events for many years, enabling memories to be relived through the medium of media. Artlook Photography...",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },

  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "Dreamlife Photos & Video",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/venues/venue3.svg",
  },
];
