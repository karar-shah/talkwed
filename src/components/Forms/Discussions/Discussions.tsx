import React from "react";
import { list } from ".";
import moment from "moment";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Discussions = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#353535] mb-3">
        Recent discussions
      </h3>
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
            <div className="flex items-center flex-wrap space-x-2">
              {item.images.map((item2, index2) => (
                <div key={index2}>
                  <img
                    src={item2}
                    alt={item2}
                    className="rounded  object-cover h-[100px]"
                    width={100}
                    // height={100}
                  />
                </div>
              ))}
            </div>
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
  );
};

export default Discussions;
