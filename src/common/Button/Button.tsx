import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
const outline = "bg-brand text-white rounded p-2 flex items-center w-fit px-3";
const fill = "bg-brand text-white rounded p-2 flex items-center w-fit px-3";
const Button = ({
  className = "",
  arrow = false,
  title,
  href = "/",
  type,
  btn = false,
  variant = "outline",
  onClick,
}: {
  className?: string;
  arrow?: boolean;
  title: string;
  href?: string;
  type?: "submit";
  btn?: boolean;
  variant?: "outline" | "file";
  onClick?: () => void;
}) => {
  return btn ? (
    <button
      type={type}
      onClick={onClick && onClick}
      className={twMerge(
        "bg-brand text-white text-lg font-medium rounded p-2 flex items-center w-fit px-3 ",
        className
      )}
    >
      {title} {arrow && <BsArrowRight className="ms-3" />}
    </button>
  ) : (
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
