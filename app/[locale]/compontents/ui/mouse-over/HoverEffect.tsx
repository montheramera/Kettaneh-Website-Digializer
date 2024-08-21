"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const HoverEffect = () => {
  const [maxWidth, setMaxwidth] = useState(true);
  const [maxWidth1, setMaxwidth1] = useState(false);
  const [maxWidth2, setMaxwidth2] = useState(false);
  const [maxWidth3, setMaxwidth3] = useState(false);
  const [maxWidth4, setMaxwidth4] = useState(false);
  const [maxWidth5, setMaxwidth5] = useState(false);
    const path = usePathname();
 
  return (
    <div className="container1 font-avenir justify-between overflow-hidden">
      <div
        onMouseOver={(e) => {
          setMaxwidth(true);
          setMaxwidth1(false);
          setMaxwidth2(false);
          setMaxwidth3(false);
          setMaxwidth4(false);
          setMaxwidth5(false);
        }}
        className={`section   ${maxWidth ? "max-w-[850px]" : "max-w-[100px]"}`}
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
          setMaxwidth5(true);
          setMaxwidth1(false);
          setMaxwidth2(false);
          setMaxwidth3(false);
          setMaxwidth4(false);
          setMaxwidth(false);
        }}
        className={`section relative  ${
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
        </div>
        <div
          className={`absolute  inset-0 bg-opacity-50 bg-[#75B4C2] flex  justify-end ${
            maxWidth5 ? "p-10" : "p-1"
          } flex-col`}
        >
          <div
            className={`${
              maxWidth5 ? "flex  justify-end  flex-col" : "hidden"
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

          <div className={`${maxWidth5 ? "hidden" : "block"}`}>
            <h2 className="text-[24px] leading-[32px] font-[800] text-start  -rotate-90 py-24">
              Electrical
            </h2>
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
          setMaxwidth5(false);
        }}
        className={`section  section2 ${
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
          <div className="absolute    inset-0 bg-opacity-50 bg-[#5389B9] max-h-[400px] flex items-end justify-center  ">
            <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24  max-h-[400px] ">
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
          setMaxwidth5(false);
        }}
        className={`section  section3 ${
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
          <div className="absolute inset-0 bg-opacity-50 bg-[#E78F6D] max-h-[400px] flex items-end justify-center">
            <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24  max-h-[400px]">
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
          setMaxwidth5(false);
        }}
        className={`section  section4 ${
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
          <div className="absolute inset-0 bg-opacity-50 bg-[#5389B9] max-h-[400px] flex items-end justify-center ">
            <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24  max-h-[400px]">
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
          setMaxwidth5(false);
        }}
        className={`section  section5 ${
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
          <div className="absolute inset-0 bg-opacity-50 bg-[#85C5B0] max-h-[400px] flex items-end justify-center">
            {/* <h2 className="text-[24px] leading-[32px] font-[800] text-start -rotate-90 py-24">
              After Market
            </h2> */}
            <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24  max-h-[400px] whitespace-nowrap ">
              After Market
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverEffect;


// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// const HoverEffect = () => {
//   const [maxWidth, setMaxwidth] = useState(true);
//   const [maxWidth1, setMaxwidth1] = useState(false);
//   const [maxWidth2, setMaxwidth2] = useState(false);
//   const [maxWidth3, setMaxwidth3] = useState(false);
//   const [maxWidth4, setMaxwidth4] = useState(false);
//   const [maxWidth5, setMaxwidth5] = useState(false);

//   const delay = 300; // Delay in milliseconds

//   return (
//     <div className="container1 font-avenir justify-between overflow-hidden">
//       <div
//         onMouseOver={() => {
//           setTimeout(() => {
//             setMaxwidth(true);
//             setMaxwidth1(false);
//             setMaxwidth2(false);
//             setMaxwidth3(false);
//             setMaxwidth4(false);
//             setMaxwidth5(false);
//           }, delay);
//         }}
//         className={`section ${maxWidth ? "max-w-[850px]" : "max-w-[100px]"}`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/image1.jpg"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div
//             className={`absolute inset-0 bg-opacity-50 bg-[#75B4C2] flex justify-end transition-opacity duration-1000 ${
//               maxWidth ? "p-10 opacity-100" : "p-1 opacity-0"
//             } flex-col`}
//           >
//             <div
//               className={`transition-opacity duration-1000 ${
//                 maxWidth ? "flex opacity-100" : "opacity-0"
//               }`}
//             >
//               <h2 className="text-[24px] leading-[32px] font-[800] text-start">
//                 Electrical
//               </h2>
//               <p className="text-[12px] leading-[16px] font-[500] my-[16px] text-start max-w-[236px]">
//                 Our Electrical Business Unit is a solution provider in the power
//                 systems, Automation, Gear Motors, Industrial Couplings, Building
//                 Technologies and Drive Technologies through Siemens, Flender and
//                 Prysmian.
//               </p>
//               <button className="text-[28px] leading-[28px] font-[500] text-start">
//                 Learn More
//               </button>
//             </div>
//             <div className={`${maxWidth ? "hidden" : "block"}`}>
//               <h2 className="text-[24px] leading-[32px] font-[800] text-start -rotate-90 py-24">
//                 Electrical
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={() => {
//           setTimeout(() => {
//             setMaxwidth5(true);
//             setMaxwidth1(false);
//             setMaxwidth2(false);
//             setMaxwidth3(false);
//             setMaxwidth4(false);
//             setMaxwidth(false);
//           }, delay);
//         }}
//         className={`section relative ${
//           maxWidth5 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/image1.jpg"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//         </div>
//         <div
//           className={`absolute inset-0 bg-opacity-50 bg-[#75B4C2] flex justify-end transition-opacity duration-1000 ${
//             maxWidth5 ? "p-10 opacity-100" : "p-1 opacity-0"
//           } flex-col`}
//         >
//           <div
//             className={`transition-opacity duration-1000 ${
//               maxWidth5 ? "flex opacity-100" : "opacity-0"
//             }`}
//           >
//             <h2 className="text-[24px] leading-[32px] font-[800] text-start">
//               Electrical
//             </h2>
//             <p className="text-[12px] leading-[16px] font-[500] my-[16px] text-start max-w-[236px]">
//               Our Electrical Business Unit is a solution provider in the power
//               systems, Automation, Gear Motors, Industrial Couplings, Building
//               Technologies and Drive Technologies through Siemens, Flender and
//               Prysmian.
//             </p>
//             <button className="text-[28px] leading-[28px] font-[500] text-start">
//               Learn More
//             </button>
//           </div>
//           <div className={`${maxWidth5 ? "hidden" : "block"}`}>
//             <h2 className="text-[24px] leading-[32px] font-[800] text-start -rotate-90 py-24">
//               Electrical
//             </h2>
//           </div>
//         </div>
//       </div>
//       {/* Repeat for other sections with the same structure */}
//       <div
//         onMouseOver={(e) => {
//           setMaxwidth(false);
//           setMaxwidth1(true);
//           setMaxwidth2(false);
//           setMaxwidth3(false);
//           setMaxwidth4(false);
//           setMaxwidth5(false);
//         }}
//         className={`section  section2 ${
//           maxWidth1 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/categories/hvac/hvac.png"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div className="absolute    inset-0 bg-opacity-50 bg-[#5389B9] max-h-[400px] flex items-end justify-center  ">
//             <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24  max-h-[400px] ">
//               HVAC
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={(e) => {
//           setMaxwidth(false);
//           setMaxwidth1(false);
//           setMaxwidth2(true);
//           setMaxwidth3(false);
//           setMaxwidth4(false);
//           setMaxwidth5(false);
//         }}
//         className={`section  section3 ${
//           maxWidth2 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/categories/machinery/machinery.png"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div className="absolute inset-0 bg-opacity-50 bg-[#E78F6D] max-h-[400px] flex items-end justify-center">
//             <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24  max-h-[400px]">
//               Machinery
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={(e) => {
//           setMaxwidth(false);
//           setMaxwidth1(false);
//           setMaxwidth2(false);
//           setMaxwidth3(true);
//           setMaxwidth4(false);
//           setMaxwidth5(false);
//         }}
//         className={`section  section4 ${
//           maxWidth3 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/categories/lighting/lighting.png"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div className="absolute inset-0 bg-opacity-50 bg-[#5389B9] max-h-[400px] flex items-end justify-center ">
//             <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24  max-h-[400px]">
//               Lighting
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={(e) => {
//           setMaxwidth(false);
//           setMaxwidth1(false);
//           setMaxwidth2(false);
//           setMaxwidth3(false);
//           setMaxwidth4(true);
//           setMaxwidth5(false);
//         }}
//         className={`section  section5 ${
//           maxWidth4 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/categories/after-marketing/after-marketing.png"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div className="absolute inset-0 bg-opacity-50 bg-[#85C5B0] max-h-[400px] flex items-end justify-center">
//             {/* <h2 className="text-[24px] leading-[32px] font-[800] text-start -rotate-90 py-24">
//               After Market
//             </h2> */}
//             <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24  max-h-[400px] whitespace-nowrap ">
//               After Market
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoverEffect;


// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// const HoverEffect = () => {
//   const [maxWidth, setMaxwidth] = useState(true);
//   const [maxWidth1, setMaxwidth1] = useState(false);
//   const [maxWidth2, setMaxwidth2] = useState(false);
//   const [maxWidth3, setMaxwidth3] = useState(false);
//   const [maxWidth4, setMaxwidth4] = useState(false);
//   const [maxWidth5, setMaxwidth5] = useState(false);

//   return (
//     <div className="container1 font-avenir justify-between overflow-hidden">
//       <div
//         onMouseOver={() => {
//           setMaxwidth(true);
//           setMaxwidth1(false);
//           setMaxwidth2(false);
//           setMaxwidth3(false);
//           setMaxwidth4(false);
//           setMaxwidth5(false);
//         }}
//         className={`section ${maxWidth ? "max-w-[850px]" : "max-w-[100px]"}`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/image1.jpg"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div
//             className={`absolute inset-0 bg-opacity-50 bg-[#75B4C2] flex justify-end ${
//               maxWidth ? "p-10" : "p-1"
//             } flex-col transition-opacity  `}
//           >
//             <div
//               className={`${
//                 maxWidth ? "flex justify-end flex-col" : "hidden duration-1000"
//               } ${maxWidth ? "opacity-100" : "opacity-0"}`}
//             >
//               <h2 className="text-[24px] leading-[32px] font-[800] text-start">
//                 Electrical
//               </h2>
//               <p className="text-[12px] leading-[16px] font-[500] my-[16px] text-start max-w-[236px]">
//                 Our Electrical Business Unit is a solution provider in the power
//                 systems, Automation, Gear Motors, Industrial Couplings, Building
//                 Technologies and Drive Technologies through Siemens, Flender and
//                 Prysmian.
//               </p>
//               <button className="text-[28px] leading-[28px] font-[500] text-start">
//                 Learn More
//               </button>
//             </div>

//             <div className={`${maxWidth ? "hidden" : "block"}`}>
//               <h2 className="text-[24px] leading-[32px] font-[800] text-start -rotate-90 py-24">
//                 Electrical
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={() => {
//           setMaxwidth5(true);
//           setMaxwidth1(false);
//           setMaxwidth2(false);
//           setMaxwidth3(false);
//           setMaxwidth4(false);
//           setMaxwidth(false);
//         }}
//         className={`section relative ${
//           maxWidth5 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/image1.jpg"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//         </div>
//         <div
//           className={`absolute inset-0 bg-opacity-50 bg-[#75B4C2] flex justify-end ${
//             maxWidth5 ? "p-10" : "p-1"
//           } flex-col transition-opacity duration-1000 ${
//             maxWidth5 ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div
//             className={`${maxWidth5 ? "flex justify-end flex-col" : "hidden"}`}
//           >
//             <h2 className="text-[24px] leading-[32px] font-[800] text-start">
//               Electrical
//             </h2>
//             <p className="text-[12px] leading-[16px] font-[500] my-[16px] text-start max-w-[236px]">
//               Our Electrical Business Unit is a solution provider in the power
//               systems, Automation, Gear Motors, Industrial Couplings, Building
//               Technologies and Drive Technologies through Siemens, Flender and
//               Prysmian.
//             </p>
//             <button className="text-[28px] leading-[28px] font-[500] text-start">
//               Learn More
//             </button>
//           </div>

//           <div className={`${maxWidth5 ? "hidden" : "block"}`}>
//             <h2 className="text-[24px] leading-[32px] font-[800] text-start -rotate-90 py-24">
//               Electrical
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={() => {
//           setMaxwidth(false);
//           setMaxwidth1(true);
//           setMaxwidth2(false);
//           setMaxwidth3(false);
//           setMaxwidth4(false);
//           setMaxwidth5(false);
//         }}
//         className={`section section2 ${
//           maxWidth1 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/categories/hvac/hvac.png"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div
//             className={`absolute inset-0 bg-opacity-50 bg-[#5389B9] max-h-[400px] flex items-end justify-center transition-opacity duration-1000 ${
//               maxWidth1 ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24 max-h-[400px]">
//               HVAC
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={() => {
//           setMaxwidth(false);
//           setMaxwidth1(false);
//           setMaxwidth2(true);
//           setMaxwidth3(false);
//           setMaxwidth4(false);
//           setMaxwidth5(false);
//         }}
//         className={`section section3 ${
//           maxWidth2 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/categories/machinery/machinery.png"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div
//             className={`absolute inset-0 bg-opacity-50 bg-[#E78F6D] max-h-[400px] flex items-end justify-center transition-opacity duration-1000 ${
//               maxWidth2 ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24 max-h-[400px]">
//               Machinery
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={() => {
//           setMaxwidth(false);
//           setMaxwidth1(false);
//           setMaxwidth2(false);
//           setMaxwidth3(true);
//           setMaxwidth4(false);
//           setMaxwidth5(false);
//         }}
//         className={`section section4 ${
//           maxWidth3 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/categories/lighting/lighting.png"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div
//             className={`absolute inset-0 bg-opacity-50 bg-[#5389B9] max-h-[400px] flex items-end justify-center transition-opacity duration-1000 ${
//               maxWidth3 ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24 max-h-[400px]">
//               Lighting
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div
//         onMouseOver={() => {
//           setMaxwidth(false);
//           setMaxwidth1(false);
//           setMaxwidth2(false);
//           setMaxwidth3(false);
//           setMaxwidth4(true);
//           setMaxwidth5(false);
//         }}
//         className={`section section5 ${
//           maxWidth4 ? "max-w-[850px]" : "max-w-[100px]"
//         }`}
//       >
//         <div className="relative h-[400px] w-full font-avenir">
//           <Image
//             src="/images/categories/after-marketing/after-marketing.png"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//             priority
//           />
//           <div
//             className={`absolute inset-0 bg-opacity-50 bg-[#E78F6D] max-h-[400px] flex items-end justify-center transition-opacity duration-1000 ${
//               maxWidth4 ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <h2 className="text-[24px] leading-[32px] font-[800] -rotate-90 py-24 max-h-[400px]">
//               After Marketing
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoverEffect;
