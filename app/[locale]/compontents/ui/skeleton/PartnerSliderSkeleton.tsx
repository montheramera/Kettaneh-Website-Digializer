"use client";
import React from "react";

const PartnerSliderSkeleton = () => {
  const placeholderPartners = Array(5).fill(0); // Array for the placeholders

  return (
    <>
      <section className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir bg-[#F9FAFB] slider-logos-arrow">
        <div className="max-w-[1440px] m-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center text-[30px] leading-[36px] lg:text-[50px] lg:leading-[48px] font-[800] mb-[55px] lg:mb-[110px]">
            <div className="h-[36px] w-[50%] bg-skeleton rounded-lg"></div>
            <div className="h-[36px] w-[20%] bg-skeleton rounded-lg"></div>
          </div>

          {/* Partner logos placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {placeholderPartners.map((_, index) => (
              <div
                key={index}
                className="px-8 lg:px-0 flex justify-center items-center"
              >
                <div className="h-[100px] w-[163px] bg-skeleton rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerSliderSkeleton;