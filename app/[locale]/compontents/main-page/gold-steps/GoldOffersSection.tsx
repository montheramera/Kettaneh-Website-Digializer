import React from "react";

interface GoldOffersSectionProps {
  locale?: "ar" | "en";
}

type PriceOpt = { price: number; tonAr: string; tonEn: string; href: string };
type Offer = { src: string; alt: string; options: PriceOpt[] };

// const offerSvgs = [
//   "/images/gold-offers/Xtremeprotech.svg",
//   "/images/gold-offers/Forest.svg",
//   "/images/gold-offers/Breezless.svg",
//   "/images/gold-offers/Alleasypro.svg",
// ];
const offers: Offer[] = [
  {
    src: "/images/gold-offers/Xtremeprotech_midea.svg",
    alt: "Xtreme ProTech",
    options: [
      {
        price: 380,
        tonAr: "1 طن",
        tonEn: "1 Ton",
        href: "https://arabiemart.com/items/en/midea-xtreme-split-air-conditioner-1-ton-energy-saving-smart-wifi-control-white-10172530",
      },
      {
        price: 490,
        tonAr: "1.5 طن",
        tonEn: "1.5 Ton",
        href: "https://arabiemart.com/items/en/midea-xtreme-split-air-conditioner-1-5-ton-energy-saving-smart-wifi-control-white-10172522",
      },
      {
        price: 600,
        tonAr: "2 طن",
        tonEn: "2 Ton",
        href: "https://arabiemart.com/items/en/midea-xtreme-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10172514",
      },
    ],
  },
  {
    src: "/images/gold-offers/Forest_midea.svg",
    alt: "Forest",
    options: [
      {
        price: 360,
        tonAr: "1 طن",
        tonEn: "1 Ton",
        href: "https://arabiemart.com/o/kettaneh",
      },
      {
        price: 470,
        tonAr: "1.5 طن",
        tonEn: "1.5 Ton",
        href: "https://arabiemart.com/o/kettaneh",
      },
      {
        price: 580,
        tonAr: "2 طن",
        tonEn: "2 Ton",
        href: "https://arabiemart.com/o/kettaneh",
      },
    ],
  },
  {
    src: "/images/gold-offers/Breezless_midea.svg",
    alt: "Breezless",
    options: [
      {
        price: 480,
        tonAr: "1 طن",
        tonEn: "1 Ton",
        href: "https://arabiemart.com/items/en/midea-breezeless-e-split-air-conditioner-1-ton-energy-saving-smart-wifi-control-white-10099900",
      },
      {
        price: 590,
        tonAr: "1.5 طن",
        tonEn: "1.5 Ton",
        href: "https://arabiemart.com/items/en/midea-breezeless-split-air-conditioner-1-5-ton-energy-saving-smart-wifi-control-white-10099879",
      },
      {
        price: 690,
        tonAr: "2 طن",
        tonEn: "2 Ton",
        href: "https://arabiemart.com/items/en/midea-breezeless-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10099889",
      },
    ],
  },
  {
    src: "/images/gold-offers/Alleasypro_midea.svg",
    alt: "All Easy Pro",
    options: [
      {
        price: 410,
        tonAr: "1 طن",
        tonEn: "1 Ton",
        href: "https://arabiemart.com/items/en/midea-all-easy-pro-split-air-conditioner-1-ton-energy-saving-smart-wifi-control-white-10100814",
      },
      {
        price: 520,
        tonAr: "1.5 طن",
        tonEn: "1.5 Ton",
        href: "https://arabiemart.com/items/en/midea-all-easy-pro-split-air-conditioner-1-5-ton-energy-saving-smart-wifi-control-white-10100802",
      },
      {
        price: 650,
        tonAr: "2 طن",
        tonEn: "2 Ton",
        href: "https://arabiemart.com/items/en/midea-all-easy-pro-split-air-conditioner-2-ton-energy-saving-smart-wifi-control-white-10099991",
      },
    ],
  },
];

const BluePrice: React.FC<{ price: number; href: string }> = ({
  price,
  href,
}) => (
  <a
    href={href}
    className="
      inline-flex items-end justify-center
      h-[64px] min-w-[128px] px-4
      bg-[#198FC5] text-white
      rounded-bl-[18px]
      shadow
      hover:opacity-95 active:opacity-90 transition
    "
    aria-label={`${price} JD`}
  >
    <span className="text-[34px] leading-[1] font-extrabold">{price}</span>
    <span className="ml-1 pb-[6px] text-[16px] leading-[1] font-extrabold">
      JD
    </span>
  </a>
);

const GoldOffersSection: React.FC<GoldOffersSectionProps> = ({
  locale = "ar",
}) => {
  const isAr = locale !== "en";

  return (
    <section className="my-4 sm:my-8 md:my-12 lg:my-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center">
        {offers.map((offer) => (
          <figure
            key={offer.src}
            className="w-full max-w-[720px] bg-white rounded text-center p-4"
          >
            {/* AC image */}
            <img
              src={offer.src}
              alt={offer.alt}
              className="w-full h-auto mb-4"
            />

            {/* Row of blue price tags with ton labels inside */}
            <div className="flex flex-wrap justify-center gap-4">
              {offer.options.map((o) => (
                <a
                  key={o.href}
                  href={o.href}
                  className="
                    inline-flex flex-col items-center justify-center
                    h-[80px] min-w-[128px] px-4
                    bg-[#198FC5] text-white
                    rounded-bl-[18px]
                    shadow
                    hover:opacity-95 active:opacity-90 transition 
                  "
                  aria-label={`${o.price} JD ${o.tonAr}`}
                >
                  <div className="flex items-end">
                    <span className="ml-1 pb-[6px] text-[16px] leading-[1] font-extrabold">
                      JD
                    </span>
                    <span className="text-[34px] leading-[1] font-extrabold">
                      {o.price}
                    </span>
                  </div>
                  <span className="text-[16px] font-bold mt-1">{o.tonAr}</span>
                </a>
              ))}
            </div>
          </figure>
        ))}
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center mt-8">
        <div className="font-bold mb-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center text-black">
          للطلب:{" "}
          <span dir="ltr" className="inline-block">
            +962 7 8088 8506
          </span>
        </div>
        <div className="flex gap-3 mt-2 flex-wrap w-full justify-center">
          <a
            href="tel:+962780888506"
            className="flex items-center gap-2 px-3 py-2 rounded font-bold w-full sm:w-[180px] h-[44px] sm:h-[54px] text-[16px] sm:text-[18px] md:text-[22px] bg-[#005DD0] text-white justify-center sm:justify-start"
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
            className="flex items-center gap-2 px-3 py-2 rounded font-bold w-full sm:w-[180px] h-[44px] sm:h-[54px] text-[16px] sm:text-[18px] md:text-[22px] bg-[#48C857] text-white justify-center sm:justify-start"
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
            className="flex items-center gap-2 px-3 py-2 rounded font-bold w-full sm:w-[180px] h-[44px] sm:h-[54px] text-[16px] sm:text-[18px] md:text-[22px] bg-[#264B99] text-white justify-center sm:justify-start"
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
