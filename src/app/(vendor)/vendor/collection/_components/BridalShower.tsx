import Sheet from "@/common/Sheet";
import { useModalAction } from "@/context/modal.context";
import { Button, Checkbox, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiSortAscending } from "react-icons/hi";
import { IoMdMove } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
const BridalShower = () => {
  const { openModal } = useModalAction();
  const [isMovePhotoOpen, setIsMovePhotoOpen] = useState(false);
  return (
    <>
      <MovePhotoToSetSheet
        isOpen={isMovePhotoOpen}
        setIsOpen={setIsMovePhotoOpen}
      />
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
            onClick={() => setIsMovePhotoOpen(true)}
          >
            Photo
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <div className="text-[#606060] font-medium">Selected (1)</div>
          <Button
            variant="light"
            className="text-brand-link underline text-base font-medium px-0 data-[hover=true]:bg-transparent"
          >
            Select All
          </Button>
          <Button
            variant="light"
            className="text-brand-link underline text-base font-medium px-0 data-[hover=true]:bg-transparent"
          >
            Clear Selection
          </Button>
        </div>
        <div className="flex items-center space-x-2.5">
          <Button
            startContent={<LuShare2 size={20} color="#6B14A6" />}
            variant="bordered"
            radius="sm"
            size="sm"
            className="px-0 min-w-8 h-9 items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
            onClick={() =>
              openModal({
                title: "Create Quick Share Link",
                size: "2xl",
                modal: "CREATE_QUICK_SHARE_LINK",
              })
            }
          ></Button>
          <Button
            startContent={<IoMdMove size={20} color="#6B14A6" />}
            variant="bordered"
            radius="sm"
            size="sm"
            className="px-0 min-w-8 h-9 items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
          ></Button>
          <Button
            startContent={<IoEyeOutline size={20} color="#6B14A6" />}
            variant="bordered"
            radius="sm"
            size="sm"
            className="px-0 min-w-8 h-9 items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
          ></Button>
          <Button
            startContent={<FaRegTrashAlt size={20} color="#6B14A6" />}
            variant="bordered"
            radius="sm"
            size="sm"
            className="px-0 min-w-8 h-9 items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
            onClick={() =>
              openModal({
                title: "Delete photos",
                modal: "DELETE_PHOTOS",
                size: "lg",
                bodyOnly: true,
              })
            }
          ></Button>
          <Button
            startContent={<HiSortAscending size={20} color="#6B14A6" />}
            variant="bordered"
            radius="sm"
            className="items-center h-9 bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
          >
            Sort
          </Button>
        </div>
      </div>
      <div className="font-semibold text-lg text-[#444444] mb-5 mt-10">
        Photos
      </div>
      <div className="flex flex-wrap -m-3">
        {photos.map((photo) => (
          <div key={photo.id} className="p-3">
            <PhotoCard photo={photo} />
          </div>
        ))}
      </div>
    </>
  );
};

const PhotoCard = ({ photo }: any) => {
  return (
    <div className="relative w-[149px] h-[182px]">
      <img src={photo.image} alt="Photo" className="object-cover" />
      <Checkbox
        className="absolute top-2.5 left-2.5 [&_span:after]:bg-[#9747FF]"
        size="md"
        radius="sm"
      ></Checkbox>
    </div>
  );
};

const MovePhotoToSetSheet = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const { openModal } = useModalAction();
  return (
    <Sheet
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="p-8"
      header={
        <h2 className="text-[22px] text-[#5A5A5A] font-semibold mb-10">
          Move Photo to Set
        </h2>
      }
    >
      <div className="mt-12 mb-28">
        <RadioGroup>
          <Radio value="bridal">Bridal Shower</Radio>
        </RadioGroup>
      </div>
      <div className="flex space-x-5 items-center">
        <Button
          variant="solid"
          className="w-full py-3.5 h-[50px] max-w-[130px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
          onClick={() => setIsOpen(false)}
        >
          Move
        </Button>
        <Button
          variant="light"
          className="text-brand-link text-base font-semibold px-0 data-[hover=true]:bg-transparent"
          onClick={() => {
            openModal({
              title: "Create New Set",
              size: "sm",
              bodyOnly: true,
              modal: "CREATE_NEW_SET",
            });
            setIsOpen(false);
          }}
        >
          Create new set
        </Button>
      </div>
    </Sheet>
  );
};

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

export default BridalShower;
