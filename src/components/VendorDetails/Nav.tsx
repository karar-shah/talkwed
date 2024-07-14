import React from "react";
import { NavList } from ".";

const Nav = () => {
  return (
    <nav className="border-b pb-3">
      <ul className="flex space-x-5 text-[#767676] flex-wrap">
        {NavList.map((item, index) => (
          <li key={index} className="text-base font-semibold">
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
