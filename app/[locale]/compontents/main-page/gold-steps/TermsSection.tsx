"use client";

import Image from "next/image";

interface TermsSectionProps {
  locale?: string;
}

interface TermsItemProps {
  text: string;
  delay: string;
  isMobile?: boolean;
}

interface TermsSubSectionProps {
  title: string;
  items: string[];
  startDelay: number;
  titleHighlight?: boolean;
  isMobile?: boolean;
}

interface FloatingElementsProps {
  isMobile?: boolean;
}

interface GoldCoinProps {
  isMobile?: boolean;
}

// Responsive Terms Item Component
const TermsItem: React.FC<TermsItemProps> = ({
  text,
  delay,
  isMobile = false,
}) => (
  <li
    className="flex items-start animate-fade-in-up"
    style={{ animationDelay: isMobile ? `${parseFloat(delay) * 0.5}s` : delay }}
  >
    <span className="text-yellow-300 ml-1 mr-2 md:ml-2 md:mr-3 animate-pulse-dot text-sm md:text-base">
      •
    </span>
    <span className="text-sm sm:text-base md:text-base leading-relaxed md:leading-relaxed">
      {text}
    </span>
  </li>
);

// Responsive Terms Sub-Section Component
const TermsSubSection: React.FC<TermsSubSectionProps> = ({
  title,
  items,
  startDelay,
  titleHighlight = false,
  isMobile = false,
}) => (
  <div
    className="animate-slide-in-right"
    style={{
      animationDelay: isMobile
        ? `${startDelay * 0.1}s`
        : `${startDelay * 0.2}s`,
    }}
  >
    {/* Responsive Title */}
    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
      <span
        className={`bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent bg-[length:200%] animate-pulse ${
          titleHighlight ? "text-yellow-300" : ""
        }`}
      >
        {title}
      </span>
    </h3>

    {/* Responsive Content */}
    {items.length === 1 ? (
      <p className="text-sm sm:text-base md:text-base leading-relaxed md:leading-relaxed">
        {items[0]}
      </p>
    ) : (
      <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-base leading-relaxed md:leading-relaxed">
        {items.map((item, index) => (
          <TermsItem
            key={index}
            text={item}
            delay={`${(startDelay + index + 1) * (isMobile ? 0.1 : 0.2)}s`}
            isMobile={isMobile}
          />
        ))}
      </ul>
    )}
  </div>
);

// Responsive Floating Background Elements Component
const FloatingElements: React.FC<FloatingElementsProps> = ({
  isMobile = false,
}) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Smaller elements on mobile for better performance */}
    <div
      className={`absolute bg-white/5 rounded-full animate-floating-gentle ${
        isMobile
          ? "w-32 h-32 -top-16 -right-8"
          : "w-48 h-48 md:w-64 md:h-64 -top-24 md:-top-32 -right-12 md:-right-16"
      }`}
    ></div>
    <div
      className={`absolute bg-white/5 rounded-full animate-floating-gentle ${
        isMobile
          ? "w-40 h-40 -bottom-20 -left-10"
          : "w-60 h-60 md:w-80 md:h-80 -bottom-30 md:-bottom-40 -left-15 md:-left-20"
      }`}
      style={{ animationDelay: "2s" }}
    ></div>
  </div>
);

// Responsive Gold Coin Component
const GoldCoin: React.FC<GoldCoinProps> = ({ isMobile = false }) => (
  <div
    className={`absolute animate-float-and-glow z-20 ${
      isMobile
        ? "top-[-2rem] left-[50%] translate-x-[-50%]"
        : "top-[-3rem] sm:top-[-4rem] md:top-[-4.5rem] left-[15%] md:left-[20%] lg:left-[15%] translate-x-1/2"
    } translate-y-1/2`}
  >
    <div
      className={`relative group ${
        isMobile
          ? "w-24 h-24 sm:w-32 sm:h-32"
          : "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
      }`}
    >
      <Image
        src="/images/gold/mideaCoin.png"
        alt="Midea Gold Coin"
        fill
        className="object-contain transition-transform duration-300 hover:scale-110"
        sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
      />
      <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse-glow"></div>
    </div>
  </div>
);

// Custom hook for responsive detection
const useResponsive = () => {
  return {
    isMobile: false, // This would be better with actual hook implementation
  };
};

const TermsSection: React.FC<TermsSectionProps> = ({ locale = "ar" }) => {
  const isRTL = locale === "ar";
  const { isMobile } = useResponsive();

  const content = {
    ar: {
      campaignDuration: "مدة الحملة:",
      campaignDates: "تبدأ الحملة من 11/6/2025 الى 31/12/2025",

      participationMechanism: "آلية الاشتراك:",
      participationText1:
        "ُيعتبـر كل شـخص يشـتري مكّيـف Midea موديـل 2024 و / أو 2025 ( Forest/Xtreme/All Easy Pro/Breezeless) مـن أحـد الموزعيـن المعتمديـن مشتر ًكا مؤه ًلا للدخول في السحب.",
      participationText2:
        "يجـب علـى المشـارك مسـح رمـز QR الموجـود على هـذه البطاقة بعد تركيـب الجهاز وملء النموذج الإلكتروني عبر الرابط المخصص.",
      participationText3:
        "يجــب تعبئــة جميــع الحقــول المطلوبــة وإرفــاق صــورة للباركــود أو الرقــم التسلســلي، ونسخة من فاتورة الشراء و صورة الجهاز مركبا على الجدار.",

      eligibility: "المؤهلات:",
      eligibilityText1:
        "المشاركة متاحة للمقيمين داخل المملكة الأردنية الهاشمية فقط.",
      eligibilityText2:
        "يحــق لــكل جهــاز المشــاركة مــرة واحــدة فقــط. أي محاولــة تكــرار أو إدخــال باركــود مكــرر سُتستبعد تلقائًيا.",

      prizes: "الجوائز:",
      prizesText1: "يتم اختيار 7 فائزين كل شهر لربح قطعة ذهب.",
      prizesText2:
        "في نهاية الحملة، سيتم إجراء سحب كبير لفائز واحد على الجائزة الكبرى.",
      prizesText3: "الجوائز غير قابلة للاستبدال أو التحويل لطرف آخر.",

      winnersAnnouncement: "الإعلان عن الفائزين:",
      winnersText1:
        "سيتم الإعلان عن الفائزين عبر صفحات التواصل الاجتماعي الرسمية لشركة ف. أ. كتانة.",
      winnersText2:
        "سيتم التواصل مع الفائزين عبر الرقم المز ّود في النموذج خلال 7 أيام من السحب.",
      winnersText3:
        "في حال تع ّذر الوصول إلى الفائز خلال فترة 7 أيام، يتم اختيار فائز بديل.",

      generalTerms: "أحكام عامة:",
      generalText1:
        "تحتفظ الشركة بحق استبعاد أي مشاركة تشتبه في أنها غير قانونية أو غير مطابقة للشروط.",
      generalText2:
        "المشاركة في الحملة ُتعتبر موافقة صريحة على الشروط والأحكام المذكورة أعلاه.",
      generalText3:
        "ضاعف فرصك! كن من أوائل المشترين في بداية الحملة، وفرصتك للربح راح تستمر في جميع سحوبات الأشهر.",
    },
  };

  const data = content[locale as keyof typeof content] || content.ar;

  // Define sections data with responsive considerations
  const sections = [
    {
      title: data.campaignDuration,
      items: [data.campaignDates],
      startDelay: 1,
    },
    {
      title: data.participationMechanism,
      items: [
        data.participationText1,
        data.participationText2,
        data.participationText3,
      ],
      startDelay: 2,
    },
    {
      title: data.eligibility,
      items: [data.eligibilityText1, data.eligibilityText2],
      startDelay: 6,
    },
    {
      title: data.prizes,
      items: [data.prizesText1, data.prizesText2, data.prizesText3],
      startDelay: 9,
      titleHighlight: true,
    },
    {
      title: data.winnersAnnouncement,
      items: [data.winnersText1, data.winnersText2, data.winnersText3],
      startDelay: 13,
    },
    {
      title: data.generalTerms,
      items: [data.generalText1, data.generalText2, data.generalText3],
      startDelay: 17,
    },
  ];

  return (
    <div
      className="relative bg-gradient-to-r from-[#408ABD] to-[#00529B] 
        px-4 py-6 
        sm:px-6 sm:py-8 
        md:px-8 md:py-12 
        lg:px-16 lg:py-16 
        xl:px-5 xl:py-[30px]
        2xl:px-24 2xl:py-28"
      dir={"rtl"}
    >
      <FloatingElements isMobile={isMobile} />
      <GoldCoin isMobile={isMobile} />

      {/* Responsive Container */}
      <div
        className="container 
        max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 
        mx-auto lg:mr-10 relative z-10"
      >
        {/* Responsive Content Spacing */}
        <div
          className="text-white 
          space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10"
        >
          {sections.map((section, index) => (
            <TermsSubSection
              key={index}
              title={section.title}
              items={section.items}
              startDelay={section.startDelay}
              titleHighlight={section.titleHighlight}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* Performance optimization for mobile */}
      <style jsx>{`
        @media (max-width: 640px) {
          .animate-floating-gentle {
            animation-duration: 6s;
          }
          .animate-float-and-glow {
            animation-duration: 4s;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsSection;
