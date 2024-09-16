"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HoverEffect = ({ categories }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const path = usePathname();

  return (
    <div className="hidden lg:flex container1 font-avenir justify-between overflow-hidden">
      {categories.map((category: any, index: number) => (
        <CustomBanner
          key={index}
          path={path}
          category={category}
          isActive={activeIndex === index}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

function CustomBanner({ path, isActive, category, onMouseEnter }: any) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`section overflow-hidden ${isActive ? "max-w-[850px]" : "max-w-[100px]"
        } transition-all duration-2000`}
    >
      <div
        className={`relative ${path === "/en" ? "h-[400px]" : "h-[270px]"
          } w-full font-avenir`}
      >
        <Image
          src={category.category.image.data.attributes.url}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div
          className={`absolute inset-0 bg-opacity-50 bg-[${category.category.background_color}] flex justify-end ${isActive ? "p-10" : "p-1"
            } flex-col transition-all duration-[2000ms] animate-fadeInStep`}
        // style={{backgroundColor: category.category.background_color, opacity: 0.5, top: '0px', left: '0px', bottom: '0px', right: '0px'}}
        >
          {isActive ? (
            <>
              {path === "/en" ? (
                <div className="flex flex-col h-full justify-between">
                  <Link
                    href={category.category.button_path}
                    className="text-[18px] leading-[28px] font-[500] text-start z-50"
                    aria-label={category.category.heading}
                  >
                    <div>
                      <h2 className="text-[30px] leading-[32px] font-[800] text-start">
                        {category.category.heading}
                      </h2>
                      <p className="text-[18px] leading-[28px] font-[500] my-[16px] text-start max-w-[500px]">
                        {category.category.description}
                      </p>
                      <button className="text-[18px] leading-[28px] font-[500] text-start">
                        Learn More
                      </button>
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col">
                  <Link
                    href={category.category.button_path}
                    className="text-[18px] leading-[28px] font-[500] text-start z-50"
                    aria-label={category.category.heading}
                  >
                    <h2 className="text-[24px] leading-[32px] font-[800] text-start">
                      {category.category.heading}
                    </h2>
                    <p className="text-[12px] leading-[16px] font-[500] my-[16px] text-start max-w-[236px]">
                      {category.category.description}
                    </p>
                    <button className="text-[18px] leading-[28px] font-[500] text-start">
                      Learn More
                    </button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div
              className={`${path === "/en"
                  ? "max-w-[400px] max-h-[400px] w-[400px] h-[400px]"
                  : "max-w-[270px] max-h-[270px] w-[270px] h-[270px]"
                } flex items-center`}
            >
              <span className="text-white text-lg font-bold transform -rotate-90">
                {category.title}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HoverEffect;
