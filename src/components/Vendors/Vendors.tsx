import Container from "@/common/Container";
import SearchForm from "@/common/SearchForm";
import React from "react";
import VendorsList from "./VendorsList";
import Photographers from "./Photographers";
import VendorsByArea from "./VendorsByArea";

const Vendors = () => {
  return (
    <div>
      <div className="md:h-[347px] gradient-bg">
        <Container>
          <section className="md:flex items-center  relative ">
            <div className="md:w-2/5  h-full mb-12">
              <h1 className="font-bold md:text-[50px] text-[40px] md:text-start text-center  leading-[52.5px]">
                Discover all the <span className="text-brand">vendors</span>{" "}
                required for your event.
              </h1>
            </div>
            <div className="w-3/5 md:block hidden">
              <img
                src="/header/vendors.png"
                alt="Discover all the vendors required for your event."
                className="h-[347px] w-full"
              />
            </div>
            <div className="md:absolute bottom-8">
              <SearchForm
                searchPlaceholder="Search for vendors"
                locationPlaceholder="New York"
              />
            </div>
          </section>
        </Container>
      </div>
      <Container className="py-20 space-y-20 ">
        <VendorsList />
        <VendorsByArea />
        <Photographers />
      </Container>
    </div>
  );
};

export default Vendors;
