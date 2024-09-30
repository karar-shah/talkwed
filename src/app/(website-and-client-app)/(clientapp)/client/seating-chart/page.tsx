"use client";
import CenterGrid from "@/components/SeatingChart/CenterGrid";
import CenterSheet from "@/components/SeatingChart/CenterSheet";
import SidePanel from "@/components/SeatingChart/SidePanel";

import { useState } from "react";
import AddTable from "@/components/SeatingChart/AddTable";
import EditTable from "@/components/SeatingChart/EditTable";

export default function Page() {
  const [isMovePhotoOpen, setIsMovePhotoOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(true);

  return (
    <div className="max-w-[1440px] mx-auto flex">
      {/* SidePanel with fixed width */}
      <div className="w-[300px]">
        <SidePanel setIsMovePhotoOpen={setIsMovePhotoOpen} />
      </div>

      {/* Grid and tables images */}
      <CenterGrid
        setIsDeleteOpen={setIsDeleteOpen}
        setIsEditOpen={setIsEditOpen}
      />

      {/* Right panel */}
      <AddTable
        isMovePhotoOpen={isMovePhotoOpen}
        setIsMovePhotoOpen={setIsMovePhotoOpen}
      />

      <EditTable
        isMovePhotoOpen={isEditOpen}
        setIsMovePhotoOpen={setIsEditOpen}
      />

      <CenterSheet isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} />
    </div>
  );
}
