"use client";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbTriangleFilled } from "react-icons/tb";

const menuItems = [
  { title: "My Wedding", link: "/client" },
  { title: "Checklist", link: "/client/checklist" },
  { title: "Vendor Manager", link: "/client/vendor-manager" },
  { title: "Guest list", link: "/client/guest-list" },
  { title: "Seating chart", link: "/client/seating-chart" },
  { title: "Budget", link: "/client/budget" },
];
const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className={`py-1 bg-brand text-white`}
    >
      <NavbarContent className="hidden sm:flex gap-5">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.link}
              className={`relative text-lg ${
                pathname === item.link ? "font-bold" : ""
              }`}
            >
              {item.title}
              {item.link === pathname && (
                <TbTriangleFilled
                  color="white"
                  size={13}
                  className="absolute -bottom-4 left-1/2 translate-x-[-50%]"
                />
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-xl "
        />
      </NavbarContent>

      <NavbarMenu className="pt-20">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.link}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header2;
