import Sheet from "@/common/Sheet";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

const MoveGuestSheet = ({ isOpen, setIsOpen }: any) => {
  return (
    <div>
      <Sheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className="p-8"
        header={
          <h2 className="text-[22px] text-[#5A5A5A] font-semibold mb-10">
            Move Guest
          </h2>
        }
      >
        <div className="mb-28">
          <RadioGroup orientation="horizontal">
            <Radio value="Couple" className="lg:mr-5">
              Couple
            </Radio>
            <Radio value="Groom’s family" className="lg:mr-5">
              Groom’s family
            </Radio>
            <Radio value="Coworkers" className="lg:mr-5">
              Coworkers
            </Radio>
            <Radio value="Mutual friends" className="lg:mr-5">
              Mutual friends{" "}
            </Radio>
          </RadioGroup>
        </div>
        <Button
          variant="solid"
          className="w-full py-3.5 mt-8 h-[50px] max-w-[129px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
          onClick={() => setIsOpen(false)}
        >
          Move
        </Button>
      </Sheet>
    </div>
  );
};

export default MoveGuestSheet;
