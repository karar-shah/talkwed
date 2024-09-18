import Button from "@/common/Button";
import { useModalAction } from "@/context/modal.context";
import {
  Input,
  Select,
  SelectItem,
  Slider
} from "@nextui-org/react";
import { useState } from "react";

const UploadWaterMarkImage = () => {
  const { closeModal } = useModalAction();
  return (
    <div className="py-4 px-3">
      <h1 className="text-[22px] text-[#464646] font-semibold mb-10">Watermark</h1>
      <div className="flex flex-wrap -m-8">
        <div className="p-8 w-1/2">
          <img
            src="/Rectangle 34624507.svg"
            alt="watermark image"
            className="object-cover w-full h-fit"
          />
        </div>
        <div className="p-8 w-1/2">
          <div>
            <div className="flex flex-col space-y-5">
              <div>
                <label
                  htmlFor="title"
                  className="text-[#6C6C6C] font-medium mb-1"
                >
                  Title
                </label>
                <Input
                  name="title"
                  placeholder="Enter title for the bookmark"
                  size="md"
                  type="text"
                  variant="bordered"
                  className={"mt-2"}
                  classNames={{
                    input: "text-base max-md:text-sm ",
                    inputWrapper:
                      "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="waterMarkText"
                  className="text-[#6C6C6C] font-medium mb-1"
                >
                  Watermark Text
                </label>
                <Input
                  name="title"
                  placeholder="Enter watermark"
                  size="md"
                  type="text"
                  variant="bordered"
                  className={"mt-2"}
                  classNames={{
                    input: "text-base max-md:text-sm ",
                    inputWrapper:
                      "border border-[#BFBFBF] rounded-md py-4 px-5 h-fit",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="dealType"
                  className="text-[#6C6C6C] font-medium mb-1"
                >
                  Font Style
                </label>
                <Select
                  items={fontStyles}
                  name="fontStyle"
                  label="Select style"
                  variant="bordered"
                  className={"mt-2"}
                  classNames={{
                    label: "text-base max-md:text-sm",
                    innerWrapper: "",
                    mainWrapper: "",
                    trigger: "border border-[#BFBFBF] rounded-md  px-5 h-fit",
                  }}
                >
                  {(font) => (
                    <SelectItem key={font.key}>{font.label}</SelectItem>
                  )}
                </Select>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Scale
                  </span>
                  <span className="text-sm font-medium text-gray-700">10%</span>
                </div>
                <Slider
                  aria-label="Scale"
                  step={1}
                  maxValue={100}
                  minValue={0}
                  defaultValue={10}
                  className="max-w-md"
                  color="secondary"
                  size="sm"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Opacity
                  </span>
                  <span className="text-sm font-medium text-gray-700">90%</span>
                </div>
                <Slider
                  aria-label="Opacity"
                  step={1}
                  maxValue={100}
                  minValue={0}
                  defaultValue={90}
                  className="max-w-md"
                  color="secondary"
                  size="sm"
                />
              </div>
              <PositionGrid />
            </div>

            <Button
              className="py-3 px-8 mt-14 bg-[#5C148C] text-white text-base font-medium shadow-md rounded-lg"
              href="#"
              title="Save"
              type="button"
              btn={true}
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PositionGrid = () => {
  const [selectedCell, setSelectedCell] = useState(4); // Center cell (0-indexed)

  const renderCell = (index: number) => {
    const isSelected = index === selectedCell;
    return (
      <div
        key={index}
        className={`w-7 h-7 border border-gray-300 flex items-center justify-center cursor-pointer ${
          isSelected ? "bg-purple-500" : ""
        }`}
        onClick={() => setSelectedCell(index)}
      />
    );
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-[#848484]">Position</h3>
      <div className="grid grid-cols-3 size-20 rounded-md border border-collapse overflow-hidden">
        {[...Array(9)].map((_, index) => renderCell(index))}
      </div>
    </div>
  );
};

export const fontStyles = [
  { key: "italic", label: "Italic" },
  { key: "bold", label: "Bold" },
];
export default UploadWaterMarkImage;
