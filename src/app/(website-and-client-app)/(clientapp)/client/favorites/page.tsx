"use client";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="lg:px-20">
      <Breadcrumbs
        separator="/"
        itemClasses={{ separator: "px-2 mx-2" }}
        className="py-6"
      >
        <BreadcrumbItem onClick={() => setActiveTab("Home")}>
          <p
            className={`font-semibold text-base text-[#505050] ${
              activeTab === "Home" ? "text-[#6B14A6] underline" : ""
            }`}
          >
            Home
          </p>
        </BreadcrumbItem>
        <BreadcrumbItem onClick={() => setActiveTab("Favorites")}>
          <p
            className={` font-semibold text-base text-[#505050] ${
              activeTab === "Favorites" ? "text-[#6B14A6] underline" : ""
            }`}
          >
            Favourites
          </p>
        </BreadcrumbItem>
      </Breadcrumbs>
      <div className="border-t border-[#E8E8E8]"></div>
      {activeTab === "Home" && <Home setActiveTab={setActiveTab} />}
      {activeTab === "Favorites" && <Favorites />}
    </div>
  );
};

export default Page;

const Home = ({setActiveTab}:any) => {
  return (
    <div className="flex flex-col items-center justify-center  text-center space-y-1 min-h-screen">
      <img src="/icons/fvrts-icon.svg" alt="favorites" />
      <p className="font-bold text-xl text-[#464646]" onClick={()=>setActiveTab('Favorites')}>No Favorites found</p>
      <p className="font-medium text-lg text-[#464646]">
        Save all your wedding favorites here! Simply click the to bookmark your
        preferred vendors, engagement rings, dresses, Real Weddings, articles,
        and forum discussions.
      </p>
    </div>
  );
};

const Favorites = () => {
  return (
    <div>
      <div className="mt-11 mb-8 flex justify-between ">
        <p className="text-[#464646] font-semibold text-xl ">
          Favorite Vendors <span className="font-medium text-base">(2)</span>
        </p>
        <Button
          variant="light"
          className="text-[#6B14A6] underline font-semibold text-base px-0 h-fit"
        >
          View All
        </Button>
      </div>
      <FavoriteCard
        category="PHOTOGRAPY"
        title="Laurie Rhodes Photography"
        imgSrc="/Rectangle 33.svg"
      />
      <FavoriteCard
        category="WEDDING VENUE"
        title="Blue Venado Beach Weddings"
        imgSrc="/Rectangle 33 (1).svg"
      />
      <div className="border-t border-[#D1D1D1] my-11"></div>
      <p className="text-[#464646] font-semibold text-xl mb-7">
        Favorite Blog <span className="font-medium text-base">(1)</span>
      </p>
      <FavoriteCard
        category="RINGS & JEWELRY"
        title="The Prettiest Floral Bridal,,,"
        imgSrc="/Rectangle 33 (1).svg"
      />
    </div>
  );
};
const FavoriteCard = ({ category, title, imgSrc }: any) => {
  return (
    <div className="border border-[#DCDCDC] drop-shadow-lg shadow-md inline-block rounded-md mr-4">
      <img src={imgSrc} alt="wedding-image" />
      <div className="px-5 mb-4">
        <p className="font-medium text-sm text-[#696969] mt-3">{category}</p>
        <p className="font-semibold text-lg text-[#3D3D3D] mt-2">{title}</p>
      </div>
    </div>
  );
};
