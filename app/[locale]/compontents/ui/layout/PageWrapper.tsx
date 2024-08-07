import React from "react";
import Header from "@/app/[locale]/compontents/ui/header/header"

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-[1440px] font-avenir m-auto bg-white  ">
      <Header />
      {children}
      <div>footer</div>
    </div>
  );
};

export default PageWrapper;
