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
function MultipleItems({ clients }) {
  const firstSlider = clients.filter((el) => el.slider === "slider_1");
  const secondSlider = clients.filter((el) => el.slider === "slider_2");

  const settings = {
    // className: "slider variable-width",
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    // variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" customer-logos slider-logos-arrow mt-10">
        <div className="slider-container main-logos">
          <Slider {...settings}>
            {firstSlider.map((client, index) => (
              <Image
                key={index}
                src={client.logo.data.attributes.url}
                alt={client.logo.data.attributes.name}
                priority
                width={400}
                height={400}
                className="px-5"
              />
            ))}
          </Slider>
        </div>
      </div>

      <div className=" customer-logos slider-logos-arrow mt-10">
        <div className="slider-container main-logos">
          <Slider {...settings}>
            {secondSlider.map((client, index) => (
              <Image
                key={index}
                src={client.logo.data.attributes.url}
                alt={client.logo.data.attributes.name}
                priority
                width={400}
                height={400}
                className="px-5"
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MultipleItems;
