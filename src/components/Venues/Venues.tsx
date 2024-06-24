'use client'
import Breadcrumb from '@/common/Breadcrumb'
import Container from '@/common/Container';
import Search from '@/common/Search'
import React from 'react'
import WeddingVenues from './WeddingVenues';
import FilterSection from './FilterSection';
import Photographers from './Photograhpers';
import SearchForm from '@/common/SearchForm';

let list = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Venues",
    link: "/venues",
    active: true,
  },
];

const Venues = () => {
  return (
    <div>
      <div className="gradient-bg">
        <div className="max-w-[1280px] mx-auto px-6 leading-normal">
          <Breadcrumb list={list} />

          <div className="md:grid grid-cols-2  gap-20 bg-gradient-to-b from-[rgba(255, 255, 255, 0.23)] to-purple-900  py-12 pb-16">
            <div className="relative space-y-4">
              <h1 className="text-[50px] font-bold">
                Discover all the &nbsp;
                <span className="text-brand">vendors</span>&nbsp; required for&nbsp;
                 your event.
              </h1>

              <div className="absolute -bottom-4">
              <SearchForm searchPlaceholder='Wedding Venues' locationPlaceholder='New York' />
            </div>
            </div>
            <div className=" ">
              <div className="flex items-center gap-2 w-full">
                <img src="/venues/venue_home1.svg" alt="venues for your wedding" />
                <img src="/venues/venue_home2.svg" alt="venues for your wedding" />
                <img src="/venues/venue_home3.svg" alt="venues for your wedding" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="py-20 space-y-20">
        <div className="grid grid-cols-7 gap-16">
          <div className="col-span-2">
          <FilterSection />
          </div>
          <div className="col-span-5">
          <WeddingVenues />
          </div>
        </div>
      </Container>
      <Container className="py-20 space-y-20 ">
        <Photographers />
      </Container>
    </div>
  )
}

export default Venues