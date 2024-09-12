import React from "react";

const GlobalPartnersSkeleton = () => {
  return (
    <div className="px-5 py-[30px] lg:px-20 lg:py-[97px] font-avenir bg-[#F9FAFB]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center max-w-[1440px] m-auto">
        <div className="lg:min-w-[425px]">
          <div className="animate-pulse bg-skeleton w-48 h-8 mb-2"></div>
          <div className="animate-pulse bg-skeleton w-40 h-6"></div>
        </div>

        <div className="flex flex-wrap justify-between lg:justify-center gap-8 mt-[30px] lg:mt-0">
          {/* Skeleton boxes for partner logos */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex justify-center">
              <div className="animate-pulse bg-skeleton w-[100px] h-[50px] lg:w-[120px] lg:h-[70px]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalPartnersSkeleton;