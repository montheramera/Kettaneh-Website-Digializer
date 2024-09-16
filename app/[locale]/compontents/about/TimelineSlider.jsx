
"use client";
import React, { useState } from "react";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick, currentSlide, slideCount } = props;
  const isDisabled = currentSlide === slideCount - 3; // Adjust according to the number of slides visible

  return (
    <div
      className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${
        isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      onClick={!isDisabled ? onClick : null}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 18L16 12L10 6"
          stroke={isDisabled ? "gray" : "black"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick, currentSlide } = props;
  const isDisabled = currentSlide === 0;

  return (
    <div
      className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 ${
        isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      onClick={!isDisabled ? onClick : null}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 18L8 12L14 6"
          stroke={isDisabled ? "gray" : "black"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const TimelineSlider = ({timelineData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const settings = {
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false, // Disable infinite scrolling
    nextArrow: (
      <SampleNextArrow
        currentSlide={currentSlide}
        slideCount={timelineData.length}
      />
    ),
    prevArrow: <SamplePrevArrow currentSlide={currentSlide} />,
    afterChange: (current) => setCurrentSlide(current), // Update current slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir slider-logos-arrow border-y-[#F9FAFB]  border-opacity-25 border-y-[1px]">
      <div className="max-w-[1440px] m-auto">
        <div className="mb-8">
          <h2 className=" text-[30px] lg:text-[36px] font-[800] leading-[40px] text-heading">
            <span className="text-primary"> Our Journey</span> Through Time
          </h2>
          <p className="text-[20px] lg:text-[30px] text-paragraph font-[500] leading-[28px] mt-[10px] lg:mt-[20px]">
            Celebrating Over a Century of Innovation, Growth, and Customer
            Satisfaction
          </p>
        </div>

        {/* <div className="flex justify-center items-center  mt-[64px] px-8 lg:px-0">
          <div className="relative w-full h-1 bg-primary">
            <div className="absolute left-0 top-[-24px] h-12 border-l-2 border-primary"></div>
            <div className="absolute left-1/3 h-12 top-[-24px] border-l-0 lg:border-l-2  border-primary"></div>
            <div className="absolute left-2/3 h-12  top-[-24px] border-l-0 lg:border-l-2 border-primary"></div>
            <div className=""></div>
          </div>
        </div> */}

        <Slider {...settings}>
          {timelineData.map((item, index) => (
            <div key={index} className=" px-8 lg:px-0">
              <div className="h-1 bg-primary relative mt-[48px]">
                <div className="absolute left-0 top-[-24px] h-12 border-l-2 border-primary"></div>
              </div>
              <div className="mt-[48px]">
                <p className="text-[30px] lg:text-[60px] text-heading font-[500] leading-[81.96px]">
                  {item.year}
                </p>
                <p className="text-[18px] text-paragraph font-[400] leading-[24px] lg:max-w-[308px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TimelineSlider;

// "use client";
// import React, { useState, useEffect, useRef } from "react";

// const TimelineSection = ({ year, description, isActive }) => {
//   return (
//     <div className="relative flex flex-col items-center mb-16">
//       {/* Vertical Line */}
//       <div
//         className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 ${
//           isActive ? "bg-primary" : "bg-gray-300"
//         }`}
//       ></div>
//       {/* Timeline content */}
//       <div className="relative z-10 bg-white p-4 shadow-md">
//         <p className="text-4xl font-bold">{year}</p>
//         <p className="text-md mt-2">{description}</p>
//       </div>
//     </div>
//   );
// };

// const ScrollTimeline = ({ timelineData }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const timelineRefs = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       timelineRefs.current.forEach((ref, index) => {
//         const rect = ref.getBoundingClientRect();
//         if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
//           setActiveIndex(index);
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative">
//       {/* Timeline Vertical line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

//       {timelineData.map((item, index) => (
//         <div
//           key={index}
//           ref={(el) => (timelineRefs.current[index] = el)}
//           className="mb-16"
//         >
//           <TimelineSection
//             year={item.year}
//             description={item.description}
//             isActive={index === activeIndex}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ScrollTimeline;



