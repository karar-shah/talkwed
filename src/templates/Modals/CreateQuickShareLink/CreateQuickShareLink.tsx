import { useModalAction } from "@/context/modal.context";
import { Avatar, Button, Chip, cn, Input, Switch } from "@nextui-org/react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const CreateQuickShareLink = () => {
  const { closeModal, openModal } = useModalAction();
  const [isOn, setIsOn] = useState(false);
  const [isShowMembers, setIsShowMembers] = useState(false);
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
        onClick={() => setIsShowMembers(!isShowMembers)}
      >
        View Password
      </Button>
      {!isShowMembers ? (
        <>
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
        </>
      ) : (
        <>
          <p className="text-[#6C6C6C] font-medium">Shared with</p>
          <div className="border border-[#D0D0D0] divide-y space-y-3 p-3.5 rounded-md mt-1">
            <div className="flex items-center">
              <Avatar src="https://i.pravatar.cc/300" size="sm" />
              <div className="text-[#606060] font-semibold ml-3">
                Aryana G.{" "}
              </div>
              <Chip className="bg-[#EAEAEA] px-2.5 py-2 ml-auto text-[#464646] [&_span]:font-medium"  onClick={()=>openModal({
                title:"Remove",
                bodyOnly:true,
                modal:'REMOVE_ACCESS',
                size:"lg"
              })}>
                Remove
              </Chip>
            </div>
            <div className="flex items-center pt-3">
              <Avatar src="https://i.pravatar.cc/300" size="sm" />
              <div className="text-[#606060] font-semibold ml-3">
              Jack S.
              </div>
              <Chip className="bg-[#EAEAEA] px-2.5 py-2 ml-auto text-[#464646] [&_span]:font-medium" onClick={()=>openModal({
                title:"Remove",
                bodyOnly:true,
                modal:'REMOVE_ACCESS',
                size:"lg"
              })}>
                Remove
              </Chip>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateQuickShareLink;
