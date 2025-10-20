"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} !flex items-center justify-center absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30 shadow-2xl hover:shadow-3xl rounded-full p-4 lg:p-6 xl:p-8 transition-all duration-300 hover:scale-110 active:scale-95`}
      onClick={onClick}
      aria-label="Next video"
      style={{ display: 'flex !important', backgroundColor: '#CA3F4F' }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white w-8 h-8 lg:w-12 lg:h-12"
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

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} !flex items-center justify-center absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 shadow-2xl hover:shadow-3xl rounded-full p-4 lg:p-6 xl:p-8 transition-all duration-300 hover:scale-110 active:scale-95`}
      onClick={onClick}
      aria-label="Previous video"
      style={{ display: 'flex !important', backgroundColor: '#CA3F4F' }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white w-8 h-8 lg:w-12 lg:h-12"
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

const VideoCarousel = () => {
  const sliderRef = useRef<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videos = [
    {
      id: 1,
      src: "/images/77.mp4",
      title: "Kettaneh Operations",
      description: "See our state-of-the-art facilities in action"
    },
    {
      id: 2,
      src: "/images/Linde.mp4",
      title: "Linde Partnership",
      description: "Excellence in engineering and innovation"
    },
  ];

  const handleBeforeChange = (current: number, next: number) => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    setCurrentSlide(next);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: handleBeforeChange,
    customPaging: (i: number) => (
      <button 
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide 
            ? 'bg-primary scale-125' 
            : 'bg-gray-400 hover:bg-gray-600'
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-8 lg:mt-12">
        <ul className="flex gap-3 justify-center items-center">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className="px-5 py-[30px] lg:px-20 lg:py-[96px]">
      <div className="max-w-[1440px] m-auto">
        {/* Carousel Container */}
        <div className="relative px-0 lg:px-4">
          <Slider ref={sliderRef} {...settings} className="modern-video-carousel">
            {videos.map((video, index) => (
              <div key={video.id} className="px-2 lg:px-4">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-black">
                    {/* Video */}
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-cover relative z-20"
                      controls
                      controlsList="nodownload"
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Gradient Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-48 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8 z-20 pointer-events-none">
                      <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-white text-xl lg:text-3xl font-[800] mb-1 lg:mb-2 drop-shadow-2xl">
                          {video.title}
                        </h3>
                        <p className="text-white/90 text-sm lg:text-lg font-[500] drop-shadow-lg">
                          {video.description}
                        </p>
                      </div>
                    </div>

                    {/* Video Counter Badge */}
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-[600] z-20 shadow-lg">
                      {index + 1} / {videos.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Dot Navigation */
        .modern-video-carousel .slick-dots {
          position: relative;
          bottom: 0;
          margin: 0;
        }
        
        .modern-video-carousel .slick-dots li {
          margin: 0;
        }
        
        .modern-video-carousel .slick-dots li button:before {
          display: none;
        }

        /* Smooth transitions with fade effect */
        .modern-video-carousel .slick-slide {
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.4;
        }
        
        .modern-video-carousel .slick-slide.slick-active {
          opacity: 1;
        }

        /* Arrow visibility and positioning */
        .modern-video-carousel .slick-arrow {
          display: flex !important;
          opacity: 1 !important;
          visibility: visible !important;
          z-index: 30;
        }

        .modern-video-carousel .slick-arrow:before {
          display: none;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .modern-video-carousel .slick-arrow {
            opacity: 0.9 !important;
          }
        }

        /* Prevent layout shift */
        .modern-video-carousel .slick-list {
          overflow: hidden;
        }

        .modern-video-carousel .slick-track {
          display: flex;
          align-items: center;
        }

        /* Video container improvements */
        .modern-video-carousel video {
          display: block;
          width: 100%;
        }

        /* Smooth hover effects */
        .modern-video-carousel .group:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default VideoCarousel;
