import Link from "next/link";
import React from "react";
import { BreadcrumbProps } from ".";

const Breadcrumb = ({ list }: BreadcrumbProps) => {
  return (
    <div className="mt-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {list?.map((item, index) => (
            <li className="inline-flex items-center" key={index}>
              {item.active ? (
                <p className="">{item.title}</p>
              ) : (
               <div>
                 <Link
                  href={item.link}
                  className="inline-flex items-center text-sm font-medium text-brand underline"
                >
                  {item.title}
                </Link>
                <span>&nbsp;&nbsp;/</span>
               </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
