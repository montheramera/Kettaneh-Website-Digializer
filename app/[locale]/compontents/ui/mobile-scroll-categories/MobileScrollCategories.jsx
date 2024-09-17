
"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ScrollSlider({ categories }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Mobile check
  const totalSlides = categories.length; // Total number of slides
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
      setTimeout(() => setIsScrolling(false), 0);
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

    // window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      // window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [ isMobile]);

  return (
    <div className="mobile-scroll-categories">
      <div className="bg-primary relative">
        {categories.map((category, index) => (
          <div
            key={index}
            ref={(el) => (slideRefs.current[index] = el)}
            className={`slide ${currentSlide === index
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
            <div className={`relative h-[100vh] w-full bg-[${category.category.background_color}]`}>
              <Image
                src={category.category.image.data.attributes.url}
                alt="Background"
                className="w-full"
                layout="fill"
                objectFit="cover"
              />
              <div className={`absolute inset-0 bg-opacity-60 bg-[${category.category.background_color}] text-white flex flex-col justify-center items-center p-4 md:p-8 shadow-lg`}>
                <h2 className="text-[24px] leading-[32px] font-bold text-center mb-4 md:text-[30px]">
                  {category.category.heading}
                </h2>
                <p className="text-[14px] leading-[24px] font-medium text-center mb-6 md:text-[18px] md:leading-[28px] max-w-[90%] md:max-w-[500px]">
                  {category.category.description}
                </p>
                <Link
                    href={category.category.button_path}
                    className="px-4 py-2 text-[14px] leading-[20px] font-medium md:text-[16px] md:px-6 md:py-3 hover:bg-opacity-80 transition uppercase"
                    aria-label={category.category.heading}
                  >
                    LEARN MORE
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




// "use client";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";

// export default function ScrollSlider({ categories }) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [isMobile, setIsMobile] = useState(false); // Mobile check
//   const totalSlides = categories.length; // Total number of slides
//   const slideRefs = useRef([]); // References to slide elements

//   // Mobile detection based on window width
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust for mobile
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleScroll = (e) => {
//     if (isScrolling) return;

//     const scrollDown = e.deltaY > 0;
//     const scrollUp = e.deltaY < 0;
//     const currentElement = slideRefs.current[currentSlide];

//     if (!currentElement) return;

//     const slideTopPosition = currentElement.getBoundingClientRect().top;

//     // Scroll Down Logic: Change slide when bottom of the slide is reached
//     if (scrollDown && currentSlide < totalSlides - 1) {
//       if (slideTopPosition <= -window.innerHeight + 100) {
//         setIsScrolling(true);
//         setCurrentSlide((prev) => prev + 1);
//         setTimeout(() => setIsScrolling(false), 800);
//       }
//     }

//     // Scroll Up Logic: Change slide when top of the section is reached
//     if (scrollUp && currentSlide > 0) {
//       if (slideTopPosition >= 0) {
//         setIsScrolling(true);
//         setCurrentSlide((prev) => prev - 1);
//         setTimeout(() => setIsScrolling(false), 800);
//       }
//     }
//   };

//   const handleTouchStart = (e) => {
//     setIsScrolling(false);
//   };

//   const handleTouchMove = (e) => {
//     if (isScrolling) return;

//     const currentElement = slideRefs.current[currentSlide];
//     const slideTopPosition = currentElement?.getBoundingClientRect().top;
//     const deltaY = e.touches[0].clientY - slideTopPosition;

//     // Touch swipe logic: similar to scroll logic
//     if (deltaY > 50 && currentSlide < totalSlides - 1) {
//       setIsScrolling(true);
//       setCurrentSlide((prev) => prev + 1);
//       setTimeout(() => setIsScrolling(false), 800);
//     }
//     if (deltaY < -50 && currentSlide > 0) {
//       if (slideTopPosition >= 0) {
//         setIsScrolling(true);
//         setCurrentSlide((prev) => prev - 1);
//         setTimeout(() => setIsScrolling(false), 800);
//       }
//     }
//   };

//   useEffect(() => {
//     if (!isMobile) return;

//     // window.addEventListener("wheel", handleScroll, { passive: false });
//     window.addEventListener("touchmove", handleTouchMove, { passive: true });

//     return () => {
//       // window.removeEventListener("wheel", handleScroll);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [currentSlide, isScrolling, isMobile]);

//   return (
//     <div className="mobile-scroll-categories">
//       <div className="bg-primary relative">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             ref={(el) => (slideRefs.current[index] = el)}
//             className={`slide ${currentSlide === index
//                 ? "block sticky top-0 left-0 right-0"
//                 : currentSlide > index
//                   ? "block sticky top-0 left-0 right-0"
//                   : "hidden"
//               }`}
//             style={{
//               height: "100vh",
//               transition: "opacity 0.8s ease",
//               opacity: currentSlide === index || currentSlide > index ? 1 : 0,
//             }}
//           >
//             <div className={`relative h-[100vh] w-full bg-[${category.category.background_color}]`}>
//               <Image
//                 src={category.category.image.data.attributes.url}
//                 alt="Background"
//                 className="w-full"
//                 layout="fill"
//                 objectFit="cover"
//               />
//               <div className={`absolute inset-0 bg-opacity-60 bg-[${category.category.background_color}] text-white flex flex-col justify-center items-center p-4 md:p-8 shadow-lg`}>
//                 <h2 className="text-[24px] leading-[32px] font-bold text-center mb-4 md:text-[30px]">
//                   {category.category.heading}
//                 </h2>
//                 <p className="text-[14px] leading-[24px] font-medium text-center mb-6 md:text-[18px] md:leading-[28px] max-w-[90%] md:max-w-[500px]">
//                   {category.category.description}
//                 </p>
//                 <Link
//                     href={category.category.button_path}
//                     className="px-4 py-2 text-[14px] leading-[20px] font-medium md:text-[16px] md:px-6 md:py-3 hover:bg-opacity-80 transition uppercase"
//                     aria-label={category.category.heading}
//                   >
//                     LEARN MORE
//                   </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
