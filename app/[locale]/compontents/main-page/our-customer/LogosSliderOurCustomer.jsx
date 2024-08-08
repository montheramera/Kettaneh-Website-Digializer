"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function LogosSliderOurCustomer() {
    const logos = [
      { alt: "cusomer logo 1", src: "/images/customer-logos/kett.png" },
      { alt: "cusomer logo 2", src: "/images/customer-logos/_0022_cement.png" },
      {
        alt: "cusomer logo 3",
        src: "/images/customer-logos/_0021_Layer-88.png",
      },
      { alt: "cusomer logo 4", src: "/images/customer-logos/_0020_Potash.png" },
      {
        alt: "cusomer logo 5",
        src: "/images/customer-logos/_0019_ArabBankLogo.png",
      },
      { alt: "cusomer logo 6", src: "/images/customer-logos/_0018_index.png" },
      {
        alt: "cusomer logo 7",
        src: "/images/customer-logos/_0017_hq_logo.png",
      },
      {
        alt: "cusomer logo 8",
        src: "/images/customer-logos/_0016_Layer-86.png",
      },
      {
        alt: "cusomer logo 9",
        src: "/images/customer-logos/_0015_Layer-87.png",
      },
      {
        alt: "cusomer logo 10",
        src: "/images/customer-logos/_0014_sheraton-hotels-logo-11529406977kvwmlh14rx.png",
      },
      { alt: "cusomer logo 11", src: "/images/customer-logos/_0013_حمودة.png" },
      {
        alt: "cusomer logo 12",
        src: "/images/customer-logos/_0012_256256.png",
      },
      {
        alt: "cusomer logo 13",
        src: "/images/customer-logos/_0011_1341345.png",
      },
      {
        alt: "cusomer logo 14",
        src: "/images/customer-logos/_0010_Layer-89.png",
      },
      {
        alt: "cusomer logo 15",
        src: "/images/customer-logos/_0009_367367.png",
      },
      {
        alt: "cusomer logo 16",
        src: "/images/customer-logos/_0008_s5UBoHjS_400x400.png",
      },
      {
        alt: "cusomer logo 17",
        src: "/images/customer-logos/_0007_Layer-90.png",
      },
      { alt: "cusomer logo 18", src: "/images/customer-logos/_0006_14134.png" },
      {
        alt: "cusomer logo 19",
        src: "/images/customer-logos/_0002_Layer-92.png",
      },
      {
        alt: "cusomer logo 20",
        src: "/images/customer-logos/_0001_logo33.png",
      },
      { alt: "cusomer logo 21", src: "/images/customer-logos/_0000_14514.png" },
    ];
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            priority
            width={100}
            height={100}
          />
        ))}
      </Slider>
    </div>
  );
}

export default LogosSliderOurCustomer;
