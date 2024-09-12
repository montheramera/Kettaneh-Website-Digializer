import React from "react";

const BleifesSectionSkeleton = () => {
  return (
    <>
      <div className="px-5 lg:px-20 font-avenir lg:overflow-hidden">
        {/* First Section */}
        <section className="max-w-[1440px] m-auto">
          <div>
            <div className="mb-[16px] mt-[24px] flex">
              <div className="bg-skeleton min-w-[5px] w-[5px] min-h-[100%] mr-[10px] animate-pulse"></div>
              <div className="bg-skeleton w-40 h-8 animate-pulse"></div>
            </div>
            <div className="bg-skeleton w-64 h-10 mb-[10px] animate-pulse"></div>
            <div className="bg-skeleton w-full h-6 animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 mt-[51px] gap-10 text-[18px] font-[400] leading-[28px] text-paragraph">
            {/* Left Description Skeleton */}
            <div className="flex">
              <div className="bg-skeleton min-w-[5px] w-[5px] min-h-[100%] mr-[10px] animate-pulse"></div>
              <div className="flex flex-col space-y-4 w-full">
                <div className="bg-skeleton w-full h-6 animate-pulse"></div>
                <div className="bg-skeleton w-full h-6 animate-pulse"></div>
                <div className="bg-skeleton w-full h-6 animate-pulse"></div>
              </div>
            </div>
            {/* Right Image Skeleton */}
            <div className="flex">
              <div className="bg-skeleton min-w-[5px] w-[5px] min-h-[300px] lg:min-h-[100%] mr-[10px] animate-pulse"></div>
              <div className="flex-1 bg-skeleton h-80 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="max-w-[1440px] m-auto lg:my-[96px]">
          <div>
            <div className="bg-skeleton w-64 h-10 mb-[10px] animate-pulse"></div>
            <div className="bg-skeleton w-full h-6 animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 mt-[51px] gap-10 text-[18px] font-[400] leading-[28px] text-paragraph">
            {/* Left Image Skeleton */}
            <div className="flex">
              <div className="bg-skeleton min-w-[5px] w-[5px] min-h-[300px] lg:min-h-[100%] mr-[10px] animate-pulse"></div>
              <div className="flex-1 bg-skeleton h-80 animate-pulse"></div>
            </div>
            {/* Right Description Skeleton */}
            <div className="flex">
              <div className="bg-skeleton min-w-[5px] w-[5px] min-h-[100%] mr-[10px] animate-pulse"></div>
              <div className="flex flex-col space-y-4 w-full">
                <div className="bg-skeleton w-full h-6 animate-pulse"></div>
                <div className="bg-skeleton w-full h-6 animate-pulse"></div>
                <div className="bg-skeleton w-full h-6 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Third Section */}
      <section className="bg-white text-white px-5 py-4 mt-[30px] lg:px-20 lg:pt-[96px] font-avenir">
        <div className="max-w-[1440px] m-auto">
          <div className="bg-skeleton w-64 h-10 mb-[10px] animate-pulse"></div>
          <div className="bg-skeleton w-full h-6 animate-pulse"></div>
          <div className="flex flex-col lg:flex-row justify-between gap-10 mt-[64px]">
            {[...Array(2)].map((_, index) => (
              <div className="flex" key={index}>
                <div className="bg-skeleton min-w-[5px] w-[5px] min-h-[100%] mr-[10px] animate-pulse"></div>
                <div className="">
                  <div className="bg-skeleton w-96 h-6 mb-2 animate-pulse"></div>
                  <div className="bg-skeleton w-full h-6 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="bg-white text-white px-5 py-4 lg:px-20 lg:pt-[1px] lg:pb-[96px] font-avenir">
        <div className="max-w-[1440px] m-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 mt-[32px] lg:mt-[64px]">
            {[...Array(2)].map((_, index) => (
              <div className="flex" key={index}>
                <div className="bg-skeleton min-w-[5px] w-[5px] min-h-[100%] mr-[10px] animate-pulse"></div>
                <div className="">
                  <div className="bg-skeleton w-96 h-6 mb-2 animate-pulse"></div>
                  <div className="bg-skeleton w-full h-6 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BleifesSectionSkeleton;