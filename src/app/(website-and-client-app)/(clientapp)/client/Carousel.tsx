"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className="embla__slide bg-[#D0B7E11F]/20 p-4 rounded flex-none basis-[100%] md:basis-[40%]"
            key={index}
          >
            <p className="text-lg font-semibold text-[#494949]">
              10% discount for TalkWed couples
            </p>
            <p className="mt-3">
              by <span className="font-medium">Dreamlife Photos & Video</span>
            </p>
            <div className="text-brand flex items-center font-semibold mt-10">
              Get Deal <BsArrowRight className="ml-2 size-6" />
            </div>
          </div>
        ))}
      </div>
      <button className="embla__prev absolute bg-white left-0 size-10 rounded-full bottom-10 flex items-center justify-center cursor-pointer" onClick={scrollPrev}>
      <FaAngleLeft />
      </button>
      <button className="embla__next absolute bg-white right-0 size-10 rounded-full bottom-10 flex items-center justify-center cursor-pointer" onClick={scrollNext}>
      <FaAngleRight />
      </button>
    </div>
  );
}
