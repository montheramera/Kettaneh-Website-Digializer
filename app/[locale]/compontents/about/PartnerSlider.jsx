"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary shadow-lg hover:shadow-xl rounded-full p-4 lg:p-5 transition-all duration-300 hover:scale-110`}
      onClick={onClick}
      aria-label="Next partner"
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
      aria-label="Previous partner"
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

const PartnerSlider = ({partners}) => {

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

    return (
      <>
        <section className="px-5 lg:px-20 font-avenir bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
          <div className="max-w-[1440px] m-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16">
              <div>
                <div className="inline-block mb-4">
                  <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Trusted Worldwide
                  </span>
                </div>
                <h2 className="text-[32px] lg:text-[48px] font-[800] leading-tight text-heading">
                  Our <span className="text-primary">Global Partners</span>
                </h2>
              </div>
              <div className="mt-6 lg:mt-0">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-white px-8 py-6 rounded-2xl shadow-xl">
                  <div className="text-4xl lg:text-5xl font-bold">+30</div>
                  <div className="text-sm lg:text-base opacity-90">Partners Worldwide</div>
                </div>
              </div>
            </div>

            {/* Partner Logos Slider */}
            <div className="relative">
              <div className="customer-logos slider-logos-arrow">
                <div className="slider-container main-logos">
                  <Slider {...settings} className="modern-partner-slider">
                    {partners.map((partner, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center h-full px-4"
                      >
                        <div className="group relative w-full h-32 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-primary/20 overflow-hidden">
                          {/* Logo Container */}
                          <div className="relative w-full h-full flex items-center justify-center p-6">
                            <Image
                              src={partner.src}
                              alt={`${partner.name} - Kettaneh partner`}
                              priority={index < 5}
                              width={200}
                              height={200}
                              className="object-contain max-h-full w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                            />
                          </div>

                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Corner Accent */}
                          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Gradient Overlays for Smooth Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">+30</div>
                <div className="text-sm text-gray-600">Global Partners</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Styles */}
        <style jsx global>{`
          .modern-partner-slider .slick-track {
            display: flex;
            align-items: center;
          }
          
          .modern-partner-slider .slick-slide {
            height: auto;
          }
          
          .modern-partner-slider .slick-slide > div {
            height: 100%;
          }

          /* Smooth infinite scroll */
          .modern-partner-slider .slick-slide {
            transition: transform 0.3s ease;
          }
        `}</style>
      </>
    );
};

export default PartnerSlider;
