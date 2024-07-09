import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

const Button = ({
  className='',
  arrow=false,
  title,
  href='/',
  type,
  btn=false
}: {
  className?: string;
  arrow?: boolean;
  title: string;
  href?: string;
  type?:"submit",
  btn?:boolean
}) => {
  return (
    btn?<button type={type}  className={twMerge(
      "bg-brand text-white rounded p-2 flex items-center w-fit px-3",
      className
    )}>
      {title}
    </button>:
    <Link
      href={href}
      className={twMerge(
        "text-brand border border-brand rounded p-2 flex items-center w-fit px-3",
        className
      )}
    >
      {title} {arrow && <BsArrowRight className="ms-3" />}
    </Link>
  );
};

export default Button;
