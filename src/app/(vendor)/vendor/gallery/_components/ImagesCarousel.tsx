"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const ImageCarousel = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full relative flex items-center justify-center flex-1">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide flex-none w-full " key={index}>
              <div className="mx-auto max-w-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[480px] object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 -translate-y-1/2 left-2 lg:left-60 w-8 h-8 cursor-pointer"
        onClick={scrollPrev}
      >
        <BiChevronLeftCircle className="text-gray-600 size-full" />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-2 lg:right-60 w-8 h-8 cursor-pointer"
        onClick={scrollNext}
      >
        <BiChevronRightCircle className="text-gray-600 size-full" />
      </button>
    </div>
  );
};

export default ImageCarousel;
