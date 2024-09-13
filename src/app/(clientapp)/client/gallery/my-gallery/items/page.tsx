import { HiDotsVertical } from "react-icons/hi";

const page = () => {
  return (
    <div className="px-14 pt-6">
        <h2 className="font-bold text-2xl text-[#444444] border-b pb-6">My Gallery</h2>
        <div className="w-3/12 shadow-lg flex flex-col rounded-md mt-12">
          <div className="relative max-w-3/12 inline-block">
            <img
              src="/Rectangle 34624413.svg"
              alt="dots"
              className="block w-full"
            />
            <div className="size-6 cursor-pointer flex items-center justify-center bg-white/70 rounded-sm absolute top-2 right-2">
            <HiDotsVertical size={16} color="#454545"/>
            </div>
          </div>
          <p className="font-semibold text-lg text-[#5A5A5A] pt-2.5 pb-4 pl-4">
            Elsa’s Birthday
          </p>
      </div>
    </div>
  );
};

export default page;
