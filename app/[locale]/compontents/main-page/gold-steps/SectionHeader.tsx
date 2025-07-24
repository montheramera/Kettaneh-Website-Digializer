interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  containerClassName,
}) => {
  // Use clamp for fluid, responsive font size
  const responsiveFont = "text-center text-[#2F3140] font-bold";
  return (
    <div
      className={`animate-fade-in-up opacity-0 my-2 sm:my-6 md:my-8 lg:my-12 ${
        containerClassName || "" 
      }`}
      style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
    >
      <h3
        className={`transform transition-all duration-700 ease-out animate-slide-down opacity-0 ${responsiveFont} ${
          titleClassName || ""
        }`}
        style={{
          animationDelay: "400ms",
          animationFillMode: "forwards",
          fontSize: "clamp(1.5rem, 4vw, 2.75rem)", // 24px to 44px
          lineHeight: 1.5,
        }}
      >
        {title}
      </h3>
      {subtitle && (
        <h3
          className={`transform transition-all duration-700 ease-out animate-slide-down opacity-0 ${responsiveFont} ${
            titleClassName || ""
          }`}
          style={{
            animationDelay: "400ms",
            animationFillMode: "forwards",
            fontSize: "clamp(1.5rem, 4vw, 2.75rem)", // 24px to 44px
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;
