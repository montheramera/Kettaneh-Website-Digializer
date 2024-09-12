import React from "react";

const MainCustomerSkeleton = () => {
  return (
    <div className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir">
      <div className="max-w-[1440px] m-auto">
        {/* Title Skeleton */}
        <div className="animate-pulse bg-skeleton w-72 h-8 mb-4"></div>
        <div className="animate-pulse bg-skeleton w-1/2 h-6 mb-8"></div>
        <div className="animate-pulse bg-skeleton w-1/2 h-6 mb-8"></div>

        {/* Logos Slider Skeleton */}
        <div className="mt-[64px] flex space-x-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-skeleton w-[120px] h-[50px] lg:w-[120px] lg:h-[80px]"
            ></div>
          ))}
        </div>

        <div className="mt-[64px] flex space-x-4">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-skeleton w-[120px] h-[50px] lg:w-[120px] lg:h-[80px]"
            ></div>
          ))}
        </div>

        {/* Link Button Skeleton */}
        <div className="mt-[30px] lg:mt-[100px] flex justify-start w-full">
          <div className="animate-pulse bg-skeleton w-64 h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default MainCustomerSkeleton;
