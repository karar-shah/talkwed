'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Overview", link: "/vendor" },
  { title: "Storefront", link: "/vendor/storefront" },
  { title: "Messages", link: "/vendor/messages" },
  { title: "Reviews", link: "/vendor/reviews" },
];
const VendorHeader2 = () => {
  const pathname=usePathname()
  return (
    <div className="bg-[#FAFAFA] border-b border-[#E7E7E7]">
      <div className="max-w-[1280px] mx-auto px-6">
        <nav className="flex space-x-8 items-center transition-all duration-100">
          {menuItems.map((item, index) => (
            <div className="flex flex-col justify-between" key={index}>
            <Link href={item.link} className={`pt-5 text-lg ${pathname === item.link ? "text-[#2F2F2F] font-semibold pb-4" : "pb-5 font-medium text-[#3F3F3F]"}`}>
              {item.title}
            </Link>
            {pathname === item.link ? <span className="rounded-lg border-b-4 border-[#9924E9] "> </span> : null}
            </div>
          ))}
          </nav>
      </div>
    </div>
  );
};

export default VendorHeader2;
