import React from "react";

const MainAchievementsSkeleton = () => {
  return (
    <div className="px-5 py-[30px] bg-primary lg:px-20 lg:py-[96px] font-avenir text-white">
      <div className="max-w-[1440px] m-auto">
        {/* Heading Skeleton */}
        <div className="animate-pulse bg-skeleton w-72 h-8 mb-4"></div>
        <div className="animate-pulse bg-skeleton w-96 h-6 mb-8"></div>

        {/* Achievements Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[30px] lg:mt-[64px]">
          {[...Array(4)].map((_, index) => (
            <div
              className="flex flex-col items-center lg:items-start"
              key={index}
            >
              <div className="animate-pulse bg-skeleton w-16 h-16 mb-[20px]"></div>
              <div className="animate-pulse bg-skeleton w-32 h-8 mb-[20px]"></div>
              <div className="animate-pulse bg-skeleton w-48 h-6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainAchievementsSkeleton;