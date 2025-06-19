import Image from "next/image";

interface TermsSectionProps {
  locale?: string;
}

interface TermsItemProps {
  text: string;
  delay: string;
}

interface TermsSubSectionProps {
  title: string;
  items: string[];
  startDelay: number;
  titleHighlight?: boolean;
}

interface FloatingElementsProps {}

interface GoldCoinProps {}

// Individual Terms Item Component
const TermsItem: React.FC<TermsItemProps> = ({ text, delay }) => (
  <li
    className="flex items-start animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <span className="text-yellow-300 ml-2 animate-pulse-dot">•</span>
    <span>{text}</span>
  </li>
);

// Terms Sub-Section Component
const TermsSubSection: React.FC<TermsSubSectionProps> = ({
  title,
  items,
  startDelay,
  titleHighlight = false,
}) => (
  <div
    className="animate-slide-in-right"
    style={{ animationDelay: `${startDelay * 0.2}s` }}
  >
    <h3 className="text-lg font-bold mb-3">
      <span
        className={`bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent bg-[length:200%] animate-pulse ${
          titleHighlight ? "text-yellow-300" : ""
        }`}
      >
        {title}
      </span>
    </h3>
    {items.length === 1 ? (
      <p className="text-base leading-relaxed">{items[0]}</p>
    ) : (
      <ul className="space-y-3 text-base leading-relaxed">
        {items.map((item, index) => (
          <TermsItem
            key={index}
            text={item}
            delay={`${(startDelay + index + 1) * 0.2}s`}
          />
        ))}
      </ul>
    )}
  </div>
);

// Floating Background Elements Component
const FloatingElements: React.FC<FloatingElementsProps> = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-64 h-64 bg-white/5 rounded-full -top-32 -right-16 animate-floating-gentle"></div>
    <div
      className="absolute w-80 h-80 bg-white/5 rounded-full -bottom-40 -left-20 animate-floating-gentle"
      style={{ animationDelay: "2s" }}
    ></div>
  </div>
);

// Gold Coin Component
const GoldCoin: React.FC<GoldCoinProps> = () => (
  <div className="absolute -top-10 left-[15%] translate-x-1/2 translate-y-1/2 animate-float-and-glow z-20">
    <div className="relative w-48 h-48 group">
      <Image
        src="/images/gold/mideaCoin.png"
        alt="Midea Gold Coin"
        fill
        className="object-contain transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl animate-pulse-glow"></div>
    </div>
  </div>
);

const TermsSection: React.FC<TermsSectionProps> = ({ locale = "ar" }) => {
  const isRTL = locale === "ar";

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

  // Define sections data for easier management
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
      className="relative bg-gradient-to-r from-[#408ABD] to-[#00529B] px-5 py-[30px] lg:px-20 lg:py-[97px]"
      dir={"rtl"}
    >
      <FloatingElements />
      <GoldCoin />

      <div className="container max-w-4xl relative z-10">
        <div className="text-white space-y-8">
          {sections.map((section, index) => (
            <TermsSubSection
              key={index}
              title={section.title}
              items={section.items}
              startDelay={section.startDelay}
              titleHighlight={section.titleHighlight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
