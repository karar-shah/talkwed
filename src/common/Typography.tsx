import React from "react";
import { twMerge } from "tailwind-merge";
interface props {
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  title: string;
  className?: string;
}

const Typography = ({ title, className='', component }: props) => {
  if ((component == "h1")) return <h1>{title}</h1>;
  if ((component == "h2")) return <h2 className={twMerge("font-bold text-[26px] text-[#353535]",className)}>{title}</h2>;
  if ((component == "h3")) return <h3 className={twMerge('font-semibold text-lg text-[#3D3D3D]',className)}>{title}</h3>;
  if ((component == "h4")) return <h4 className={twMerge('font-medium text-lg text-[#2E2E2E]',className)}>{title}</h4>;
  if ((component == "h5")) return <h5 >{title}</h5>;
  if ((component == "h6")) return <h6 >{title}</h6>;
  if ((component == "p")) return <p className={twMerge('font-normal text-base text-[#545454]',className)}>{title}</p>;

};

export default Typography;
