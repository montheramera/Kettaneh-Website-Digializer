"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
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
      // style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
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
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const PartnerSlider = ({partners}) => {

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    // centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

    return (
      <>
        <section className=" px-5  lg:px-20 font-avenir   bg-[#F9FAFB]  ">
          <div className="max-w-[1440px] m-auto">
            <div className="flex justify-between items-center text-[30px] leading-[36px] lg:text-[50px] lg:leading-[48px] font-[800] mb-[55px] lg:mb-[110px]">
              <h2 className="text-heading">
                Our <span className=" text-primary">Global Partners</span>
              </h2>
              <span className=" text-primary  text-[30px] lg:text-[60px]">
                +30
              </span>
            </div>
            <div className=" customer-logos slider-logos-arrow">
              <div className="slider-container main-logos">
                <Slider {...settings}>
                  {partners.map((partner, index) => (
                    // <div
                    //   key={index}
                    //   className="flex justify-center items-center h-[100%] bg-primary"
                    // >
                    //   <Image
                    //     key={index}
                    //     src={partner.src}
                    //     alt={partner.name}
                    //     priority
                    //     width={200}
                    //     height={200}
                    //     className="px-5 lg:px-10  "
                    //   />
                    // </div>
                    <div
                      key={index}
                      className="flex justify-center items-center h-full"
                    >
                      <div
                        className="flex justify-center items-center w-full h-full"
                        style={{ height: "150px" }}
                      >
                        <Image
                          src={partner.src}
                          alt={partner.name}
                          priority
                          width={200}
                          height={200} // Make image take full height of its container
                          className="px-5 lg:px-10 max-h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default PartnerSlider;
