import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-[1440px] font-avenir m-auto bg-white  ">
      <div className=""
      >header</div>
      {children}
      <div>footer</div>
    </div>
  );
};

export default PageWrapper;
