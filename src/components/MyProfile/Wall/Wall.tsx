import SelectItems from "@/common/Select";
import moment from "moment";
import { BiMessageDetail } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiArrowUpDownLine } from "react-icons/ri";
import { list } from ".";


const Wall = () => {
  return (
    <div className="py-10 px-7">
      <div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#353535] ">
            Start a discussions
          </h3>
          <div className="border rounded p-4 w-full text-xl font-medium text-[#848484] flex items-center justify-between cursor-pointer">
            <div>Write your post...</div>
            <div>
              <BsSend />
            </div>
          </div>
        </div>
        <div className="flex md:items-center justify-between border-b pt-9 pb-2 flex-col-reverse md:flex-row">
          <h3 className="text-lg font-semibold text-[#353535] ">
            Start a discussions
          </h3>
          <div>
            <div className="flex items-center space-x-4">
              <SelectItems
                label=""
                placeholder="All"
                className="-mt-4"
                items={[
                  { key: 1, label: "New York" },
                  { key: 2, label: "Dallas" },
                ]}
              />
              <div className="flex items-center min-w-40 space-x-1">
                <RiArrowUpDownLine size={16} className="text-[#6B6B6B]" />
                <div className="text-[#787878] font-semibold text-sm">
                  sort by:
                </div>
                <div className="text-[#6B6B6B] font-semibold ">Date</div>
                <FaCaretDown className="text-[#6B6B6B]" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-y space-y-5">
          {list.map((item, index) => (
            <div key={index} className="space-y-4 text-[#4F4F4F] pt-5">
              <div className="flex space-x-3 items-center">
                <div>
                  <img
                    src={item.image}
                    alt={item.user}
                    className="rounded-full"
                    width={45}
                  />
                </div>
                <div>
                  <h4 className=" font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm font-normal">
                    by <span className="font-semibold">{item.user}</span>, on{" "}
                    <span className="font-semibold">
                      {moment(item.date).calendar()}
                    </span>{" "}
                  </p>
                </div>
              </div>
              <p className="text-base font-medium">{item.message}</p>
              <div className="space-x-4 flex items-center text-base font-semibold  text-[#787878]">
                <div className="space-x-2 flex items-center">
                  <BiMessageDetail size={22} /> <span>{item.response}</span>
                </div>
                <div className="space-x-2 flex items-center ">
                  <MdOutlineRemoveRedEye size={22} /> <span>{item.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Wall;
