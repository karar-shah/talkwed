"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setIsScroll] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsScroll(window.pageYOffset > 100);
  };

  const menuItems = [
    { title: "Planning tools", link: "/planning-tools" },
    { title: "Vendors", link: "/vendors" },
    { title: "Venues", link: "/venues" },
    { title: "Ideas", link: "/ideas" },
    { title: "Forms", link: "/forms" },
  ];
  const linkClass =
    "relative select-none text-[14px] uppercase  group w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brand hover:text-brand after:rounded-md after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className={`py-1 shadow-lg`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-xl "
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href={"/"} className="font-bold  text-brand">
            TALKWED
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 font-medium text-xl"
        justify="center"
      >
        {menuItems?.map((item, index) => (
          <NavbarItem className="relative" key={index}>
            <Link
              href={item.link}
              className={twMerge(
                linkClass,
                `${
                  pathname.startsWith(item.link)
                    ? "after:scale-x-100 text-brand font-semibold"
                    : ""
                }`
              )}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="/signin"
            className="border border-brand text-brand rounded bg-transparent py-2 px-4"
          >
            Sign in
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-brand text-white rounded"
            href="/signup"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
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
              {item.title} x
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
