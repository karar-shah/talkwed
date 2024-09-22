import { useModalAction } from "@/context/modal.context";
import { Button, cn, Input, Switch } from "@nextui-org/react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const CreateQuickShareLink = () => {
  const { closeModal } = useModalAction();
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <div>
        <label htmlFor="name" className="text-[#6C6C6C] font-medium mb-1">
          URL
        </label>
        <Input
          name="collectionName"
          placeholder="Https://"
          defaultValue="Https://"
          size="md"
          type="text"
          variant="bordered"
          className={"mt-2"}
          classNames={{
            input: "text-base max-md:text-sm ",
            inputWrapper: "border border-[#BFBFBF] rounded-md p-1.5 h-fit",
          }}
          endContent={
            <Button
              variant="solid"
              className="w-full py-3.5 h-[50px] max-w-[130px] rounded-lg text-lg text-white font-medium bg-[#5C148C]"
              onClick={() => closeModal()}
            >
              Create
            </Button>
          }
        />
      </div>
      <p className="text-[#606060] font-medium mt-2.5">
        Let anyone with the link view and download the selected photos.
      </p>
      <Button
        variant="light"
        className="my-6 cursor-pointer text-brand-link text-base font-semibold px-0 data-[hover=true]:bg-transparent"
        endContent={<FaAngleDown size={20} color="#6B14A6" />}
      >
        View Password
      </Button>

      <div>
        <hr className="text-[#CBCBCB]" />
        <div className="flex items-center justify-between my-5">
          <div>
            <p className="text-[#6C6C6C] font-medium">Allow downloads</p>
            <p className="text-sm font-medium text-[#606060]">
              Let visitors download in high resolution without a download PIN.
            </p>
          </div>
          <Switch
            checked={isOn}
            onChange={(e) => setIsOn(e.target.checked)}
            thumbIcon={isOn ? <>ON</> : <>OFF</>}
            size="lg"
            classNames={{
              base: cn(""),
              wrapper:
                "w-[73px] bg-[#F1F1F1] group-data-[selected=true]:bg-[#F1F1F1]",
              thumb: cn(
                "w-10 group-data-[selected=true]:w-10",
                "bg-[#818181] text-white",
                "group-data-[selected=true]:bg-[#5C148C]"
              ),
            }}
          ></Switch>
        </div>
      </div>
    </div>
  );
};

export default CreateQuickShareLink;
