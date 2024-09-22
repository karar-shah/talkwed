import { useModalAction } from "@/context/modal.context";
import { Chip } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

const CustomDealCards = () => {
  const { openModal } = useModalAction();

  return (
    <>
      <p className="text-lg text-[#5E5E5E] font-semibold mb-3.5 mt-12">
        Custom Deals
      </p>
      <div className="flex flex-wrap">
        <div className="bg-[#F3E5FC96] max-md:w-full border  border-[#9924E940]/25 rounded-md mr-5 pb-4 pt-3 pl-3 pr-2 flex flex-col space-y-2 cursor-pointer"
          onClick={() =>
            openModal({
              title: "Delete Task",
              modal: "EDIT_CUSTOM_DEAL",
              size: "lg",
              bodyOnly: true,
            })
          }
        >
          <Chip
            endContent={<IoMdArrowDropdown fill="#085F00" />}
            variant="faded"
            color="success"
            classNames={{
              base: "border border-[#A5ED93] bg-[#CCFFBF]",
              content: "text-[#085F00] font-semibold text-xs py-1 px-2.5",
            }}
          >
            Published
          </Chip>
          <div className="flex space-x-1">
            <div>
              <p className="font-semibold text-[#4B4B4B] mb-[2px]">
                Offer Name <span className="font-medium">(Type)</span>
              </p>
              <p className="font-medium text-sm text-[#5E5E5E]">
                Expires 05-06-24
              </p>
            </div>
            <img src="/icons/Group 6059.svg" alt="discount-tag" />
          </div>
        </div>
        <div className="bg-[#F3E5FC96] max-md:w-full max-md:mt-6 border  border-[#9924E940]/25 rounded-md mr-5 pb-4 pt-3 pl-3 pr-2 flex flex-col space-y-2 cursor-pointer"
        onClick={() =>
          openModal({
            title: "Delete Task",
            modal: "EDIT_CUSTOM_DEAL",
            size: "lg",
            bodyOnly: true,
          })
        }
        >
          <Chip
            endContent={<IoMdArrowDropdown fill="#A46B27" />}
            variant="faded"
            classNames={{
              base: "border border-[#F2CFA6] bg-[#FFE2BF]",
              content: "text-[#A46B27] font-semibold text-xs py-1 px-2.5",
            }}
          >
            Unpublished
          </Chip>
          <div className="flex space-x-1">
            <div>
              <p className="font-semibold text-[#4B4B4B] mb-[2px]">
                Offer Name <span className="font-medium">(Type)</span>
              </p>
              <p className="font-medium text-sm text-[#5E5E5E]">
                Expires 05-06-24
              </p>
            </div>
            <img src="/icons/Group 6059.svg" alt="discount-tag" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDealCards;
