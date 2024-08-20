"use client";
import Image from "next/image";
import React, { useState } from "react";

const HoverEffect = () => {
  const [maxWidth, setMaxwidth] = useState(true);
  const [maxWidth1, setMaxwidth1] = useState(false);
  const [maxWidth2, setMaxwidth2] = useState(false);
  const [maxWidth3, setMaxwidth3] = useState(false);
  const [maxWidth4, setMaxwidth4] = useState(false);
  return (
    <div className="container1 font-avenir justify-between overflow-hidden">
      <div
        onMouseOver={(e) => {
          setMaxwidth(true);
          setMaxwidth1(false);
          setMaxwidth2(false);
          setMaxwidth3(false);
          setMaxwidth4(false);
        }}
        className={`section  section1 ${
          maxWidth ? "max-w-[700px]" : "max-w-[100px]"
        }`}
      >
        <div className="relative h-[400px] w-full font-avenir">
          <Image
            src="/images/image1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div
            className={`absolute inset-0 bg-opacity-50 bg-[#75B4C2] flex  justify-end ${
              maxWidth ? "p-10" : "p-1"
            } flex-col`}
          >
            <div
              className={`${
                maxWidth ? "flex  justify-end  flex-col" : "hidden"
              }`}
            >
              <h2 className="text-[24px] leading-[32px] font-[800] text-start">
                Electrical
              </h2>
              <p className="text-[12px] leading-[16px] font-[500] my-[16px] text-start max-w-[236px]">
                Our Electrical Business Unit is a solution provider in the power
                systems, Automation, Gear Motors, Industrial Couplings, Building
                Technologies and Drive Technologies through Siemens, Flender and
                Prysmian.
              </p>
              <button className="text-[28px] leading-[28px] font-[500] text-start">
                Learn More
              </button>
            </div>

            <div className={`${maxWidth ? "hidden" : "block"}`}>
              <h2 className="text-[24px] leading-[32px] font-[800] text-start  -rotate-90 py-24">
                Electrical
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        onMouseOver={(e) => {
          setMaxwidth(false);
          setMaxwidth1(true);
          setMaxwidth2(false);
          setMaxwidth3(false);
          setMaxwidth4(false);
        }}
        className={`section  section2 ${
          maxWidth1 ? "max-w-[700px]" : "max-w-[100px]"
        }`}
      >
        <div className="relative h-[400px] w-full font-avenir">
          <Image
            src="/images/categories/hvac/hvac.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-opacity-50 bg-[#5389B9] max-h-[400px] flex items-end">
            <h2 className="text-[24px] leading-[32px] font-[800] text-start  -rotate-90 py-24">
              HVAC
            </h2>
          </div>
        </div>
      </div>
      <div
        onMouseOver={(e) => {
          setMaxwidth(false);
          setMaxwidth1(false);
          setMaxwidth2(true);
          setMaxwidth3(false);
          setMaxwidth4(false);
        }}
        className={`section  section3 ${
          maxWidth2 ? "max-w-[700px]" : "max-w-[100px]"
        }`}
      >
        <div className="relative h-[400px] w-full font-avenir">
          <Image
            src="/images/categories/machinery/machinery.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-opacity-50 bg-[#E78F6D] flex items-end ">
            <h2 className="text-[24px] leading-[32px] font-[800] text-start  -rotate-90 py-24">
              Machinery
            </h2>
          </div>
        </div>
      </div>
      <div
        onMouseOver={(e) => {
          setMaxwidth(false);
          setMaxwidth1(false);
          setMaxwidth2(false);
          setMaxwidth3(true);
          setMaxwidth4(false);
        }}
        className={`section  section4 ${
          maxWidth3 ? "max-w-[700px]" : "max-w-[100px]"
        }`}
      >
        <div className="relative h-[400px] w-full font-avenir">
          <Image
            src="/images/categories/lighting/lighting.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-opacity-50 bg-[#5389B9] flex items-end ">
            <h2 className="text-[24px] leading-[32px] font-[800] text-start  -rotate-90 py-24">
              Lighting
            </h2>
          </div>
        </div>
      </div>
      <div
        onMouseOver={(e) => {
          setMaxwidth(false);
          setMaxwidth1(false);
          setMaxwidth2(false);
          setMaxwidth3(false);
          setMaxwidth4(true);
        }}
        className={`section  section5 ${
          maxWidth4 ? "max-w-[700px]" : "max-w-[100px]"
        }`}
      >
        <div className="relative h-[400px] w-full font-avenir">
          <Image
            src="/images/categories/after-marketing/after-marketing.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-opacity-50 bg-[#85C5B0] flex items-end justify-start">
            {/* <h2 className="text-[24px] leading-[32px] font-[800] text-start -rotate-90 py-24">
              After Market
            </h2> */}
            <h2 className="text-[24px] leading-[32px] font-[800] text-center -rotate-90 py-24  whitespace-nowrap">
              After Market
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverEffect;
