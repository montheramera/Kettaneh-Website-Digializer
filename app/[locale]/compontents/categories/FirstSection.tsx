"use client"
import Image from 'next/image';
import React from 'react';
import { usePathname } from "next/navigation";

export type Logo = {
  name: string;
  src: string;
  width: number; // or number, depending on how you plan to use it
  height: number; // or number, depending on how you plan to use it
};
interface FirstSectionProps {
  categoryname: string; // The name of the category
  categoryParagraph: string; // The paragraph or description of the category
  categoryBg: string; // The background image URL or color for the section
    imagesLogos: Logo[];
  imageUrl:string  // Array of logos with their respective types
}
const FirstSection: React.FC<FirstSectionProps> = ({
  categoryname,
  categoryParagraph,
  categoryBg,
  imagesLogos,
  imageUrl,
}) => {
  
  const path = usePathname();
  console.log("router", path);
  
  return (
    // <>
    //   <div className="p-8 lg:px-20 lg:py-[32px] font-avenir">
    //     <section className="max-w-[1440px] m-auto">
    //       <div>
    //         <div className="mb-10 flex">
    //           <div
    //             style={{ background: categoryBg }}
    //             className="min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"
    //           ></div>
    //           <span
    //             style={{ background: categoryBg }}
    //             className=" text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]"
    //           >
    //             Categories
    //           </span>
    //         </div>
    //         <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">

    //           {categoryname}
    //         </h2>
    //       </div>
    //       <div className="flex flex-col lg:flex-row justify-between mt-[64px]  text-[18px] font-[400] leading-[28px] text-paragraph">
    //         <div>
    //           <div className="flex">
    //             <div
    //               style={{ background: categoryBg }}
    //               className=" min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"
    //             ></div>
    //             <p className="lg:max-w-[536px]">

    //               {categoryParagraph}
    //             </p>
    //           </div>
    //           <div className="flex items-center border border-[#E5E7EB] max-w-[280px] my-[32px] rounded-md p-3 bg-white">
    //             <span
    //               style={{ background: categoryBg }}
    //               className="inline-block h-3 w-3 rounded-full bg-primary mr-2"
    //             ></span>
    //             <p className="text-heading text-[16px] leading-[20px] font-[500]">
    //               Click a logo to explore products
    //             </p>
    //           </div>
    //           <div className="flex  items-center flex-wrap max-w-[800px] gap-10">
    //             {imagesLogos.map((partner, index) => (
    //               <Image
    //                 key={index}
    //                 src={partner.src}
    //                 alt={partner.name}
    //                 width={partner.width}
    //                 height={partner.height}
    //                 priority
    //                 className=""
    //               />
    //             ))}
    //           </div>
    //         </div>
    //         <div className="flex max-h-[330px]">
    //           <div
    //             style={{ background: categoryBg }}
    //             className="min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"
    //           ></div>
    //           <Image
    //             src={imageUrl}
    //             alt={`${categoryname} image`}
    //             width={297}
    //             height={330}
    //           />
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </>

    <>
      <div className=" font-avenir">
        <section
        className="max-w-[1440px] m-auto "
        >
          <div className="max-w-[1440px] m-auto ">
            <div className="flex my-[24px]">
              <div
                style={{ background: categoryBg }}
                className="min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"
              ></div>
              <span
                style={{ background: categoryBg }}
                className=" text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] "
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
            <div className="max-w-[1440px] text-white w-full m-auto z-[100]">
              <h2 className=" text-[36px] font-[800] leading-[40px]  mt-[30px] mb-[32px]">
                {categoryname}
              </h2>
              <div className="flex">
                <div
                  style={{ background: categoryBg }}
                  className=" min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"
                ></div>
                <p className="lg:max-w-[536px]">{categoryParagraph}</p>
              </div>
              <div className="flex items-center border border-[#E5E7EB] max-w-[280px] my-[32px] rounded-md p-3 bg-white">
                <span
                  style={{ background: categoryBg }}
                  className="inline-block h-3 w-3 rounded-full bg-primary mr-2"
                ></span>
                <p className="text-heading text-[16px] leading-[20px] font-[500]">
                  Click a logo to explore products
                </p>
              </div>
            </div>

            {/* <div className="flex max-h-[330px]">
              <div
                style={{ background: categoryBg }}
                className="min-w-[3px] w-[3px] min-h-[100%] mr-[10px]"
              ></div>
              <Image
                src={imageUrl}
                alt={`${categoryname} image`}
                width={297}
                height={330}
              />
            </div> */}
          </div>
          <div
            className={`flex  items-center flex-wrap max-w-[1420px] m-auto gap-10 mt-10 ${
              path === "/en/categories/machinery" ||
              path === "/en/categories/lighting"
                ? "mt-[40px]"
                : ""
            } `}
          >
            {imagesLogos.map((partner, index) => (
              <Image
                key={index}
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                priority
                className=""
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FirstSection;