import Typography from "@/common/Typography";
import React from "react";

const Articles = () => {
  return (
    <section>
      <Typography
        component="h2"
        className="mb-3"
        title="Recently added articles"
      />
      <>
        <div className="grid md:grid-cols-2 gap-8">
          {articles?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded flex flex-col h-full"
            >
              <img
                src={item.image}
                alt={item.title}
                height={427}
                className="w-full rounded"
              />
              <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
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
            </div>
          ))}
        </div>
      </>
    </section>
  );
};

export default Articles;

let articles = [
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },

  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
  {
    category: "TRENDS & TIPS",
    title: "2022 Wedding Trends That Are Actually Doable",
    meta: "The top wedding-planning trends for 2024 are all about shifting your mindset, not blowing your budget.",
    user: "Jack S",
    date: "December 29,2023",
    image: "/ideas/articles.svg",
  },
];
