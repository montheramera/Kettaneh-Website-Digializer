import React from 'react';

const TimelineSkeleton = () => {
  return (
    <section className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir slider-logos-arrow border-y-[#F9FAFB] border-opacity-25 border-y-[1px]">
      <div className="max-w-[1440px] m-auto">
        {/* Title and Subtitle */}
        <div className="mb-8">
          <div className="h-[40px] w-[50%] bg-skeleton rounded-lg"></div>
          <div className="h-[28px] w-[70%] bg-skeleton rounded-lg mt-[10px] lg:mt-[20px]"></div>
        </div>

        {/* Progress bar layout */}
        <div className="flex justify-center items-center mt-[64px] px-8 lg:px-0">
          <div className="relative w-full h-1 bg-skeleton">
            <div className="absolute left-0 top-[-24px] h-12 border-l-2 border-skeleton"></div>
            <div className="absolute left-1/3 h-12 top-[-24px] border-l-0 lg:border-l-2 border-skeleton"></div>
            <div className="absolute left-2/3 h-12 top-[-24px] border-l-0 lg:border-l-2 border-skeleton"></div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-[48px]">
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="px-8 lg:px-0">
              {/* Year Placeholder */}
              <div className="h-[60px] w-[30%] bg-skeleton rounded-lg"></div>
              {/* Description Placeholder */}
              <div className="h-[24px] w-[80%] bg-skeleton rounded-lg mt-4 lg:max-w-[308px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSkeleton;
