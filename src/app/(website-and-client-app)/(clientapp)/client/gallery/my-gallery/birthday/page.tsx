'use client'
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import ImageCarousel from "./_components/ImagesCarousel";
import GalleryNavbar from "./_components/Navbar";

const Gallery = () => {
  return (
    <>
    
    <div className="absolute top-0 z-50 right-0 left-0 scroll-smooth">
      <div className="min-h-screen bg-custom-gradient bg-no-repeat bg-cover flex flex-col space-y-[90px] items-center justify-center">
        <div className=" text-white text-center space-y-3">
          <p className="font-medium text-xl">April 5th, 2024</p>
          <div>
            <p className="font-bold text-6xl">Elsa&apos;s Birthday</p>
            <p className="text-lg">By Smith Jackson</p>
          </div>
        </div>
        <Link href="#gallery" className="scroll-smooth">
          <IoArrowDownCircleOutline color="white" size={60} />
        </Link>
      </div>
      <GalleryNavbar />
      <div
        id="gallery"
        className="scroll-smooth grid grid-cols-1 lg:grid-cols-4 grid-rows-1 max-lg:px-6 gap-x-5 pt-[70px] lg:pl-[60px] lg:pr-[72px] pb-[103px]"
      >
        {imageColumns.map((column, index) => (
          <ImageColumn key={index} images={column}/>
        ))}
      </div>
    </div>
    </>

  );
};

const ImageColumn = ({ images }: { images: { src: string; alt: string }[]}) => {
  const [isOpen, setIsOpen] = useState(false);

  return(
  <div className="flex flex-col space-y-5">
    {images.map((image, index) => (
      <img className="cursor-pointer" key={index} src={image.src} alt={image.alt} onClick={() => setIsOpen(true)}/>
    ))}
     <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      size={'full'}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      scrollBehavior="outside"
      className=""
    >
      <ModalContent>
        <ModalBody>
          <ImageCarousel images={images} />
        </ModalBody>
      </ModalContent>
    </Modal>
  </div>
)}

const imageColumns = [
  [
    { src: "/Rectangle 34624477.png", alt: "image-1" },
    { src: "/Rectangle 34624478.png", alt: "image-5" },
    { src: "/Rectangle 34624484.png", alt: "image-9" },
    { src: "/Rectangle 34624489.png", alt: "image-12" },
  ],
  [
    { src: "/Rectangle 34624479.png", alt: "image-2" },
    { src: "/Rectangle 34624480.png", alt: "image-6" },
    { src: "/Rectangle 34624483.png", alt: "image-10" },
    { src: "/Rectangle 34624491.png", alt: "image-13" },
  ],
  [
    { src: "/Rectangle 34624481.png", alt: "image-3" },
    { src: "/Rectangle 34624482.png", alt: "image-7" },
    { src: "/Rectangle 34624485.png", alt: "image-11" },
    { src: "/Rectangle 34624490.png", alt: "image-14" },
  ],
  [
    { src: "/Rectangle 34624487.png", alt: "image-4" },
    { src: "/Rectangle 34624486.png", alt: "image-8" },
    { src: "/Rectangle 34624488.png", alt: "image-12" },
  ],
];
export default Gallery;
