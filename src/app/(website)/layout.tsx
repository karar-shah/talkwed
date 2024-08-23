import Footer from "@/common/Footer";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default layout;
