import React from "react";
import Link from "next/link";

// Skeleton Component for News
const NewsSkeleton = () => {
  return (
    <div className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir border-y-[#F9FAFB] border-opacity-25 border-y-[5px]">
      <div className="max-w-[1440px] m-auto">
        {/* Title Skeleton */}
        <div className="bg-skeleton w-72 h-8 mb-4 animate-pulse"></div>
        <div className="bg-skeleton w-1/2 h-6 mb-8 animate-pulse"></div>
        <div className="bg-skeleton w-1/2 h-6 mb-8 animate-pulse"></div>

        {/* Main Event Skeleton */}
        <div className="lg:col-span-2 shadow-lg mt-[30px] lg:my-[64px]">
          <div className="relative w-full h-[337px] bg-skeleton animate-pulse"></div>
          <div className="bg-skeleton w-64 h-6 my-4 mx-2 animate-pulse"></div>
          <div className="bg-skeleton w-40 h-6 mx-2 animate-pulse"></div>
        </div>

        {/* Other Events Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[30px]">
          {[...Array(3)].map((_, index) => (
            <div className="shadow-lg bg-skeleton animate-pulse" key={index}>
              <div className="relative w-full h-[176px] bg-skeleton"></div>
              <div className="bg-skeleton w-48 h-6 my-4 mx-2"></div>
              <div className="bg-skeleton w-32 h-6 mx-2"></div>
            </div>
          ))}
        </div>

        {/* Link Button Skeleton */}
        <div className="mt-[40px]">
          <div className="bg-skeleton w-64 h-10 mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsSkeleton;