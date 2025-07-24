import StepsSection from "./StepsSection";
import TimelineSection from "./TimelineSection";
import SectionHeader from "./SectionHeader";
import { stepsData } from "./config/stepsData";
import { Locale } from "./types";
import GoldOffersSection from "./GoldOffersSection";

interface GoldStepsProps {
  locale?: Locale;
}

const GoldSteps: React.FC<GoldStepsProps> = ({ locale = "ar" }) => {
  const locales = "ar";
  const isRTL = locales === "ar";
  const content = stepsData[locales] || stepsData.ar;

  return (
    <div
      className="relative bg-white py-8 md:py-12 bg-cover bg-center bg-no-repeat font-janna"
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        backgroundImage: "url('/images/gold/goldSteps-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="py-1 sm:py-2" />

        <SectionHeader title={content.title} subtitle={content.subtitle} />
        <div className="py-1 sm:py-2" />
        {/* Gold Offers Section */}
        <GoldOffersSection locale={locale} />

        {/* gold steps steps */}
        <StepsSection
          stepsTitle={content.stepsTitle}
          steps={content.steps}
          isRTL={isRTL}
          titleClassName="text-[#418BBE] mb-2"
        />
        {/* Timeline Section */}
        <TimelineSection
          timelineTitle={content.timelineTitle}
          timeline={content.timeline}
          isRTL={isRTL}
        />
      </div>
    </div>
  );
};

export default GoldSteps;
