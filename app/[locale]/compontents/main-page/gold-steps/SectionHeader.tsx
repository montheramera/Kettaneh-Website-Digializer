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
}) => {
  const ClassName =
    "text-[32px] sm:text-[44px] md:text-[56px] lg:text-[75px] text-center text-[#2F3140]";
  return (
    <div
      className={`animate-fade-in-up opacity-0 mt-[40px] sm:mt-[80px] md:mt-[120px] lg:mt-[151px]`}
      style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
    >
      <h3
        className={` ${ClassName}  ${titleClassName} transform transition-all duration-700 ease-out animate-slide-down opacity-0`}
        style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
      >
        {title}
      </h3>
      {subtitle && (
        <h3
          className={` ${ClassName} ${titleClassName} transform transition-all duration-700 ease-out animate-slide-down opacity-0`}
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default SectionHeader;
