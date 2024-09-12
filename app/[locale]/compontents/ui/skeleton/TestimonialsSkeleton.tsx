import React from "react";

const TestimonialsSkeleton = () => {
  return (
    <div className="slider-container bg-primary feedback pt-[30px] pb-[90px] lg:pt-[96px] lg:pb-[146px]">
      <div className="max-w-[1440px] m-auto relative">
        <div className="font-avenir text-white px-10 lg:px-0 min-h-[300px] lg:min-h-0 flex items-center">
          <div className="w-full flex flex-col items-center">
            <div className="animate-pulse bg-skeleton w-full h-[30px] lg:h-[30px] mb-4"></div>
            <div className="animate-pulse bg-skeleton w-full h-[30px] lg:h-[30px] mb-4"></div>
            <div className="animate-pulse bg-skeleton w-full h-[30px] lg:h-[30px] mb-4"></div>
            <div className="animate-pulse bg-skeleton w-48 h-8"></div>
          </div>
        </div>

        {/* Next and Previous Buttons */}
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSkeleton;