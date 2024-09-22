import Button from "@/common/Button";
import { Input, Textarea } from "@nextui-org/react";
import { StoreFrontTabProps } from "../page";

const LocationAndMap = ({ setActiveIndex }: StoreFrontTabProps) => {
  return (
    <>
      <h2 className="text-[#444444] font-bold text-2xl mb-9">Location & Map</h2>
      <div className=" px-6 pt-5 pb-24 border border-[#DADADA] rounded-md">
        <div className=" lg:w-1/2">
          <div className="flex flex-col space-y-5">
            <div>
              <label
                htmlFor="country"
                className="text-[#6C6C6C] font-semibold mb-1"
              >
                Country *
              </label>
              <Input
                name="country"
                placeholder="Canada"
                size="md"
                type="text"
                variant="bordered"
                className={"my-2"}
                classNames={{
                  input: "text-base max-md:text-sm  ",
                  inputWrapper:
                    "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="text-[#6C6C6C] font-semibold mb-1"
              >
                City *
              </label>
              <Input
                name="city"
                placeholder="New Ross, Nova Scotia"
                size="md"
                type="text"
                variant="bordered"
                className={"my-2"}
                classNames={{
                  input: "text-base max-md:text-sm  ",
                  inputWrapper:
                    "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="text-[#6C6C6C] font-semibold mb-1"
              >
                Postal Code *
              </label>
              <Input
                name="postalCode"
                placeholder="07304"
                size="md"
                type="text"
                variant="bordered"
                className={"my-2"}
                classNames={{
                  input: "text-base max-md:text-sm  ",
                  inputWrapper:
                    "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="text-[#6C6C6C] font-semibold mb-1"
              >
                Address *
              </label>
              <Input
                name="address"
                placeholder="123 Maple Street - New Ross, Nova Scotia - B0J 2M0"
                size="md"
                type="text"
                variant="bordered"
                className={"my-2"}
                classNames={{
                  input: "text-base max-md:text-sm  ",
                  inputWrapper:
                    "border border-[#BFBFBF] rounded-md py-3 px-[13px] h-fit",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="text-[#6C6C6C] font-semibold mb-1"
              >
                Business Hours
              </label>
              <Textarea
                id="businessHours"
                variant="bordered"
                placeholder="Enter text"
                type="text"
                className={"my-2 text-brand-heading "}
                classNames={{
                  inputWrapper:
                    "input-wrapper input-border border-[#bfbfbf] px-3 py-2  h-20",
                  input: "input text-base max-md:text-sm",
                }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="address"
                className="text-[#6C6C6C] font-semibold mb-1"
              >
                Map
              </label>
              <img src="/image 116.svg" alt="map" className="rounded-md" />
            </div>
          </div>
          <Button
            className="py-3 px-8 mt-24 bg-[#5C148C] text-white text-base font-medium shadow-md rounded-lg"
            href="#"
            title="Save"
            type="button"
            btn={true}
            onClick={() => setActiveIndex((activeIndex) => activeIndex + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default LocationAndMap;
