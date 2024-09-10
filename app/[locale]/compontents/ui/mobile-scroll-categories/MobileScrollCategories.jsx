
"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ScrollSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Mobile check
  const totalSlides = 4; // Total number of slides
  const slideRefs = useRef([]); // References to slide elements

  // Mobile detection based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust for mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (e) => {
    if (isScrolling) return;

    const scrollDown = e.deltaY > 0;
    const scrollUp = e.deltaY < 0;
    const currentElement = slideRefs.current[currentSlide];

    if (!currentElement) return;

    const slideTopPosition = currentElement.getBoundingClientRect().top;

    // Scroll Down Logic: Change slide when bottom of the slide is reached
    if (scrollDown && currentSlide < totalSlides - 1) {
      if (slideTopPosition <= -window.innerHeight + 100) {
        setIsScrolling(true);
        setCurrentSlide((prev) => prev + 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    }

    // Scroll Up Logic: Change slide when top of the section is reached
    if (scrollUp && currentSlide > 0) {
      if (slideTopPosition >= 0) {
        setIsScrolling(true);
        setCurrentSlide((prev) => prev - 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    }
  };

  const handleTouchStart = (e) => {
    setIsScrolling(false);
  };

  const handleTouchMove = (e) => {
    if (isScrolling) return;

    const currentElement = slideRefs.current[currentSlide];
    const slideTopPosition = currentElement?.getBoundingClientRect().top;
    const deltaY = e.touches[0].clientY - slideTopPosition;

    // Touch swipe logic: similar to scroll logic
    if (deltaY > 50 && currentSlide < totalSlides - 1) {
      setIsScrolling(true);
      setCurrentSlide((prev) => prev + 1);
      setTimeout(() => setIsScrolling(false), 800);
    }
    if (deltaY < -50 && currentSlide > 0) {
      if (slideTopPosition >= 0) {
        setIsScrolling(true);
        setCurrentSlide((prev) => prev - 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    }
  };

  useEffect(() => {
    if (!isMobile) return;

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSlide, isScrolling, isMobile]);

  return (
    <div className="mobile-scroll-categories">
      <div className="bg-primary relative">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`slide ${
              currentSlide === index
                ? "block sticky top-0 left-0 right-0"
                : currentSlide > index
                ? "block sticky top-0 left-0 right-0"
                : "hidden"
            }`}
            style={{
              height: "100vh",
              transition: "opacity 0.8s ease",
              opacity: currentSlide === index || currentSlide > index ? 1 : 0,
            }}
          >
            <div className="relative h-[100vh] w-full bg-[#75B4C2]">
              <Image
                src="/images/image1.jpg"
                alt="Background"
                className="w-full"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-opacity-50 bg-[#75B4C2] top-0 left-0 right-0 bottom-0 text-white flex justify-center items-center flex-col">
                <h1>Slide {index + 1}</h1>
                <h1>heading</h1>
                <p>paragraph</p>
                <button>button</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


