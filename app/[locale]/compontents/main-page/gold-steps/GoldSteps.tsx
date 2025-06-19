import StepsSection from "./StepsSection";
import TimelineSection from "./TimelineSection";
import SectionHeader from "./SectionHeader";
import { stepsData } from "./config/stepsData";
import { Locale } from "./types";

interface GoldStepsProps {
  locale?: Locale;
}

const GoldSteps: React.FC<GoldStepsProps> = ({ locale = "ar" }) => {
  const locales = "ar";
  const isRTL = locales === "ar";
  const content = stepsData[locales] || stepsData.ar;

  return (
    <div
      className="relative bg-white py-8 md:py-12 bg-cover bg-center bg-no-repeat"
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        backgroundImage: "url('/images/gold/goldSteps-bg.png')",
        backgroundSize: "fill",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <SectionHeader
          title={content.title}
          subtitle={content.subtitle}
          titleClassName="text-3xl md:text-4xl font-bold text-gray-800 text-center"
          subtitleClassName="text-xl text-gray-600 text-center mt-4"
          containerClassName="text-center mb-12"
        />

        {/* Steps Section */}
        <StepsSection
          stepsTitle={content.stepsTitle}
          steps={content.steps}
          isRTL={isRTL}
          gridCols="2"
          className="mt-12"
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
