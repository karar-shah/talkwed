"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Planning tools", "Vendors", "Venues", "Ideas", "Forms"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-xl "
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href={'/'} className="font-bold  text-brand">TALKWED</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/planning-tools">
            Planning tools
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/vendors">
            Vendors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/venues">
            Venues
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/ideas">
            Ideas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/forms"
            className="select-none text-[14px] uppercase  
                        group w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-brand hover:text-brand
                        after:rounded-md after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Forms
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            className="border border-brand text-brand rounded bg-transparent"
            href="#"
            variant="flat"
          >
            Sign in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-brand text-white rounded"
            href="#"
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
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
