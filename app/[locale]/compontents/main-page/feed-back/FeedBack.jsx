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

function AdaptiveHeight() {
    // function SampleNextArrow(props) {
    //   const { className, style, onClick } = props;
    //   return (
    //     <div
    //       className={className}
    //       style={{ ...style, display: "block", background: "red" }}
    //       onClick={onClick}
    //     />
    //   );
    // }

    // function SamplePrevArrow(props) {
    //   const { className, style, onClick } = props;
    //   return (
    //     <div
    //       className={className}
    //       style={{ ...style, display: "block", background: "green" }}
    //       onClick={onClick}
    //     />
    //   );
    // }

  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 50,
    autoplaySpeed: 5000,
    cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container bg-primary feedback lg:min-h-[496px]">
      <Slider {...settings}>
        {feedsback.map((feedback, index) => (
          <div key={index}>
            <div className="p-8 lg:px-20 lg:py-[96px] font-avenir  text-white">
              <p className="text-[36px] font-[500] leading-[40px] flex justify-center lg:min-h-[160px] text-center lg:px-[60px]">
                &ldquo; {feedback.text} &rdquo;
              </p>
              <div className="flex justify-center items-center">
                <div className="text-yellow-400  mt-[16px] mb-[8px] text-[20px] text-[#FEC84B]">
                  {/* Replace with actual star icons if needed */}★ ★ ★ ★ ★
                </div>
              </div>
              <div className="text-center font-[800] text-[18px] leading-[28px]">
                {feedback.by}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AdaptiveHeight;
