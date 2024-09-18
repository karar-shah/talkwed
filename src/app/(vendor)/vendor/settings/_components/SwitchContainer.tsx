
import { cn, Switch } from "@nextui-org/react";
import React from 'react';


const SwitchContainer = ({title}:{title:string}) => {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <div className="flex justify-between items-center border-b last:border-b-0 border-[#D0D0D0] pb-2.5">
    <p className="font-semibold text-medium text-[#6C6C6C]">{title}</p>
    <Switch
      checked={isOn}
      onChange={(e)=>setIsOn(e.target.checked)}
        thumbIcon={
          isOn ? (
            <>ON</>
          ) : (
            <>OFF</>
          )
        }
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
  )
}

export default SwitchContainer