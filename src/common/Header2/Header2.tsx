"use client";
import {
  Navbar,
  NavbarContent,
  NavbarItem
} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "My Wedding", link: "/client" },
  { title: "Checklist", link: "/client/checklist" },
  { title: "Vendor Manager", link: "/client/vendor-manager" },
  { title: "Guest list", link: "/client/guest-list" },
  { title: "Seating chart", link: "/client/seating-chart" },
  { title: "Budget", link: "/client/budget" },
];
const Header2 = () => {
  const pathname=usePathname()
  return (
    <Navbar maxWidth="xl" className={`py-1 bg-brand text-white`}>
      <NavbarContent className="gap-5">
        {
          menuItems.map((item, index) => (
            <NavbarItem
              key={index}
              >
              <Link
                href={item.link}
                className={`text-lg ${pathname ===item.link ? "font-bold" : ""}`}
              >
                {item.title}
              </Link>
              </NavbarItem>
          ))
        }
      </NavbarContent>
    </Navbar>
  );
};

export default Header2;
