import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

const Button = ({
  className='',
  arrow=false,
  title,
  href='/',
}: {
  className?: string;
  arrow?: boolean;
  title: string;
  href: string;
}) => {
  return (
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
