"use client";
import { useModalAction } from "@/context/modal.context";
import { Button } from "@nextui-org/react";
import SwitchContainer from "./SwitchContainer";
const collections = [
  "Allow photo downloads to the person that you shared the file with",
];

const CollectionSettings = () => {
  const { openModal } = useModalAction();
  return (
    <div className="space-y-9">
      <h2 className="font-bold text-[#444444] text-2xl">Collection Settings</h2>
      <div className="w-full border border-[#DADADA] rounded-md overflow-hidden pb-10">
        <h3 className="font-semibold text-lg bg-[#F9F2FE] text-[#535353] pt-3 pb-3.5 px-12">
          Collection
        </h3>
        <div className="px-12 pt-5 text-[#6C6C6C] space-y-2.5">
          {collections.map((title, index) => (
            <SwitchContainer key={index} title={title} />
          ))}
        </div>
      </div>
      <div className="w-full border border-[#DADADA] rounded-md overflow-hidden pb-10">
        <h3 className="font-semibold text-lg bg-[#F9F2FE] text-[#535353] pt-3 pb-3.5 px-12">
          Water Mark
        </h3>
        <p className="px-12 font-semibold text-[#6C6C6C] mt-5">
          Protect your photos with custom watermarks.
        </p>
        <div className="flex flex-wrap p-4 -mx-2 space-y-6 md:space-y-0 px-12">
          <div className="px-2 w-full md:w-3/12">
            <div className="border-dashed min-h-40 flex border-black items-center justify-center border rounded-md">
              <Button
                variant="light"
                className="text-brand-link underline text-lg font-medium px-0 data-[hover=true]:bg-transparent"
                onClick={() =>
                  openModal({
                    title: "Add Watermark",
                    modal: "ADD_WATERMARK",
                    bodyOnly: true,
                    size: "4xl",
                  })
                }
              >
                Add Watermark
              </Button>
            </div>
          </div>
          <div className="px-2 w-full md:w-3/12">
            <div className=" bg-[#5C148C0D]/10 min-h-40 flex items-center justify-center rounded-md">
              <img src="/icons/Dreamlife Photography.svg" alt="signature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSettings;
