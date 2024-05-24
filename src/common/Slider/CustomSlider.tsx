"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomSlider = ({
  children,
  slidesPerView,
  spaceBetween = 20,
}: {
  children: any;
  slidesPerView: number;
  spaceBetween?: number;
}) => {
  return (
    <div className="relative h-full">
      <button
        type="button"
        className={`swiper-button image-swiper-button-next absolute  flex items-center justify-center border border-gray-100 top-[38%] -right-8 z-10 w-[50px] shadow-xl h-[50px] bg-white rounded-full`}
      >
        <IoIosArrowForward size={26} color="#4E4E4E" />
      </button>
      <button
        type="button"
        className={`swiper-button image-swiper-button-prev absolute flex items-center justify-center border border-gray-100 top-[38%] -left-8 z-10 w-[50px] shadow-xl h-[50px] bg-white rounded-full`}
      >
        <IoIosArrowBack size={26} color="#4E4E4E" />
      </button>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        cssMode={true}
        // navigation={true}
        mousewheel={true}
        keyboard={true}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {children?.map((child: any, index: number) => (
          <SwiperSlide key={index} className="p-1">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
