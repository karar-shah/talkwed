"use client";
import { useModalAction } from "@/context/modal.context";
import {
  Button,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { LuShare2 } from "react-icons/lu";
import { PiPlayBold } from "react-icons/pi";
const menuItems = [
  { title: "Highlights", link: "/vendor/gallery" },
  { title: "Bridal Shower", link: "/vendor/collection" },
];
const GalleryNavbar = () => {
  const { openModal } = useModalAction();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log({ pathname }, pathname.startsWith("/vendor/gallery#gallery"));

  return (
    <Navbar
      className="border-b border-[#E7E7E7]"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      <NavbarContent className="hidden sm:flex max-w-[1280px] mx-auto px-6">
        <nav className="flex items-center justify-between transition-all duration-100 flex-1">
          <div className="flex items-center space-x-8">
            <h1 className="text-[#444444] text-2xl font-bold mr-16">
              Elsa’s Birthday
            </h1>
            {menuItems.map((item, index) => (
              <div className="flex flex-col justify-between" key={index}>
                <Link
                  href={item.link}
                  className={`pt-5 text-lg ${
                    pathname.startsWith(item.link) || pathname === item.link
                      ? "text-[#2F2F2F] font-semibold pb-4"
                      : "pb-5 font-medium text-[#3F3F3F]"
                  }`}
                >
                  {item.title}
                </Link>
                {pathname.startsWith(item.link) || pathname === item.link ? (
                  <span className="rounded-lg border-b-4 border-[#9924E9]"></span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2.5">
            <Button
              startContent={<LuShare2 size={20} color="#6B14A6" />}
              variant="bordered"
              radius="sm"
              size="sm"
              className="px-0 min-w-8 h-9 items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
              onClick={() =>
                openModal({
                  title: "Create Quick Share Link",
                  size: "2xl",
                  modal: "CREATE_QUICK_SHARE_LINK",
                })
              }
            ></Button>
            <Button
              startContent={<HiDownload size={20} color="#6B14A6" />}
              variant="bordered"
              radius="sm"
              size="sm"
              className="px-0 min-w-8 h-9 items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
            ></Button>

            <Button
              startContent={<PiPlayBold size={20} color="#6B14A6" />}
              variant="bordered"
              radius="sm"
              size="sm"
              className="px-0 min-w-8 h-9 items-center bg-[#9924E90D]/5 border border-[#9924E92B]/20 text-base font-semibold text-brand-link"
            ></Button>
          </div>
        </nav>
      </NavbarContent>
      <NavbarContent className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-xl "
        />
      </NavbarContent>

      <NavbarMenu className="pt-20 lg:hidden">
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

export default GalleryNavbar;
