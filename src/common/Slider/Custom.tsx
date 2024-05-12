"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Custom = ({ children,slidesPerView }: { children: any ,slidesPerView:number}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {children?.map((child: any, index: number) => (
        <SwiperSlide key={index} className="p-1">{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Custom;
