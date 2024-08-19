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
    <>
      <div className="p-8 lg:px-20 lg:py-[32px] font-avenir">
        {/* Who we are section */}
        <section className="">
          <div>
            <div className="mb-10 flex">
              <div
                style={{ background: categoryBg }}
                className=" w-[2px] min-h-[100%] mr-[4px]"
              ></div>
              <span
                style={{ background: categoryBg }}
                className=" text-white py-2 px-4 inline-block text-[21.86px] font-[400] leading-[22px]"
              >
                Categories
              </span>
            </div>
            <h2 className=" text-[36px] font-[800] leading-[40px] text-heading mb-[10px]">
              {/* Electrical */}
              {categoryname}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row  gap-20 w-full mt-[64px] text-[18px] font-[400] leading-[28px] text-paragraph">
            <div>
              <div className="flex">
                <div
                  style={{ background: categoryBg }}
                  className=" w-[2px] min-h-[100%] mr-[10px]"
                ></div>
                <p className="lg:max-w-[]">{categoryParagraph}</p>
              </div>
              <div className="mt-[64px]  flex">
                <div
                  style={{ background: categoryBg }}
                  className=" min-w-[2px] w-[2px] min-h-[100%] "
                >
                  .
                </div>
                <Image
                  src={imageUrl}
                  alt={`${categoryname} image`}
                  width={498}
                  height={590}
                  className="w-full h-auto ml-[10px]"
                />
              </div>
            </div>
            <div className="">
              <AfterMarketingForm />
            </div>
          </div>
        </section>

        {/* What we do section */}
      </div>
    </>
  );
};

export default AfterMarketing;
