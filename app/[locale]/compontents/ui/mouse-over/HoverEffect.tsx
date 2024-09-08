



"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const HoverEffect = () => {
  const [maxWidth, setMaxWidth] = useState(true);
  const [maxWidth1, setMaxWidth1] = useState(false);
  const [maxWidth2, setMaxWidth2] = useState(false);
  const [maxWidth3, setMaxWidth3] = useState(false);
  const [maxWidth4, setMaxWidth4] = useState(false);
  const [maxWidth5, setMaxWidth5] = useState(false);
  const path = usePathname();

  return (
    <div className="hidden lg:flex container1 font-avenir justify-between overflow-hidden">
      <div
        onMouseOver={(e) => {
          e.stopPropagation();
          setMaxWidth(true);
          setMaxWidth1(false);
          setMaxWidth2(false);
          setMaxWidth3(false);
          setMaxWidth4(false);
          setMaxWidth5(false);
        }}
        className={`section  overflow-hidden ${
          maxWidth ? "max-w-[850px]" : "max-w-[100px]"
        }`}
      >
        <div
          className={`relative ${
            path === "/en" ? "h-[400px]" : "h-[270px]"
          } w-full font-avenir`}
        >
          <Image
            src="/images/image1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div
            className={`absolute inset-0 bg-opacity-50 bg-primary flex justify-end 
              ${maxWidth ? "p-10" : "p-1"}
             flex-col transition-all duration-[2000ms] animate-fadeInStep `}
          >
            {maxWidth ? (
              <>
                {path === "/en" ? (
                  <div className="flex flex-col  h-full justify-between">
                    <div>
                      <h2 className="text-[30px] leading-[32px] font-[800] text-start ">
                        100 Years Legacy Engineering Solutions eee
                      </h2>
                      <p className="text-[18px] leading-[28px] font-[500] my-[16px] text-start max-w-[500px]">
                        Since 1922, delivering top-tier industrial solutions
                        ensuring unmatched customer satisfaction
                      </p>
                    </div>
                    <button className="text-[16px] leading-[28px] font-[500] text-start">
                      Learn More
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <h2 className="text-[24px] leading-[32px] font-[800] text-start">
                      100 Years Legacy Engineering Solutions
                    </h2>
                    <p className="text-[12px] leading-[16px] font-[500] my-[16px] text-start max-w-[236px]">
                      Since 1922, delivering top-tier industrial solutions
                      ensuring unmatched customer satisfaction
                    </p>
                    <button className="text-[18px] leading-[28px] font-[500] text-start">
                      Learn More
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className={` ${
                    path === "/en"
                      ? "max-w-[400px] max-h-[400px] w-[400px] h-[400px]"
                      : "max-w-[270px] max-h-[270px] w-[270px] h-[270px]"
                  } flex items-center`}
                >
                  <span className="text-white text-lg font-bold  transform -rotate-90">
                    Electrical
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        onMouseOver={(e) => {
          e.stopPropagation();
          setMaxWidth(false);
          setMaxWidth1(false);
          setMaxWidth2(false);
          setMaxWidth3(false);
          setMaxWidth4(false);
          setMaxWidth5(true);
        }}
        className={`section transition-all duration-2000 ${
          maxWidth5 ? "max-w-[850px]" : "max-w-[100px]"
        }`}
      >
        <div
          className={`relative ${
            path === "/en" ? "h-[400px]" : "h-[270px]"
          } w-full font-avenir`}
        >
          <Image
            src="/images/image1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div
            className={`absolute inset-0 bg-opacity-50 bg-[#75B4C2] flex justify-end ${
              maxWidth5 ? "p-10" : "p-1"
            } flex-col transition-all duration-[2000ms] animate-fadeInStep`}
          >
            {maxWidth5 ? (
              <>
                <div>
                  <h2 className="text-[24px] leading-[32px] font-[800] text-start">
                    Electrical
                  </h2>
                  <p className="text-[12px] leading-[16px] font-[500] my-[16px] text-start max-w-[236px]">
                    We provide engineering, product and support services through
                    partner alliances for the oil and gas market. Our solutions
                    include Wellhead, Flow control, and Surface safety.
                  </p>
                  <button className="text-[28px] leading-[28px] font-[500] text-start">
                    Learn More
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  className={` ${
                    path === "/en"
                      ? "max-w-[400px] max-h-[400px] w-[400px] h-[400px]"
                      : "max-w-[270px] max-h-[270px] w-[270px] h-[270px]"
                  } flex items-center`}
                >
                  <span className="text-white text-lg font-bold  transform -rotate-90">
                    Electrical
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        onMouseOver={() => {
          setMaxWidth(false);
          setMaxWidth1(true);
          setMaxWidth2(false);
          setMaxWidth3(false);
          setMaxWidth4(false);
          setMaxWidth5(false);
        }}
        className={`section transition-all duration-2000 ${
          maxWidth1 ? "max-w-[850px]" : "max-w-[100px]"
        }`}
      >
        <div
          className={`relative ${
            path === "/en" ? "h-[400px]" : "h-[270px]"
          } w-full font-avenir`}
        >
          <Image
            src="/images/categories/hvac/hvac.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div
            className={`absolute inset-0 bg-opacity-50 bg-[#4D79A0D9] max-h-[400px] flex items-end justify-center transition-all duration-2000`}
          >
            <div
              className={` ${
                path === "/en"
                  ? "max-w-[400px] max-h-[400px] w-[400px] h-[400px]"
                  : "max-w-[270px] max-h-[270px] w-[270px] h-[270px]"
              } flex  items-center justify-center  `}
            >
              <span className="text-white text-lg font-bold  transform -rotate-90">
                HVAC
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseOver={() => {
          setMaxWidth(false);
          setMaxWidth1(false);
          setMaxWidth2(true);
          setMaxWidth3(false);
          setMaxWidth4(false);
          setMaxWidth5(false);
        }}
        className={`section transition-all duration-2000 ${
          maxWidth2 ? "max-w-[850px]" : "max-w-[100px]"
        }`}
      >
        <div
          className={`relative ${
            path === "/en" ? "h-[400px]" : "h-[270px]"
          } w-full font-avenir`}
        >
          <Image
            src="/images/categories/machinery/machinery.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div
            className={`absolute inset-0 bg-opacity-50 bg-[#AB6E57D9] max-h-[400px] flex items-end justify-center transition-all duration-2000`}
          >
            <div
              className={` ${
                path === "/en"
                  ? "max-w-[400px] max-h-[400px] w-[400px] h-[400px]"
                  : "max-w-[270px] max-h-[270px] w-[270px] h-[270px]"
              } flex items-center  `}
            >
              <span className="text-white text-lg font-bold  transform -rotate-90">
                Machinery
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseOver={() => {
          setMaxWidth(false);
          setMaxWidth1(false);
          setMaxWidth2(false);
          setMaxWidth3(true);
          setMaxWidth4(false);
          setMaxWidth5(false);
        }}
        className={`section transition-all duration-2000 ${
          maxWidth3 ? "max-w-[850px]" : "max-w-[100px]"
        }`}
      >
        <div
          className={`relative ${
            path === "/en" ? "h-[400px]" : "h-[270px]"
          } w-full font-avenir`}
        >
          <Image
            src="/images/categories/lighting/lighting.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div
            className={`absolute inset-0 bg-opacity-50 bg-[#9E8D5CCC] max-h-[400px] flex items-end justify-center transition-all duration-2000`}
          >
            {/* <h2 className="text-[24px] leading-[32px] font-[800]   -rotate-90 ">
              Lighting
            </h2> */}
            <div
              className={` ${
                path === "/en"
                  ? "max-w-[400px] max-h-[400px] w-[400px] h-[400px]"
                  : "max-w-[270px] max-h-[270px] w-[270px] h-[270px]"
              } bg-blue-600 flex  items-center  `}
            >
              <span className="text-white text-lg font-bold  transform -rotate-90">
                Lighting
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseOver={() => {
          setMaxWidth(false);
          setMaxWidth1(false);
          setMaxWidth2(false);
          setMaxWidth3(false);
          setMaxWidth4(true);
          setMaxWidth5(false);
        }}
        className={`section transition-all duration-2000 ${
          maxWidth4 ? "max-w-[850px]" : "max-w-[100px]"
        }`}
      >
        <div
          className={`relative ${
            path === "/en" ? "h-[400px]" : "h-[270px]"
          } w-full font-avenir`}
        >
          <Image
            src="/images/categories/after-marketing/after-marketing.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div
            className={`absolute inset-0 bg-opacity-50 bg-[#6AA08ED9] max-h-[400px] flex items-end justify-center transition-all duration-2000`}
          >
            <div
              className={` ${
                path === "/en"
                  ? "max-w-[400px] max-h-[400px] w-[400px] h-[400px]"
                  : "max-w-[270px] max-h-[270px] w-[270px] h-[270px]"
              } flex  items-center justify-center `}
            >
              <span className="text-white text-lg font-bold  transform -rotate-90 whitespace-nowrap">
                After Market
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverEffect;