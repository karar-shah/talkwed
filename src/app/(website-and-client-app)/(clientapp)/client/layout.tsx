import Header2 from "@/common/Header2";
import Providers from "@/providers";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Providers>
        <Header2 />
        {children}
      </Providers>
    </>
  );
};

export default layout;
