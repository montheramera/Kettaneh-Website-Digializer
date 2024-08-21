import React from "react";
import HoverEffect from "../mouse-over/HoverEffect";

const LeadingExcellence = () => {
  return (
    <>
      <div className=" lg:px-20  py-[96px] font-avenir">
        <section className="max-w-[1440px] m-auto">
          <div>
            <div className="mb-10 flex">
              <div className="bg-primary min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"></div>
              <span className="bg-primary text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]">
                Categories
              </span>
            </div>
            <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
              <span className="text-primary "> Leading Excellence</span>
              Across Business Units
            </h2>
            <p className=" text-[20px] font-[500] leading-[28px] text-paragraph">
              F.A. Kettaneh & Co LTD Jordan has a long tradition of being a
              first-class company - one that has always exceeded the increasing
              expectations
            </p>
          </div>
        <div className="mt-[50px]">
          <HoverEffect />
        </div>
        </section>
      </div>
    </>
  );
};

export default LeadingExcellence;
