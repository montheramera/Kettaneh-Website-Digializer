
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
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

const TimelineSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const timelineData = [
    {
      year: "1922",
      description:
        "Ever since the company's establishment in 1922, the Kettaneh Group has sought to provide true satisfaction to its customers and potential clients.",
    },
    {
      year: "1952",
      description:
        "Expansion came when they became sole distributors of a number of US brands in the region.",
    },
    {
      year: "1953",
      description:
        "Ever since the company's establishment in 1922, the Kettaneh Group has sought to provide true satisfaction to its customers and potential clients.",
    },
    {
      year: "1954",
      description:
        "Ever since the company's establishment in 1922, the Kettaneh Group has sought to provide true satisfaction to its customers and potential clients.",
    },
    {
      year: "1955",
      description:
        "Ever since the company's establishment in 1922, the Kettaneh Group has sought to provide true satisfaction to its customers and potential clients.",
    },
  ];

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
    <section className="lg:px-20 lg:py-[96px] font-avenir slider-logos-arrow">
      <div className="max-w-[1440px] m-auto">
        <div className="mb-8">
          <h2 className="text-[36px] font-[800] leading-[40px] text-heading">
            <span className="text-primary"> Our Journey</span> Through Time
          </h2>
          <p className="text-[20px] text-paragraph font-[500] leading-[28px] mt-[20px]">
            Celebrating Over a Century of Innovation, Growth, and Customer
            Satisfaction
          </p>
        </div>

        <div className="flex justify-center items-center mt-[64px]">
          <div className="relative w-full h-1 bg-primary">
            <div className="absolute left-0 top-[-24px] h-12 border-l-2 border-primary"></div>
            <div className="absolute left-1/3 h-12 top-[-24px] border-l-2 border-primary"></div>
            <div className="absolute left-2/3 h-12  top-[-24px] border-l-2 border-primary"></div>
            <div className=""></div>
          </div>
        </div>

        <Slider {...settings}>
          {timelineData.map((item, index) => (
            <div key={index} className="mt-[48px]">
              <div>
                <p className="text-[60px] text-heading font-[500] leading-[81.96px]">
                  {item.year}
                </p>
                <p className="text-[16px] text-paragraph font-[400] leading-[24px] lg:max-w-[308px]">
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
// import React, { useState } from "react";
// import Slider from "react-slick";

// const SampleNextArrow = ({ className, onClick, disabled }) => {
//   return (
//     <div
//       className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${
//         disabled ? "opacity-50 cursor-not-allowed" : ""
//       }`}
//       onClick={disabled ? null : onClick}
//     >
//       <svg
//         width="56"
//         height="56"
//         viewBox="0 0 56 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M10 18L16 12L10 6"
//           stroke="black"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   );
// };

// const SamplePrevArrow = ({ className, onClick, disabled }) => {
//   return (
//     <div
//       className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${
//         disabled ? "opacity-50 cursor-not-allowed" : ""
//       }`}
//       onClick={disabled ? null : onClick}
//     >
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M14 18L8 12L14 6"
//           stroke="black"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   );
// };

// const TimelineSlider = () => {
//   const timelineData = [
//     {
//       year: "1922",
//       description:
//         "Ever since the company's establishment in 1922, the Kettaneh Group has sought to provide true satisfaction to its customers and potential clients.",
//     },
//     {
//       year: "1952",
//       description:
//         "Expansion came when they became sole distributors of a number of US brands in the region.",
//     },
//     {
//       year: "1953",
//       description:
//         "Ever since the company's establishment in 1922, the Kettaneh Group has sought to provide true satisfaction to its customers and potential clients.",
//     },
//     {
//       year: "1954",
//       description:
//         "Ever since the company's establishment in 1922, the Kettaneh Group has sought to provide true satisfaction to its customers and potential clients.",
//     },
//     {
//       year: "1955",
//       description:
//         "Ever since the company's establishment in 1922, the Kettaneh Group has sought to provide true satisfaction to its customers and potential clients.",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     cssEase: "linear",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: false,
//     nextArrow: (
//       <SampleNextArrow disabled={currentSlide >= timelineData.length - 3} />
//     ),
//     prevArrow: <SamplePrevArrow disabled={currentSlide === 0} />,
//     beforeChange: (oldIndex, newIndex) => {
//       setCurrentSlide(newIndex);
//     },
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="lg:px-20 lg:py-[96px] font-avenir slider-logos-arrow">
//       <div className="max-w-[1440px] m-auto">
//         <div className="mb-8">
//           <h2 className="text-[36px] font-[800] leading-[40px] text-heading">
//             <span className="text-primary"> Our Journey</span> Through Time
//           </h2>
//           <p className="text-[20px] text-paragraph font-[500] leading-[28px] mt-[20px]">
//             Celebrating Over a Century of Innovation, Growth, and Customer
//             Satisfaction
//           </p>
//         </div>

//         <Slider {...settings}>
//           {timelineData.map((item, index) => (
//             <div key={index} className="mt-[48px] relative">
//               {/* Line above the slide */}
//               <div
//                 className={`absolute top-[-24px] left-1/2 transform -translate-x-1/2 h-12 border-l-2 border-primary transition-opacity duration-500 ${
//                   index === currentSlide ? "opacity-100" : "opacity-30"
//                 }`}
//               ></div>
//               <div>
//                 <p className="text-[60px] text-heading font-[500] leading-[81.96px]">
//                   {item.year}
//                 </p>
//                 <p className="text-[16px] text-paragraph font-[400] leading-[24px] lg:max-w-[308px]">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default TimelineSlider;
