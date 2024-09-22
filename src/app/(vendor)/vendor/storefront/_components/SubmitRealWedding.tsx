import Sheet from "@/common/Sheet";
import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

const SubmitRealWedding = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <>
      <RealWeddingSheet isOpen={isSheetOpen} setIsOpen={setIsSheetOpen} />
      <div>
        <p className="font-bold text-2xl text-[#444444] mb-6">Real Wedding</p>
        <button className="bg-transparent text-[#6B14A6] font-semibold underline">
          Real Wedding
        </button>
        {" / "}
        <button className="bg-transparent font-medium text-[#505050]">
          Submit Real Wedding
        </button>
      </div>
      <div className="flex flex-col space-y-6 mt-5">
        <div className="border border-[#DADADA] rounded-md pt-5 px-9 pb-10 ">
          <div className="lg:w-1/2 space-y-5">
            <div className="flex ">
              <div className="w-1/2 mr-3">
                <label
                  htmlFor="name"
                  className="text-[#6C6C6C] font-medium mb-1"
                >
                  Groom name*
                </label>
                <Input
                  name="groomName"
                  placeholder="Enter name"
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
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="text-[#6C6C6C] font-medium mb-1"
                >
                  Bridal name*
                </label>
                <Input
                  name="bridalName"
                  placeholder="Enter name"
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
            </div>
            <div>
              <label
                htmlFor="location"
                className="text-[#6C6C6C] font-medium mb-1"
              >
                Wedding location
              </label>
              <Input
                name="location"
                placeholder="Enter location"
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
            <div className="flex">
              <div className="w-1/2 mr-3">
                <label
                  htmlFor="name"
                  className="text-[#6C6C6C] font-medium mb-1"
                >
                  Venue
                </label>
                <Input
                  name="venue"
                  placeholder="Enter venue"
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
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="text-[#6C6C6C] font-medium mb-1"
                >
                  Photographer
                </label>
                <Input
                  name="photographer"
                  placeholder="Enter photographer"
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
            </div>
          </div>
        </div>
        <div className="pt-4 px-7 pb-72 border border-[#DADADA] rounded-md">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-lg text-[#6C6C6C]">Wedding Photos</p>
              <p className="text-[#6C6C6C] font-medium text-sm pr-10">
                Share high-quality, watermark-free photos of the wedding
                ceremony, reception, and the couple&apos;s and wedding
                party&apos;s attire, highlighting unique details.
              </p>
            </div>
            <Button
              variant="solid"
              size="lg"
              className="min-w-36 px-6 bg-brand text-white text-lg font-medium rounded-md "
            >
              Add Photos
            </Button>
          </div>
          <div className="border-t border-[#D0D0D0] mt-4"></div>
        </div>
        <div className="flex items-start">
          <Checkbox
            radius="none"
            color="secondary"
            size="sm"
            className=""
            classNames={{
              wrapper: "rounded-[3px]",
            }}
          />
          <p className="font-medium text-sm text-[#6C6C6C] ">
            By providing the content of this Real Wedding to TalkWed, you are
            allowing it to be public through any media that TalkWed uses and
            incorporates as a part of the website content from now on. By
            clicking, you agree that you do not violate any rights by publishing
            this report, especially those relating to the images of the people
            appearing in the photos.
          </p>
        </div>
      </div>
      <Button
        variant="solid"
        size="lg"
        className="bg-brand text-white text-lg font-medium rounded-md py-3 px-10 mt-10"
        onClick={() => setIsSheetOpen(true)}
      >
        Submit
      </Button>
    </>
  );
};

const RealWeddingSheet = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <Sheet
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="p-8"
      header={
        <h2 className="text-[22px] text-[#5A5A5A] font-semibold mb-10">
          Real Wedding
        </h2>
      }
    >
      <div className="space-y-5">
        <div className="flex ">
          <div className="w-1/2 mr-3">
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              Groom name*
            </label>
            <Input
              name="groomName"
              placeholder="Enter name"
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
          <div className="w-1/2">
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              Bridal name*
            </label>
            <Input
              name="bridalName"
              placeholder="Enter name"
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
        </div>
        <div>
          <label htmlFor="location" className="text-[#6C6C6C] font-medium mb-1">
            Wedding location
          </label>
          <Input
            name="location"
            placeholder="Enter location"
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
        <div className="flex">
          <div className="w-1/2 mr-3">
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              Venue
            </label>
            <Input
              name="venue"
              placeholder="Enter venue"
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
          <div className="w-1/2">
            <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
              Photographer
            </label>
            <Input
              name="photographer"
              placeholder="Enter photographer"
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
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-[#6C6C6C] font-medium mb-1"
          >
            Notes
          </label>
          <Textarea
            id="description"
            variant="bordered"
            placeholder="This would be a table for cake"
            type="text"
            className={"mt-2 text-brand-heading "}
            classNames={{
              inputWrapper:
                "input-wrapper  border border-[#bfbfbf] px-5 py-2 rounded-md  h-24",
              input: "input text-base max-md:text-sm",
            }}
          />
        </div>
      </div>
      <Button
        variant="solid"
        className="w-full py-3.5 mt-8 h-[50px] max-w-[130px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
        onClick={() => setIsOpen(false)}
      >
        Save
      </Button>
    </Sheet>
  );
};

export default SubmitRealWedding;
