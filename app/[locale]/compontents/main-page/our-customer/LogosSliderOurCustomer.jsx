


"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer`}
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
          d="M10 18L16 12L10 6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer`}
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
function LogosSliderOurCustomer() {
  const logos = [
    { alt: "customer logo 1", src: "/images/customer-logos/kett.png" },
    { alt: "customer logo 2", src: "/images/customer-logos/_0022_cement.png" },
    {
      alt: "customer logo 3",
      src: "/images/customer-logos/_0021_Layer-88.png",
    },
    { alt: "customer logo 4", src: "/images/customer-logos/_0020_Potash.png" },
    {
      alt: "customer logo 5",
      src: "/images/customer-logos/_0019_ArabBankLogo.png",
    },
    { alt: "customer logo 6", src: "/images/customer-logos/_0018_index.png" },
    { alt: "customer logo 7", src: "/images/customer-logos/_0017_hq_logo.png" },
    {
      alt: "customer logo 8",
      src: "/images/customer-logos/_0016_Layer-86.png",
    },
    {
      alt: "customer logo 9",
      src: "/images/customer-logos/_0015_Layer-87.png",
    },
    {
      alt: "customer logo 10",
      src: "/images/customer-logos/_0014_sheraton-hotels-logo-11529406977kvwmlh14rx.png",
    },
    { alt: "customer logo 11", src: "/images/customer-logos/_0013_حمودة.png" },
    { alt: "customer logo 12", src: "/images/customer-logos/_0012_256256.png" },
    {
      alt: "customer logo 13",
      src: "/images/customer-logos/_0011_1341345.png",
    },
    {
      alt: "customer logo 14",
      src: "/images/customer-logos/_0010_Layer-89.png",
    },
    { alt: "customer logo 15", src: "/images/customer-logos/_0009_367367.png" },
    {
      alt: "customer logo 16",
      src: "/images/customer-logos/_0008_s5UBoHjS_400x400.png",
    },
    {
      alt: "customer logo 17",
      src: "/images/customer-logos/_0007_Layer-90.png",
    },
    { alt: "customer logo 18", src: "/images/customer-logos/_0006_14134.png" },
    {
      alt: "customer logo 19",
      src: "/images/customer-logos/_0002_Layer-92.png",
    },
    { alt: "customer logo 20", src: "/images/customer-logos/_0001_logo33.png" },
    { alt: "customer logo 21", src: "/images/customer-logos/_0000_14514.png" },
  ];

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "15px",
            height: "15px",
            background: "gray",
            borderRadius: "50%",
          }}
        />
      );
    },
  };

  return (
    <div className=" customer-logos slider-logos-arrow ">
      <div className="slider-container main-logos">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              priority
              width={400}
              height={400}
              className="px-5"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LogosSliderOurCustomer;