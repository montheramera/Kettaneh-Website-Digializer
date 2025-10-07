"use client"
import Image from 'next/image';
import React from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';


interface FirstSectionProps {
  categoryname: string; // The name of the category
  categoryParagraph: string; // The paragraph or description of the category
  categoryBg: string; // The background image URL or color for the section
  partners: any[];
  imageUrl:string  // Array of logos with their respective types
}
const FirstSection: React.FC<FirstSectionProps> = ({
  categoryname,
  categoryParagraph,
  categoryBg,
  partners,
  imageUrl,
}) => {
  
  const path = usePathname();
  return (
    <>
      <div className=" font-avenir px-5 lg:px-20">
        <section className=" max-w-[1440px] m-auto ">
          <div className="">
            <div className="flex my-[24px]">
              <div
                style={{ background: categoryBg }}
                className="min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"
              ></div>
              <span
                style={{ background: categoryBg }}
                className=" text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] uppercase "
              >
                Categories
              </span>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="flex px-10 relative flex-col lg:flex-row  inset-0 bg-paragraph bg-opacity-50  text-[18px] font-[400] leading-[28px] text-paragraph min-h-[300px]"
          >
            <div className="absolute inset-0 bg-paragraph bg-opacity-70   "></div>
            <div className="max-w-[1440px] text-white w-full m-auto z-[50]">
              <h2 className=" text-[36px] font-[800] leading-[40px]  mt-[30px] mb-[32px]">
                {categoryname === "Electrical" ? "Electrical & Automation Solutions" : categoryname}
              </h2>
              <div className="flex">
                <div
                  style={{ background: categoryBg }}
                  className=" min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"
                ></div>
                <p className="lg:max-w-[536px]">{categoryParagraph}</p>
              </div>
              <div className="flex items-center border border-[#E5E7EB] max-w-[280px] my-[32px] p-3 bg-white">
                <span
                  style={{ background: categoryBg }}
                  className="inline-block h-3 w-3 rounded-full bg-primary mr-2"
                ></span>
                <p className="text-heading text-[16px] leading-[20px] font-[500]">
                  Click a logo to explore products
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex  items-center flex-wrap max-w-[1420px] m-auto gap-5 lg:gap-10 mt-10 mb-[30px] lg:mb-0
              `}
          >
            {partners
              ?.sort((a, b) => a?.weight - b?.weight)
              ?.map((partner, index) => (
                <Link
                  key={index}
                  href={`${path}/${partner?.title?.toLocaleLowerCase()}`}
                  className="cursor-pointer"
                >
                  <Image
                    src={partner.logo.data.attributes.url}
                    alt={partner.logo.data.attributes.alternativeText || partner.logo.data.attributes.name}
                    width={partner.logo.data.attributes.width}
                    height={partner.logo.data.attributes.height}
                    priority
                    className=""
                  />
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FirstSection;