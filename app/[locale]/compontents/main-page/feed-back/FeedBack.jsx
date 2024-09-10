"use client"

import React from "react";
import Slider from "react-slick";

const feedsback = [
  {
    text: "An equal to none after sales and maintenance services  coupled to a high engineering expertise in recommending and implementing integrated solutions to the building services, industrial and utilities market segments.",
    numberStars: 5,
    by: "G. Al-Hani",
  },
  {
    text: "Good rated equipment company with an excellent staff precise and professional",
    numberStars: 5,
    by: " I. Ijnaid",
  },
  {
    text: "F.A Kettaneh the leaders in their field, great products and complete solutions that fulfill all your needs for your dream home, project ,,, great management, great technical support, great Sales team, customer service and after sales service",
    numberStars: 5,
    by: "M. Al-rousan",
  },

  {
    text: "Indeed a first class company! great products, services & very professional staff as well. Way to go kettaneh JO. highly recommended people!",
    numberStars: 5,
    by: "R. Zidan",
  },
];

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
    <div className="slider-container bg-primary feedback pt-[30px] pb-[90px] lg:pt-[96px] lg:pb-[146px]">
      <div className="max-w-[1440px] m-auto">

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="font-avenir  text-white px-10 lg:px-0">
              <p className="text-[20px] leading-[30px] lg:text-[24px] font-[400] lg:leading-[40px] flex justify-center lg:min-h-[160px] text-center lg:px-[60px]">
                &ldquo; {testimonial.text} &rdquo;
              </p>
              <div className="flex justify-center items-center">
                <div className="text-yellow-400  mt-[16px] mb-[8px] text-[20px] text-[#FEC84B]">
                  {/* Replace with actual star icons if needed */}★ ★ ★ ★ ★
                </div>
              </div>
              <div className="text-center font-[800] text-[18px] leading-[28px]">
                {testimonial.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default AdaptiveHeight;
