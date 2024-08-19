import React from "react";
import Header from "@/compontents/ui/header/header"
import Footer from "../footer/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="font-avenir m-auto bg-white  ">
      <Header />
      {children}
      <div><Footer /></div>
    </div>
  );
};

export default PageWrapper;
