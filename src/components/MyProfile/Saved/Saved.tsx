import moment from "moment"
import { BiMessageDetail } from "react-icons/bi"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { list } from "."

const Saved = () => {
  return (
    <div className="py-10 px-7">
    <h3 className="text-lg font-semibold text-[#353535] ">
    Favorites
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
  )
}

export default Saved