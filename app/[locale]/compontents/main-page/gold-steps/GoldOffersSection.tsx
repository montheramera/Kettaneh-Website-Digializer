import React from "react";

interface GoldOffersSectionProps {
  locale?: string;
}

const offerSvgs = [
  "/images/gold-offers/Xtremeprotech.svg",
  "/images/gold-offers/Forest.svg",
  "/images/gold-offers/Breezless.svg",
  "/images/gold-offers/Alleasypro.svg",
];

const GoldOffersSection: React.FC<GoldOffersSectionProps> = ({
  locale = "ar",
}) => {
  return (
    <section className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
        {offerSvgs.map((src, idx) => (
          <img key={src} src={src} alt={`عرض ${idx + 1}`} />
        ))}
      </div>
      {/* Contact Section */}
      <div className="flex flex-col items-center mt-8">
        <div
          className="font-bold mb-2 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] text-center"
          style={{ color: "#000" }}
        >
          للطلب:{" "}
          <span dir="ltr" className="inline-block">
            078 0888 506
          </span>
        </div>
        <div className="flex gap-4 mt-2 flex-wrap w-full justify-center">
          <a
            href="tel:0780888506"
            className="flex items-center gap-2 px-4 py-2 rounded font-bold w-full sm:w-[280px] h-[64px] sm:h-[82px] text-[24px] sm:text-[32px] md:text-[44px] bg-[#005DD0] text-white transition-all justify-center sm:justify-start text-center sm:text-start"
          >
            <img
              src="/images/gold-offers/phone.svg"
              alt="اتصل بنا"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="truncate">اتصل بنا</span>
          </a>
          <a
            href="https://wa.me/962780888506"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded font-bold w-full sm:w-[280px] h-[64px] sm:h-[82px] text-[24px] sm:text-[32px] md:text-[44px] bg-[#48C857] text-white transition-all justify-center sm:justify-start text-center sm:text-start"
          >
            <img
              src="/images/gold-offers/whatsapp.svg"
              alt="واتس اب"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="truncate">واتس اب</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded font-bold w-full sm:w-[280px] h-[64px] sm:h-[82px] text-[24px] sm:text-[32px] md:text-[44px] bg-[#264B99] text-white transition-all justify-center sm:justify-start text-center sm:text-start"
          >
            <img src="/images/gold-offers/arabimart.svg" alt="عربي مارت" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoldOffersSection;
