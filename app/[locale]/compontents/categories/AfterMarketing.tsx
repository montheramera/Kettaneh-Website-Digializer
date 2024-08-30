import Image from "next/image";
import React from "react";
import AfterMarketingForm from "./AfterMarketingForm";
interface FirstSectionProps {
  categoryname: string;
  categoryParagraph: string;
  categoryBg: string;
  imageUrl: string;
}
const AfterMarketing: React.FC<FirstSectionProps> = ({
  categoryname,
  categoryParagraph,
  categoryBg,
  imageUrl,
}) => {
  return (
    <div className="max-w-[1440px] m-auto px-20">
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
    <div className="flex flex-col gap-10 md:flex-row lg:justify-between ">   
      <div className="flex-1 bg-gray-200">
        <section className=" ">
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="flex px-10 relative flex-col lg:flex-row  inset-0 bg-paragraph bg-opacity-50  text-[18px] font-[400] leading-[28px] text-paragraph min-h-[900px]"
          >
            <div className="absolute inset-0 bg-paragraph bg-opacity-70"></div>
            <div className="max-w-[1440px] text-white w-full m-auto z-[100]">
              <h2 className=" text-[36px] font-[800] leading-[40px]  mt-[30px] mb-[32px]">
                {categoryname}
              </h2>
              <div className="flex">
                <div
                  style={{ background: categoryBg }}
                  className=" min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"
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
          </div>
        </section>
      </div>
      <div className="flex-1 bg-gray-200 justify-end ">
        <AfterMarketingForm />
      </div>
    </div>
    </div>
  );
};

export default AfterMarketing;


//  <div classNameName="p-8 lg:px-20 lg:py-[32px] font-avenir">
//    {/* Who we are section */}
//    <section className="max-w-[1440px] m-auto">
//      <div>
//        <div className="mb-10 flex">
//          <div
//            style={{ background: categoryBg }}
//            className=" min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"
//          ></div>
//          <span
//            style={{ background: categoryBg }}
//            className=" text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px] up"
//          >
//            Categories
//          </span>
//        </div>
//        <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
//          {/* Electrical */}
//          {categoryname}
//        </h2>
//      </div>
//      <div className="flex flex-col lg:flex-row  gap-20 w-full mt-[64px] text-[18px] font-[400] leading-[28px] text-paragraph">
//        <div>
//          <div className="flex">
//            <div
//              style={{ background: categoryBg }}
//              className=" min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"
//            ></div>
//            <p className="lg:max-w-[]">{categoryParagraph}</p>
//          </div>
//          <div className="mt-[64px]  flex">
//            <div
//              style={{ background: categoryBg }}
//              className=" min-w-[5px] w-[5px] min-h-[100%] mr-[10px]"
//            >
//              .
//            </div>
//            <Image
//              src={imageUrl}
//              alt={`${categoryname} image`}
//              width={498}
//              height={590}
//              className="w-full h-auto ml-[10px]"
//            />
//          </div>
//        </div>
//        <div className="">
//          <AfterMarketingForm />
//        </div>
//      </div>
//    </section>

//    {/* What we do section */}
//  </div>;