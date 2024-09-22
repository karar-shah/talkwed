import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { HiSortAscending } from "react-icons/hi";
import ImageCarousel from "../../gallery/_components/ImagesCarousel";
const Highlights = () => {
  const [highlightsAdded, setHighlightsAdded] = useState(false);
  return (
    <div className="flex flex-col flex-1">
      {highlightsAdded ? (
        <>
          <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0 border-b border-[#E4E4E4] pb-2">
            <h1 className="text-[#444444] text-2xl font-bold">Highlights</h1>
            <div className="flex gap-2.5">
              <Button
                startContent={<BiPlus size={20} />}
                size="lg"
                variant="bordered"
                className="text-brand border-brand border rounded-lg font-medium"
              >
                Video
              </Button>
              <Button
                startContent={<BiPlus size={20} />}
                size="lg"
                variant="solid"
                className="text-white bg-brand rounded-lg font-medium"
              >
                Photo
              </Button>
            </div>
          </div>
          <Button
            startContent={<HiSortAscending size={20} color="#6B14A6" />}
            variant="bordered"
            radius="sm"
            className="items-center ml-auto flex mt-4 bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
          >
            Sort
          </Button>
          <div className="font-semibold text-lg text-[#444444] mb-5">
            Videos
          </div>
          <div className="cursor-pointer relative w-[149px] h-[182px]">
            <img
              src="/Rectangle 34624477.png"
              alt="Video preview"
              className="object-cover"
            />
            <div className="bg-black/30 absolute top-0 bottom-0 left-0 right-0"></div>
            <FaPlay
              className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              size={30}
              color="rgba(255, 255, 255, 0.6)"
            />
          </div>
          <div className="font-semibold text-lg text-[#444444] mb-5 mt-10">
            Photos
          </div>
          <div className="flex flex-wrap -m-3">
            {photos.map((photo) => (
              <div key={photo.id} className="p-3 max-sm:w-1/2">
                <PhotoCard photo={photo} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col flex-1">
          <div className="mb-5 flex justify-between flex-col md:flex-row space-y-4 md:space-y-0 border-b border-[#E4E4E4] pb-2">
            <h1 className="text-[#444444] text-2xl font-bold">
              Add Photos to Highlights
            </h1>
            <div>
              <Button
                startContent={<BiPlus size={20} />}
                size="lg"
                variant="solid"
                className="text-white bg-brand rounded-lg font-medium"
                onClick={() => setHighlightsAdded(true)}
              >
                Photo
              </Button>
            </div>
          </div>
          <Select
            items={monthsValues}
            placeholder="Skip duplicates"
            className=""
            variant="bordered"
            classNames={{
              trigger:
                " trigger p-2 h-fit max-w-40 rounded border border-[#DCDCDC]",
              value: "value text-base max-md:text-sm",
            }}
          >
            {(months) => (
              <SelectItem key={months.key}>{months.label}</SelectItem>
            )}
          </Select>
          <div className="flex flex-col flex-1 items-center justify-center mt-6 border border-dashed border-[#747474]/50">
            <img
              src="/icons/image-icon.svg"
              alt="image"
              className="size-[100px]"
            />
            <div className="flex flex-wrap items-center justify-center space-x-1">
              <p className="text-[#8A8A8A] text-lg font-semibold">
                Add Photos to Highlights.{" "}
              </p>

              <Button
                variant="light"
                className="text-brand-link underline text-base font-medium px-0 data-[hover=true]:bg-transparent"
              >
                Upload Photos
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const monthsValues = [
  { key: "Skip", label: "Skip duplicates" },
  { key: "Replace", label: "Replace duplicates" },
];

const photos = [
  {
    id: 1,
    image: "/Rectangle 34624477.png",
  },
  {
    id: 2,
    image: "/Rectangle 34624477.png",
  },
  {
    id: 3,
    image: "/Rectangle 34624477.png",
  },
  {
    id: 4,
    image: "/Rectangle 34624477.png",
  },
  {
    id: 5,
    image: "/Rectangle 34624477.png",
  },
  {
    id: 6,
    image: "/Rectangle 34624477.png",
  },
];

const PhotoCard = ({ photo }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-[149px] h-[182px]"
        onClick={() => setIsOpen(true)}
      >
        <img src={photo.image} alt="Photo" className="object-cover" />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size={"full"}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        scrollBehavior="outside"
        className="bg-black bg-opacity-50"
      >
        <ModalContent>
          <ModalBody>
            <ImageCarousel images={imagesColum} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
const imagesColum = [
  { src: "/Rectangle 34624487.png", alt: "image-4" },
  { src: "/Rectangle 34624486.png", alt: "image-8" },
  { src: "/Rectangle 34624488.png", alt: "image-12" },
];

export default Highlights;
