"use client";
import React, { useState } from "react";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick, currentSlide, slideCount } = props;
  const isDisabled = currentSlide === slideCount - 3;

  return (
    <button
      className={`${className} !flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-3xl rounded-full p-5 lg:p-6 transition-all duration-300 ${
        isDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:scale-110"
      }`}
      onClick={!isDisabled ? onClick : undefined}
      aria-label="Next timeline item"
      style={{ display: 'flex !important' }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick, currentSlide } = props;
  const isDisabled = currentSlide === 0;

  return (
    <button
      className={`${className} absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary shadow-lg hover:shadow-xl rounded-full p-4 lg:p-5 transition-all duration-300 ${
        isDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:scale-110"
      }`}
      onClick={!isDisabled ? onClick : undefined}
      aria-label="Previous timeline item"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isDisabled ? "text-gray-400" : "text-gray-800 group-hover:text-white"}
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

const TimelineSlider = ({timelineData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: (
      <SampleNextArrow
        currentSlide={currentSlide}
        slideCount={timelineData.length}
      />
    ),
    prevArrow: <SamplePrevArrow currentSlide={currentSlide} />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <section className="px-5 py-[30px] lg:px-20 lg:py-[96px] font-avenir bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] m-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Our Journey
            </span>
          </div>
          <h2 className="text-[32px] lg:text-[48px] font-[800] leading-tight text-heading mb-4">
            <span className="text-primary">Our Journey</span> Through Time
          </h2>
          <p className="text-[18px] lg:text-[20px] text-paragraph font-[400] leading-relaxed max-w-3xl mx-auto">
            Celebrating Over a Century of Innovation, Growth, and Customer Satisfaction
          </p>
        </div>

        {/* Timeline Slider */}
        <div className="relative">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ease-out"
              style={{ width: `${((currentSlide + 1) / timelineData.length) * 100}%` }}
            />
          </div>

          <Slider {...settings} className="modern-timeline-slider">
            {timelineData.map((item, index) => (
              <div key={index} className="px-4">
                <div className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full">
                    {/* Year Badge */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 shadow-lg">
                      <span className="text-white text-2xl font-bold">{item.year}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[16px] text-paragraph font-[400] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="30" cy="30" r="5" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-lg z-10" />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Slide Counter */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <span className="text-sm font-medium text-gray-600">Slide</span>
            <span className="text-primary font-bold text-lg">{currentSlide + 1}</span>
            <span className="text-sm text-gray-400">of</span>
            <span className="text-gray-800 font-semibold">{timelineData.length}</span>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .modern-timeline-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        
        .modern-timeline-slider .slick-slide {
          height: auto;
        }
        
        .modern-timeline-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default TimelineSlider;
