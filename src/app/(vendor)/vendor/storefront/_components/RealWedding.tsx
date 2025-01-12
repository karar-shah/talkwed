import { Button } from "@nextui-org/react";
import { useState } from "react";
import SubmitRealWedding from "./SubmitRealWedding";

const RealWedding = () => {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  return (
    <>
      {!isSubmitOpen ? (
        <div>
          <div className="flex justify-between flex-wrap space-y-2">
            <p className="font-bold text-2xl text-[#444444]">Real Wedding</p>
            <Button
              variant="solid"
              size="lg"
              className="py-3 px-4 text-white bg-brand text-lg rounded-md"
              onClick={() => setIsSubmitOpen(true)}
            >
              Submit Real Wedding
            </Button>
          </div>
          <div className="border-t border-[#C9C9C9] mb-7 mt-5"></div>
          <div className="flex flex-col border border-[#C7C7C7]  rounded-md lg:inline-block">
            <img src="/Rectangle 34624324.svg" alt="" />
            <div className="pt-3 px-3 pb-4">
              <p className="font-semibold text-lg text-[#444444]">
                Allyssa & Dieril
              </p>
              <p className="font-medium text-[#6C6C6C]">
                42 photos . 24/09/2024
              </p>
            </div>
          </div>
        </div>
      ) : (
        <SubmitRealWedding />
      )}
    </>
  );
};

export default RealWedding;
