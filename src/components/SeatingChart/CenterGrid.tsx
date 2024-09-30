"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaRotate } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

export default function CenterGrid({
  setIsDeleteOpen,
  setIsEditOpen,
  className,
}: any) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLUListElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX - 250, y: e.clientY - 250 });
    setMenuVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuVisible &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  const handleEdit = () => {
    console.log("Edit action");
    setMenuVisible(false);
    setIsEditOpen(true);
  };

  const handleDelete = () => {
    console.log("Delete action");
    setMenuVisible(false);
    setIsDeleteOpen(true);
  };

  const handleRotate = () => {
    console.log("Rotate action");
    setMenuVisible(false);
  };
  return (
    <div className="flex-grow relative">
      <div className="h-[50rem]  bg-white   bg-grid-black/[0.2] relative ">
        {menuVisible && (
          <ul
            ref={menuRef}
            className="font-semibold text-white rounded max-w-12 text-xs"
            style={{
              position: "absolute",
              top: menuPosition.y,
              left: menuPosition.x,
              backgroundColor: "#474747",
              // border: "1px solid #ccc",
              zIndex: 1000,
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li
              style={{ padding: "8px", cursor: "pointer" }}
              onClick={handleEdit}
              className="flex flex-col items-center justify-center align-middle gap-[1px]"
            >
              <span role="img" aria-label="edit">
                <BiEditAlt />
              </span>
              <div>Edit</div>
            </li>
            <li
              style={{ padding: "8px", cursor: "pointer" }}
              onClick={handleDelete}
              className="flex flex-col items-center justify-center align-middle gap-[1px]"
            >
              <span role="img" aria-label="delete">
                <RiDeleteBinLine />
              </span>
              <div>Delete</div>
            </li>
            <li
              style={{ padding: "8px", cursor: "pointer" }}
              onClick={handleRotate}
              className="flex flex-col items-center justify-center align-middle gap-[1px]"
            >
              <span role="img" aria-label="rotate">
                <FaRotate />
              </span>
              <div>Rotate</div>
            </li>
          </ul>
        )}
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0   bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex relative">
          <Image
            src="/seating-chart/chair-8-large.svg"
            className="absolute top-40 left-20"
            width={224}
            height={207}
            objectFit="cover"
            quality={100}
            alt="some image"
            onContextMenu={handleContextMenu}
          />
          <Image
            src="/seating-chart/chair-3-large.svg"
            className="absolute top-10 left-80"
            width={224}
            height={207}
            objectFit="cover"
            quality={100}
            alt="some image"
            onContextMenu={handleContextMenu}
          />
        </div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>
      </div>
    </div>
  );
}
