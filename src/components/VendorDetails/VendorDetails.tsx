"use client";
import Container from "@/common/Container";
import React from "react";
import Nav from "./Nav";
import { FaRegAddressCard } from "react-icons/fa6";
import Work from "./Work";
import Accordion from "@/common/Accordion";
import Reviews from "@/common/Reviews";
import Deals from "./Deals";
import MapLocation from "@/common/MapLocation";
import Quote from "./Quote";
import { useModalAction } from "@/context/modal.context";
import { IoMdShare } from "react-icons/io";

const VendorDetails = () => {
  const { openModal } = useModalAction();

  return (
    <Container className="p-4">
      <div className="md:flex md:space-x-7">
        <div className="border rounded p-5">
          <Nav />
          <div className="space-y-8 py-8">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[#505050] font-semibold text-xl">About</h3>
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      title: "Share now",
                      modal: "SHARE",
                      size: "lg",
                      payload: "ul",
                    })
                  }
                >
                  <IoMdShare />
                </button>
              </div>
              <div className="text-[#838383] text-base font-normal flex space-x-2 items-center">
                <FaRegAddressCard />
                <span>Member since 2022</span>
              </div>
              <div className="text-[#505050] text-base font-normal">
                <p>
                  Your wedding day is a celebration of your love! A coming
                  together of family and friends to witness and be a part of
                  this special occasion. Whether you’ve planned for an intimate
                  wedding, an elopement or a formal affair in a beautiful
                  garden, rustic barn, beach, vineyards or rooftop, Dreamlife
                  will capture all the special moments for you that you will
                  cherish for many years to come.
                </p>
                <p>
                  Our extremely talented team specialize in weddings in New
                  York, Long Island, New Jersey, Westchester, Hudson Valley and
                  Connecticut. With extensive years of experience, Dreamlife is
                  known within the wedding industry for providing excellent
                  service that goes above and beyond. We have developed close
                  relationships with many of New York and New Jersey’s most
                  desirable and popular wedding venues. You will be confident in
                  your selection when booking your wedding with Dreamlife. We
                  are here to listen to you, understand your vision and live up
                  to your expectations by delivering the images that you will
                  treasure and enjoy for the rest of your life.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[#505050] font-semibold text-xl mb-5">
                Work
              </h3>
              <Work />
            </div>
            <div>
              <h3 className="text-[#505050] font-semibold text-xl mb-5">
                Frequently Ask Questions
              </h3>
              <Accordion />
            </div>
            <div>
              <h3 className="text-[#505050] font-semibold text-xl mb-5">
                Reviews
              </h3>
              <Reviews />
            </div>
            <div>
              <h3 className="text-[#505050] font-semibold text-xl mb-5">
                Deals
              </h3>
              <Deals />
            </div>
            <div>
              <h3 className="text-[#505050] font-semibold text-xl mb-5">
                Map - Vendor’s location
              </h3>
              <MapLocation address="238 Bay Ridge Parkway Brooklyn, NY, 11209" />
            </div>
          </div>
        </div>

        <div className="md:flex-none md:w-[379px] w-full md:mt-0 mt-8">
          <Quote />
        </div>
      </div>
    </Container>
  );
};

export default VendorDetails;
