import { Checkbox, Input, Slider } from "@nextui-org/react";
import { LuInfo } from "react-icons/lu";

import Button from "@/common/Button";
import { StoreFrontTabProps } from "../page";
const primaryStyle = [
  "Storytelling",
  "Documentary",
  "Traditional",
  "Short form",
  "Cinematic",
];
const weddingEvents = [
  "Ceremony",
  "Pre-ceremony",
  "Reception",
  "Rehearsal dinner",
];
const videographyServices = [
  "Additional hours",
  "Client revisions",
  "Full feature video",
  "High-def video",
  "Highlight video",
  "Liability insurance",
  "Multiple cameras",
  "Multiple locations",
  "One event per day",
  "Raw footage",
];
const finalVideoFormats = [
  "Blu-ray",
  "Digital download",
  "DVD",
  "Card SD",
  "Flash drive USB",
  "Hard drive USB",
];
const Faqs = ({ setActiveIndex }: StoreFrontTabProps) => {
  return (
    <>
      <div className="pr-14 mb-7">
        <p className="font-bold text-[#444444] text-2xl mb-3 ">FAQs</p>
        <div className="border border-[#3AC3D6] bg-[#ebf9fb] rounded-[4px] flex px-2.5 py-2 space-x-2">
          <div className="size-6">
            <LuInfo size={24} color="#3AC3D6" />
          </div>

          <p className="text-sm text-[#686868]">
            Include answers to frequently asked questions about your business to
            help couples better understand your offerings before they decide to
            contact you.
          </p>
        </div>
      </div>
      <div className="border border-[#DADADA] rounded-md pt-6 pl-4 pb-24 pr-8">
        <div className="divide-y-1 ">
          <div className="py-8">
            <p className="text-[#6C6C6C] font-semibold mb-3 ">
              1. What primary style do you identify with?
            </p>
            <div className="flex flex-wrap">
              {primaryStyle.map((style: string) => (
                <CheckOption key={style} option={style} />
              ))}
            </div>
          </div>
          <div className="py-8">
            <p className="text-[#6C6C6C] font-semibold mb-3">
              2. Which wedding events do you service?
            </p>
            <div className="flex flex-wrap ">
              {weddingEvents.map((style: string) => (
                <CheckOption key={style} option={style} />
              ))}
            </div>
          </div>
          <div className="py-8">
            <p className="text-[#6C6C6C] font-semibold mb-3">
              3. What videography services do you offer?
            </p>
            <div className="flex flex-wrap space-y-2">
              {videographyServices.map((style: string) => (
                <CheckOption key={style} option={style} />
              ))}
            </div>
          </div>
          <div className="py-8">
            <p className="text-[#6C6C6C] font-semibold mb-3">
              4.What final video formats do you offer?
            </p>
            <div className="flex flex-wrap space-y-2">
              {finalVideoFormats.map((style: string) => (
                <CheckOption key={style} option={style} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#6C6C6C] font-semibold mb-3 mt-8">
              5. What is the starting price for your wedding videography
              services
              <Input
                name="price"
                placeholder="C$ 000"
                size="md"
                type="number"
                variant="bordered"
                className={"my-2 w-full sm:w-1/4"}
                classNames={{
                  input: "text-base max-md:text-sm  ",
                  inputWrapper:
                    "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
                }}
              />
              <Slider
                color="secondary"
                step={10}
                maxValue={500}
                minValue={0}
                defaultValue={0.7}
                aria-label="Temperature"
                className="max-w-md mt-3"
                classNames={{
                  // thumb: "bg-red-200",
                  track: "border-s-secondary-100",
                  filler:
                    "bg-gradient-to-r from-secondary-100 to-secondary-500",
                }}
              />
              <Button
                className="py-3 px-8 mt-24 bg-[#5C148C] text-white text-base font-medium shadow-md rounded-lg"
                href="#"
                title="Save"
                type="button"
                btn={true}
                onClick={() => setActiveIndex((activeIndex) => activeIndex + 1)}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const CheckOption = ({ option }: any) => {
  return (
    <div className="flex space-x-3 items-center justify-center mr-9">
      <Checkbox
        radius="none"
        color="secondary"
        size="sm"
        classNames={{
          wrapper: "rounded-[3px]",
        }}
      />
      <p className="font-medium text-[#6C6C6C]">{option}</p>
    </div>
  );
};

export default Faqs;
