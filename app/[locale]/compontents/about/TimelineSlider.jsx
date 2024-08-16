// "use client";
// import React from "react";
// import Slider from "react-slick";

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
//   ];

//   const settings = {
//     infinite: true,
//     autoplay: true,
//     speed: 10000,
//     autoplaySpeed: 10000,
//     cssEase: "linear",
//     slidesToShow: 3,
//     slidesToScroll: 1,
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
//     <section className="p-8 lg:px-20 lg:py-[32px] font-avenir">
//       <div className=" mb-8">
//         <h2 className="text-[36px] font-[800] leading-[40px] text-heading">
//           <span className="text-primary"> Our Journey</span> Through Time
//         </h2>
//         <p className="text-[20px] text-paragraph font-[500] leading-[28px] mt-[20px]">
//           Celebrating Over a Century of Innovation, Growth, and Customer
//           Satisfaction
//         </p>
//       </div>

//       <div className="flex justify-center items-center mt-[64px]">
//         <div className="relative w-full h-1 bg-primary">
//           <div className="absolute left-0 top-[-24px] h-12 border-l-2 border-primary"></div>
//           <div className="absolute left-1/3 h-12 top-[-24px] border-l-2 border-primary"></div>
//           <div className="absolute left-2/3 h-12  top-[-24px] border-l-2 border-primary"></div>
//           <div className=""></div>
//         </div>
//       </div>

//       <Slider {...settings}>
//         {timelineData.map((item, index) => (
//           <div key={index} className="mt-[48px]">
//             <div className="">
//               <p className="text-[60px] text-heading font-[500] leading-[81.96px]">
//                 {item.year}
//               </p>
//               <p className="text-[16px] text-paragraph font-[400] leading-[24px] lg:max-w-[308px]">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default TimelineSlider;


// "use client";
// import React from "react";
// import Slider from "react-slick";

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer`}
//       style={{ ...style, display: "block", background: "#000" }}
//       onClick={onClick}
//     >
//       <svg
//         width="40"
//         height="40"
//         viewBox="0 0 40 40"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M8 4L16 12L8 20"
//           stroke="white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer`}
//       style={{ ...style, display: "block",  }}
//       onClick={onClick}
//     >
//       <svg
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M16 4L8 12L16 20"
//           stroke="white"
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
//   ];

//   const settings = {
//     infinite: true,
//     autoplay: true,
//     speed: 10000,
//     autoplaySpeed: 10000,
//     cssEase: "linear",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
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
//     <section className="p-8 lg:px-20 lg:py-[32px] font-avenir">
//       <div className="mb-8">
//         <h2 className="text-[36px] font-[800] leading-[40px] text-heading">
//           <span className="text-primary"> Our Journey</span> Through Time
//         </h2>
//         <p className="text-[20px] text-paragraph font-[500] leading-[28px] mt-[20px]">
//           Celebrating Over a Century of Innovation, Growth, and Customer
//           Satisfaction
//         </p>
//       </div>

//       <div className="flex justify-center items-center mt-[64px]">
//         <div className="relative w-full h-1 bg-primary">
//           <div className="absolute left-0 top-[-24px] h-12 border-l-2 border-primary"></div>
//           <div className="absolute left-1/3 h-12 top-[-24px] border-l-2 border-primary"></div>
//           <div className="absolute left-2/3 h-12  top-[-24px] border-l-2 border-primary"></div>
//           <div className=""></div>
//         </div>
//       </div>

//       <Slider {...settings}>
//         {timelineData.map((item, index) => (
//           <div key={index} className="mt-[48px]">
//             <div>
//               <p className="text-[60px] text-heading font-[500] leading-[81.96px]">
//                 {item.year}
//               </p>
//               <p className="text-[16px] text-paragraph font-[400] leading-[24px] lg:max-w-[308px]">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default TimelineSlider;



"use client";
import React from "react";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer`}
      // style={{ ...style, display: "block", background: "none" ,border:"2px",borderBlockEndColor:"black" }}
      onClick={onClick}
    >
      {/* <div className=" border border-primary rounded-full p-2 w-[56px] h-[56px]"> */}
        <svg
          
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 18L16 12L10 6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
        {/* <p className="text-primary">--</p>

      </div> */}
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer`}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
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
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const TimelineSlider = () => {
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
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <section className="p-8 lg:px-20 lg:py-[32px] font-avenir about">
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
    </section>
  );
};

export default TimelineSlider;
