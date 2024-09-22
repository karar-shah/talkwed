"use client";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
const menuItems = [
  { title: "Overview", link: "/vendor" },
  { title: "Storefront", link: "/vendor/storefront" },
  { title: "Messages", link: "/vendor/messages" },
  { title: "Reviews", link: "/vendor/reviews" },
];
const VendorHeader2 = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="bg-[#FAFAFA] border-b border-[#E7E7E7]"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent className="hidden sm:flex max-w-[1280px] mx-auto px-6">
        <nav className="flex items-center justify-between transition-all duration-100 flex-1">
          <div className="flex space-x-8">
            {menuItems.map((item, index) => (
              <div className="flex flex-col justify-between" key={index}>
                <Link
                  href={item.link}
                  className={`pt-5 text-lg ${
                    pathname === item.link
                      ? "text-[#2F2F2F] font-semibold pb-4"
                      : "pb-5 font-medium text-[#3F3F3F]"
                  }`}
                >
                  {item.title}
                </Link>
                {pathname === item.link ? (
                  <span className="rounded-lg border-b-4 border-[#9924E9]"></span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <div
              className={`flex items-center space-x-3 ${
                pathname === "/vendor/collection" ? "pb-4" : "pb-5"
              }`}
            >
              <MdOutlineCloudUpload
                size={24}
                color="#565656"
                className="cursor-pointer mt-4"
              />
              <Link
                href="/vendor/collection"
                className={`pt-5 text-lg ${
                  pathname === "/vendor/collection"
                    ? "text-[#2F2F2F] font-semibold"
                    : "font-medium text-[#3F3F3F]"
                }`}
              >
                Collection
              </Link>
            </div>
            {pathname === "/vendor/collection" ? (
              <span className="rounded-lg border-b-4 border-[#9924E9]"></span>
            ) : null}
          </div>
        </nav>
      </NavbarContent>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-xl "
        />
      </NavbarContent>

      <NavbarMenu className="pt-20 sm:hidden">
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

export default VendorHeader2;
