"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary shadow-lg hover:shadow-xl rounded-full p-4 lg:p-5 transition-all duration-300 hover:scale-110`}
      onClick={onClick}
      aria-label="Next customer"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-800 group-hover:text-white"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary shadow-lg hover:shadow-xl rounded-full p-4 lg:p-5 transition-all duration-300 hover:scale-110`}
      onClick={onClick}
      aria-label="Previous customer"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-800 group-hover:text-white"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

function MultipleItems({ clients }) {
  const firstSlider = clients.filter((el) => el.slider === "slider_1");
  const secondSlider = clients.filter((el) => el.slider === "slider_2");

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      <div className="customer-logos slider-logos-arrow mt-10">
        <div className="slider-container main-logos">
          <Slider {...settings} className="modern-customer-slider">
            {firstSlider.map((client, index) => {
              const logoName = client.logo.data.attributes.alternativeText || client.logo.data.attributes.name || 'Partner company';
              const altText = logoName.toLowerCase().includes('logo') 
                ? `${logoName} - Kettaneh trusted partner`
                : `${logoName} logo - Kettaneh trusted partner`;
              
              return (
                <div key={index} className="px-3">
                  <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                    <div className="relative h-24 flex items-center justify-center">
                      <Image
                        src={client.logo.data.attributes.url}
                        alt={altText}
                        priority={index < 5}
                        width={400}
                        height={400}
                        className="object-contain max-h-full w-auto grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="customer-logos slider-logos-arrow mt-10">
        <div className="slider-container main-logos">
          <Slider {...settings} className="modern-customer-slider">
            {secondSlider.map((client, index) => {
              const logoName = client.logo.data.attributes.alternativeText || client.logo.data.attributes.name || 'Partner company';
              const altText = logoName.toLowerCase().includes('logo') 
                ? `${logoName} - Kettaneh trusted partner`
                : `${logoName} logo - Kettaneh trusted partner`;
              
              return (
                <div key={index} className="px-3">
                  <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                    <div className="relative h-24 flex items-center justify-center">
                      <Image
                        src={client.logo.data.attributes.url}
                        alt={altText}
                        priority={index < 5}
                        width={400}
                        height={400}
                        className="object-contain max-h-full w-auto grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .modern-customer-slider .slick-center > div > div {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .modern-customer-slider .slick-slide {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .modern-customer-slider .slick-slide:not(.slick-center) {
          opacity: 0.8;
        }
        
        .modern-customer-slider .slick-slide.slick-center {
          opacity: 1;
        }
      `}</style>
    </>
  );
}

export default MultipleItems;
