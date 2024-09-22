import { getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "@nextui-org/react";
const EventBookings = () => {
  return (
    <div className="px-2.5 pt-3 pb-4">
      <p className="font-semibold text-[22px] mb-4 text-[#5A5A5A]">
        Event Bookings
      </p>
      <hr />
      <div className="w-full flex items-center justify-center mt-5">
        <RangeCalendar
          aria-label="Date (Uncontrolled)"
          topContent={
            <div className="px-6 pt-5 gap-2 flex items-center">
              <span className="h-[3px] rounded-lg w-4 bg-[#9924E9]"></span>

              <p className="text-sm font-light text-[#595959]">Start date</p>
            </div>
          }
          defaultValue={{
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ weeks: 1 }),
          }}
        />
      </div>
    </div>
  );
};

export default EventBookings;
