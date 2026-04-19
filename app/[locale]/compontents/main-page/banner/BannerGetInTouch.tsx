"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "@/compontents/ui/contact-form/ContactForm";
import ConfirmationMessage from "@/compontents/ui/confirmation-message/ConfirmationMessage";
import ModelFormContact from "@/compontents/ui/model/Model";

const banners = [
  { src: "/images/eco/wbanner.jpg", alt: "Kettaneh eco banner" },
  { src: "/images/eco/usef.jpg", alt: "Kettaneh eco initiative" },
] as const;

export default function BannerGetInTouch() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    arrows: false,
    afterChange: (index: number) => setCurrentSlide(index),
    customPaging: (i: number) => (
      <button
        type="button"
        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 md:h-3 md:w-3 ${
          i === currentSlide
            ? "scale-125 bg-primary"
            : "bg-gray-400 hover:bg-gray-600"
        }`}
        aria-label={`Go to banner ${i + 1}`}
      />
    ),
    appendDots: (dots: ReactNode) => (
      <div className="mt-4">
        <ul className="flex items-center justify-center gap-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <>
      <Slider {...settings} className="eco-banner-carousel">
        {banners.map((banner, index) => (
          <div key={banner.src}>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
              aria-label="Open contact form"
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                width={1440}
                height={400}
                priority={index === 0}
                className="h-auto w-full object-cover shadow-xl"
              />
            </button>
          </div>
        ))}
      </Slider>

      {isOpen && (
        <ModelFormContact setIsOpen={setIsOpen} isOpen={isOpen}>
          <ContactForm
            setIsOpen={setIsOpen}
            setIsOpenConfirmation={setIsOpenConfirmation}
          />
        </ModelFormContact>
      )}

      {isOpenConfirmation && (
        <ModelFormContact setIsOpen={setIsOpen} isOpen={isOpen}>
          <ConfirmationMessage
            setIsOpenConfirmation={setIsOpenConfirmation}
          />
        </ModelFormContact>
      )}

      <style jsx global>{`
        .eco-banner-carousel .slick-dots {
          position: relative;
          bottom: 0;
          margin: 0;
        }
        .eco-banner-carousel .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }
        .eco-banner-carousel .slick-dots li button:before {
          display: none;
        }
        .eco-banner-carousel .slick-list {
          border-radius: inherit;
        }
      `}</style>
    </>
  );
}
