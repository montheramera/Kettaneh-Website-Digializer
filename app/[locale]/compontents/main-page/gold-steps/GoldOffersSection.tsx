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
    <section className="my-4 sm:my-8 md:my-12 lg:my-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
        {offerSvgs.map((src, idx) => (
          <img key={src} src={src} alt={`عرض ${idx + 1}`} />
        ))}
      </div>
      {/* Contact Section */}
      <div className="flex flex-col items-center mt-8">
        <div
          className="font-bold mb-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center"
          style={{ color: "#000" }}
        >
          للطلب:{" "}
          <span dir="ltr" className="inline-block">
            +962 7 8088 8506
          </span>
        </div>
        <div className="flex gap-3 mt-2 flex-wrap w-full justify-center">
          <a
            href="tel:+962780888506"
            className="flex items-center gap-2 px-3 py-2 rounded font-bold w-full sm:w-[180px] h-[44px] sm:h-[54px] text-[16px] sm:text-[18px] md:text-[22px] bg-[#005DD0] text-white transition-all justify-center sm:justify-start text-center sm:text-start"
          >
            <img
              src="/images/gold-offers/phone.svg"
              alt="اتصل بنا"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
            <span className="truncate">اتصل بنا</span>
          </a>
          <a
            href="https://wa.me/962780888506"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded font-bold w-full sm:w-[180px] h-[44px] sm:h-[54px] text-[16px] sm:text-[18px] md:text-[22px] bg-[#48C857] text-white transition-all justify-center sm:justify-start text-center sm:text-start"
          >
            <img
              src="/images/gold-offers/whatsapp.svg"
              alt="واتس اب"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
            <span className="truncate">واتس اب</span>
          </a>
          <a
            href="https://arabiemart.com/o/kettaneh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded font-bold w-full sm:w-[180px] h-[44px] sm:h-[54px] text-[16px] sm:text-[18px] md:text-[22px] bg-[#264B99] text-white transition-all justify-center sm:justify-start text-center sm:text-start"
          >
            <img
              src="/images/gold-offers/arabimart.svg"
              alt="عربي مارت"
              className="h-6 w-[120px] sm:h-7 sm:w-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoldOffersSection;
