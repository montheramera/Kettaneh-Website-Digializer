import React from "react";

const LegacySectionSkeleton = () => {
  return (
    <div className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir border-y-[#F9FAFB] border-opacity-25 border-y-[1px]">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-[1440px] m-auto justify-between">
        <div className="md:w-1/2 flex flex-col justify-between lg:h-[342px]">
          <div className="flex-grow">
            <div className="animate-pulse bg-skeleton w-64 h-8 mb-4"></div>
            <div className="animate-pulse bg-skeleton w-full h-6 mb-4"></div>
            <div className="animate-pulse bg-skeleton w-72 h-6 mb-4"></div>
          </div>
          <div className="animate-pulse bg-skeleton w-[196px] h-10 mt-4"></div>
        </div>

        <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
          <div className="animate-pulse bg-skeleton w-[4px] min-h-[342px] mr-4"></div>
          <div className="animate-pulse bg-skeleton w-[561px] h-[342px]"></div>
        </div>
      </div>
    </div>
  );
};

export default LegacySectionSkeleton;