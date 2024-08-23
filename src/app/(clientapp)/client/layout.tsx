import Header2 from "@/common/Header2";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header2 />
      {children}
    </>
  );
};

export default layout;
