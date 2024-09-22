import Button from "@/common/Button";
import { Progress } from "@nextui-org/react";

const CompleteStorefront = () => {
  return (
    <div className="border border-[#DADADA] w-full rounded-md flex flex-col flex-1">
      <div className="pt-7 pb-10 px-5">
        <h2 className="text-xl font-medium text-[#444444]">
          Complete your Storefront
        </h2>
        <p className="text-[#575757]">
          You&apos;re just 3 steps away from completing your storefront.
        </p>
        <p className="flex justify-end text-[#575757] mt-5">10%</p>
        <Progress
          aria-label="Loading..."
          color="secondary"
          value={5}
          className=""
          size="md"
        />
        <div className="flex flex-col justify-center items-center space-y-7 mt-9">
          <img
            src="/icons/storefront-icon.svg"
            alt="storefront-icon"
            className="size-[100px]"
          />
          <Button
            btn={true}
            title="Complete Storefront"
            className="bg-white text-[#6B14A6] border border-[#5C148C] py-3.5 px-[18px] text-base font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default CompleteStorefront;
