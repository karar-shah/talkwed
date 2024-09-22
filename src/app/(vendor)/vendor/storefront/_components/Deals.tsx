import { useModalAction } from "@/context/modal.context";
import { Button, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { LuInfo } from "react-icons/lu";
import CustomDealCards from "./CustomDealCards";
const specialOffers = [3, 5, 10, 15, 20, 25, 30];

const Deals = () => {
  const { openModal } = useModalAction();
  const [showDeals, setShowDeals] = useState(false);
  return (
    <div>
      <div className="pr-14 mb-9">
        <p className="font-bold text-[#444444] text-2xl mb-3 ">Deals</p>
        <div className="border border-[#3AC3D6] bg-[#ebf9fb] rounded-[4px] flex px-2.5 py-2 space-x-2">
          <div className="size-6">
            <LuInfo size={24} color="#3AC3D6" />
          </div>

          <p className="text-sm text-[#686868]">
            Add special offers to your storefront to attract more interest and
            generate more leads.
          </p>
        </div>
      </div>
      <div className="border border-[#DADADA] rounded-md pt-6 pl-5 pb-9 pr-8">
        <div className="">
          <p className="text-[#5E5E5E] text-lg font-semibold mb-4">
            Add a special offer for TalkWed couples
          </p>
          <div className="flex flex-wrap mb-2">
            {specialOffers.map((discount) => (
              <DiscountPercentage key={discount} discount={discount} />
            ))}
          </div>
          <div className="flex space-x-2 items-center">
            <Checkbox
              radius="none"
              color="secondary"
              size="sm"
              classNames={{
                wrapper: "rounded-[3px]",
              }}
            />
            <p className="font-medium text-[#6C6C6C]">
              Not offering any discount currently
            </p>
          </div>
        </div>
        <div className="flex flex-wrap space-y-2 lg:space-y-0 lg:space-x-3.5 mt-9">
          <Button
            variant="solid"
            size="lg"
            className="bg-brand text-white py-3 px-4 font-medium rounded-xl"
            onClick={() => setShowDeals(!showDeals)}
          >
            Activate Discount
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="text-brand border text-base border-brand py-3.5 px-4 font-medium rounded-xl bg-transparent"
            onClick={() =>
              openModal({
                title: "Delete Task",
                modal: "CREATE_CUSTOM_DEAL",
                size: "lg",
                bodyOnly: true,
              })
            }
          >
            Create Custom Deal
          </Button>
        </div>
      </div>
      {showDeals && <CustomDealCards />}
    </div>
  );
};

export default Deals;
const DiscountPercentage = ({ discount }: any) => {
  return (
    <p className="border border-[#DADADA] inline-block rounded-md px-[18px] py-[2px] mr-5 mb-2">
      {discount}%
    </p>
  );
};
