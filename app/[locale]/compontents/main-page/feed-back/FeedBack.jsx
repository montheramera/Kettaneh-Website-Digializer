"use client"

import React from "react";
import Slider from "react-slick";

function AdaptiveHeight({testimonials}) {
 
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {testimonials.length > 0 && (
        <div className="slider-container bg-primary feedback pt-[30px] pb-[90px] lg:px-20 lg:pt-[96px] lg:pb-[146px]">
          <div className="max-w-[1440px] m-auto">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <div className="font-avenir  text-white px-10 lg:px-0 min-h-[300px] lg:min-h-0  flex items-center">
                    <div className="">
                      <p className="text-[20px] leading-[30px] lg:text-[24px] font-[400] lg:leading-[40px] flex justify-center lg:min-h-[160px] text-center lg:px-[60px]">
                        &ldquo; {testimonial.text} &rdquo;
                      </p>
                      {/* <div className="flex justify-center items-center">
                <div className="text-yellow-400  mt-[16px] mb-[8px] text-[20px] text-[#FEC84B]">
                 ★ ★ ★ ★ ★
                </div>
              </div> */}
                      <div className="text-center font-[800] text-[18px] leading-[28px]">
                        {testimonial.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}

export default AdaptiveHeight;
