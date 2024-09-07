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

const PartnerSlider = () => {
  const partners = [
    {
      name: "Flender",
      src: "/images/about/gold-pattern/1.png",
      width: 142.5,
      height: 36,
    },
    {
      name: "Leviton",
      src: "/images/about/gold-pattern/2.png",
      width: 142.5,
      height: 36,
    },
    {
      name: "Epiroc",
      src: "/images/about/gold-pattern/3.png",
      width: 142.5,
      height: 36,
    },
    {
      name: "Orbik",
      src: "/images/about/gold-pattern/4.png",
      width: 142.5,
      height: 36,
    },
    {
      name: "Secom",
      src: "/images/about/gold-pattern/5.png",
      width: 142.5,
      height: 36,
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

    return (
      <>
        <section className=" px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir   bg-[#F9FAFB] slider-logos-arrow ">
          <div className="max-w-[1440px] m-auto">
            <div className="flex justify-between items-center text-[30px] leading-[36px] lg:text-[50px] lg:leading-[48px] font-[800] mb-[55px] lg:mb-[110px]">
              <h2 className="">
                Our <span className=" text-primary">Global Partners</span>
              </h2>
              <span className=" text-primary  text-[30px] lg:text-[60px]">+30</span>
            </div>
            <div className="">
              <Slider {...settings}>
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="px-8 lg:px-0 flex justify-center items-center"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={163.64}
                      height={26.2}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
};

export default PartnerSlider;
