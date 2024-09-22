import Button from "@/common/Button";
import { useModalAction } from "@/context/modal.context";
import { Checkbox, cn, Select, SelectItem, Switch } from "@nextui-org/react";
import { useState } from "react";
const EventBookings = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const { closeModal } = useModalAction();
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="px-2.5 pt-3 pb-4">
      <p className="font-semibold text-[22px] mb-4 text-[#5A5A5A]">
        Set Availability
      </p>
      <hr />
      <div>
        <p className="text-[#6C6C6C] font-medium mt-4">
          Default weekly availability
        </p>
        <p className="text-[#777777] text-sm mb-5">
          Add your default weekly schedule. You can adjust at any time.
        </p>
        <div className="flex flex-col items-center">
          <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden">
            {days.map((day, index) => (
              <div
                key={day}
                className="flex flex-col items-center border-r last:border-r-0 w-12 sm:w-[72px]"
              >
                <div className="p-2 text-center border-b text-sm font-medium bg-[#F9F9F9] w-full h-full text-gray-600">
                  {day}
                </div>
                <Checkbox
                  radius="sm"
                  defaultSelected
                  color="secondary"
                  className="mt-1 p-2 mb-2"
                  aria-label={`Select ${day}`}
                />
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6" />
        <p className="text-[#6C6C6C] font-medium mt-4">Weddings per day</p>
        <p className="text-[#777777] text-sm mb-5">
          Set your daily capacity by selecting the maximum number of events you
          can serve per day.
        </p>
        <div className="w-full">
          <Select
            startContent={
              <div className="bg-[#F9F8F8] text-[#6C6C6C] py-3 px-5 border-r">
                Max.
              </div>
            }
            items={weddingsPerDay}
            placeholder="1"
            className=""
            size="lg"
            variant="bordered"
            classNames={{
              trigger:
                " trigger px-0 h-fit w-full mt-2 rounded border border-[#DCDCDC]",
              value: "value text-base max-md:text-sm",
            }}
          >
            {(event) => <SelectItem key={event.key}>{event.label}</SelectItem>}
          </Select>
        </div>
        <hr className="my-6" />
        <div>
          <div className="flex items-center justify-between">
            <div className="text-[#6C6C6C] font-medium">Automatic update</div>
            <Switch
              checked={isOn}
              onChange={(e) => setIsOn(e.target.checked)}
              thumbIcon={isOn ? <>Yes</> : <>No</>}
              size="lg"
              classNames={{
                base: cn(""),
                wrapper:
                  "w-[73px] bg-[#F1F1F1] group-data-[selected=true]:bg-[#F1F1F1]",
                thumb: cn(
                  "w-10 group-data-[selected=true]:w-10",
                  "bg-[#818181] text-white",
                  "group-data-[selected=true]:bg-[#9924E9]"
                ),
              }}
            ></Switch>
          </div>
            <p className="text-[#777777] text-sm mb-5 mt-2.5">
              We will automatically mark you as unavailable once you reach your
              daily capacity for events to save you time managing new leads.
            </p>
            <hr className="my-6" />
        </div>
      </div>
      <Button
        className="py-3 px-8 mt-14 bg-[#5C148C] text-white text-base font-medium shadow-md rounded-lg"
        href="#"
        title="Add"
        type="button"
        btn={true}
        onClick={closeModal}
      />
    </div>
  );
};
export const weddingsPerDay = [
  { key: "1", label: "1" },
  { key: "2", label: "2" },
  { key: "3", label: "3" },
];
export default EventBookings;
