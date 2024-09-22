"use client";
import { Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const Page = () => {
  const [isActive, setIsActive] = useState("yearly");
  return (
    <div className="px-6 lg:px-14 pt-10 pb-20">
      <Button
        as={Link}
        href="/vendor/collection"
        variant="solid"
        size="sm"
        className="bg-transparent"
      >
        <IoIosArrowBack color="#595959" size="18" />
        <span className="font-medium text-lg text-[#595959] underline">
          Back
        </span>
      </Button>
      <div className="">
        <div className="justify-between items-start text-center w-full lg:w-1/2 mx-auto mb-6">
          <div>
            <p className="font-bold text-2xl text-[#444444]">
              Choose a plan for your Collection Feature
            </p>
            <p className="font-medium text-[#777777]">
              Choose the perfect plan for your collection and unlock the full
              potential of your creative vision with our tailored options.
            </p>
            <div className="mt-6">
              <Switch isActive={isActive} setIsActive={setIsActive} />
            </div>
          </div>
        </div>
      </div>

      <PricingTable isActive={isActive} />
    </div>
  );
};

export default Page;

const Switch = ({ isActive, setIsActive }: any) => {
  return (
    <div className="inline-block">
      <div className="flex justify-center border-1.5 border-[#B8B8B8] rounded-[31px] overflow-hidden">
        <p
          onClick={() => setIsActive("yearly")}
          className={`py-2.5 px-8 font-medium bg-brand rounded-[31px] cursor-pointer ${
            isActive === "yearly"
              ? "bg-brand  text-white px-8"
              : "text-brand bg-white"
          }`}
        >
          Yearly
        </p>
        <p
          onClick={() => setIsActive("monthly")}
          className={`py-2.5 px-6 font-medium rounded-[31px] cursor-pointer ${
            isActive === "monthly"
              ? "bg-brand  text-white "
              : "text-brand bg-white"
          }`}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

const PricingTable = ({ isActive }: { isActive: string }) => {
  return (
    <>
      {/* for desktop */}
      <div className="hidden lg:block">
        <table className="border-separate font-medium text-[#777777] border-spacing-0 w-full mt-16">
          <thead>
            <tr>
              <td>
                <p className="mt-36 text-[#777777] text-lg font-bold">
                  Features
                </p>
              </td>
              <td className=" border-t-1 border-l-1 rounded-tl-[5px] border-[#C1C1C1]  px-7">
                <div className="flex flex-col items-center">
                  <p className="font-bold text-[22px]">Basic</p>
                  <p className="font-bold">
                    $
                    <span className="font-bold text-[40px]">
                      {isActive === "yearly" ? "8" : "10"}
                    </span>
                    /month
                  </p>
                  <Button
                    variant="solid"
                    size="lg"
                    className="bg-brand text-white text-lg rounded-md mt-3"
                  >
                    Try for free
                  </Button>
                </div>
              </td>
              <td className="border-t-1 border-l-[0.5px] border-[#C1C1C1] px-7">
                <div className="flex flex-col items-center">
                  <p className="font-bold text-[22px]">Pro</p>
                  <p className="font-bold">
                    $
                    <span className="font-bold text-[40px]">
                      {isActive === "yearly" ? "16" : "18"}
                    </span>
                    /month
                  </p>
                  <Button
                    variant="solid"
                    size="lg"
                    className="bg-brand text-white text-lg rounded-md mt-3"
                  >
                    Try for free
                  </Button>
                </div>
              </td>
              <td className="border-1 rounded-tr-[5px] border-[#C1C1C1] border-b-0 px-7">
                <div className="flex flex-col items-center">
                  <p className="font-bold text-[22px]">Unlimited</p>
                  <p className="font-bold">
                    $
                    <span className="font-bold text-[40px]">
                      {isActive === "yearly" ? "24" : "28"}
                    </span>
                    /month
                  </p>
                  <Button
                    variant="solid"
                    size="lg"
                    className="bg-brand text-white text-lg rounded-md mt-3"
                  >
                    Try for free
                  </Button>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="*:border-l-1 *:border-t-1 *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8] *:text-lg">
              <td className="border-t-1 border-l-1 py-2 px-4 lg:py-4 lg:px-7  border-[#C8C8C8] rounded-tl-[5px] !text-base !font-medium">
                Free trail
              </td>
              <td>2 months</td>
              <td>2 months</td>
              <td className="border-r-1 border-[#C8C8C8]">2 months</td>
            </tr>
            <tr className="*:border-l-1 *:border-t-1 *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8] *:font-bold *:text-lg">
              <td className="border-t-1 border-l-1 py-2 px-4 lg:py-4 lg:px-7 border-[#C8C8C8] !text-base !font-medium">
                Photo storage
              </td>
              <td>10 GB</td>
              <td>100 GB</td>
              <td className="border-r-1 border-[#C8C8C8]">Unlimited</td>
            </tr>
            <tr className="*:border-l-1 *:border-t-1 *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8] *:text-lg">
              <td className="border-t-1 border-l-1 py-2 px-4 lg:py-4 lg:px-7  border-[#C8C8C8] !text-base !font-medium">
                Video upload
              </td>
              <td>30 min</td>
              <td>2 hours</td>
              <td className="border-r-1 border-[#C8C8C8]">5 hours</td>
            </tr>
            <tr className="*:border-l-1 *:border-t-1 *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8] *:text-lg">
              <td className="border-t-1 border-l-1 py-2 px-4 lg:py-4 lg:px-7 border-[#C8C8C8] !text-base !font-medium">
                Unlimited galleries
              </td>
              <td>
                <TiTick color="#9924E9" size={22} className="block mx-auto" />
              </td>
              <td>
                <TiTick color="#9924E9" size={22} className="block mx-auto" />
              </td>
              <td className="border-r-1 border-[#C8C8C8]">
                <TiTick color="#9924E9" size={22} className="block mx-auto" />
              </td>
            </tr>
            <tr className="*:border-t-1 *:border-b-1 *:border-l-1  *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8]">
              <td className="border-t-1 border-l-1 border-b-1 border-r-0 py-2 px-4 lg:py-4 lg:px-7  border-[#C8C8C8] rounded-bl-[5px] !text-base !font-medium">
                Full resolution download
              </td>
              <td>
                <TiTick color="#9924E9" size={22} className="block mx-auto" />
              </td>
              <td>
                <TiTick color="#9924E9" size={22} className="block mx-auto" />
              </td>
              <td className="rounded-br-[5px] border-r-1 border-[#C8C8C8]">
                <TiTick color="#9924E9" size={22} className="block mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* for mobile */}
      <div className="block lg:hidden space-y-10">
        {["Basic", "Pro",'Unlimited'].map((item) => (
          <table key={item} className="border-separate font-medium text-[#777777] border-spacing-0 w-full mt-16">
            <thead>
              <tr>
                <td>
                  <p className="mt-36 text-[#777777] text-lg font-bold text-center pr-2.5">
                    Features
                  </p>
                </td>
                <td className="border-x-1 border-t-1 rounded-t-[5px] border-[#C1C1C1] px-2.5 lg:px-7">
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-[22px]">{item}</p>
                    <p className="font-bold">
                      $
                      <span className="font-bold text-[40px]">
                        {isActive === "yearly" ? "8" : "10"}
                      </span>
                      /month
                    </p>
                    <Button
                      variant="solid"
                      size="lg"
                      className="bg-brand text-white text-lg rounded-md mt-3"
                    >
                      Try for free
                    </Button>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="*:border-l-1 *:border-t-1 *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8] *:text-lg">
                <td className="border-t-1 border-l-1 py-2 px-4 lg:py-4 lg:px-7  border-[#C8C8C8] rounded-tl-[5px] !text-base !font-medium">
                  Free trail
                </td>
                <td className="border-r-1 border-[#C8C8C8]">2 months</td>
              </tr>
              <tr className="*:border-l-1 *:border-t-1 *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8] *:font-bold *:text-lg">
                <td className="border-t-1 border-l-1 py-2 px-4 lg:py-4 lg:px-7 border-[#C8C8C8] !text-base !font-medium">
                  Photo storage
                </td>
                <td className="border-r-1 border-[#C8C8C8]">10 GB</td>
              </tr>
              <tr className="*:border-l-1 *:border-t-1 *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8] *:text-lg">
                <td className="border-t-1 border-l-1 py-2 px-4 lg:py-4 lg:px-7  border-[#C8C8C8] !text-base !font-medium">
                  Video upload
                </td>
                <td className="border-r-1 border-[#C8C8C8]">30 min</td>
              </tr>
              <tr className="*:border-l-1 *:border-t-1 *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8] *:text-lg">
                <td className="border-t-1 border-l-1 py-2 px-4 lg:py-4 lg:px-7 border-[#C8C8C8] !text-base !font-medium">
                  Unlimited galleries
                </td>
                <td className="border-r-1 border-[#C8C8C8]">
                  <TiTick color="#9924E9" size={22} className="block mx-auto" />
                </td>
              </tr>
              <tr className="*:border-t-1 *:border-b-1 *:border-l-1  *py-2 *px-4 lg:*py-4 *lg:px-7 *:text-center *:border-[#C8C8C8]">
                <td className="border-t-1 border-l-1 border-b-1 border-r-0 py-2 px-4 lg:py-4 lg:px-7  border-[#C8C8C8] rounded-bl-[5px] !text-base !font-medium">
                  Full resolution download
                </td>
                <td className="border-r-1 border-[#C8C8C8]">
                  <TiTick color="#9924E9" size={22} className="block mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};
