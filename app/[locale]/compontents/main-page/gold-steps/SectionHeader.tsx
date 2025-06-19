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
  titleClassName = "text-2xl md:text-3xl font-bold text-center text-cyan-500",
  subtitleClassName = "text-lg text-gray-600 text-center mt-2",
  containerClassName = "mb-12",
}) => {
  return (
    <div
      className={`${containerClassName} animate-fade-in-up opacity-0`}
      style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
    >
      <h3
        className={`${titleClassName} transform transition-all duration-700 ease-out animate-slide-down opacity-0`}
        style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          className={`${subtitleClassName} transform transition-all duration-700 ease-out animate-slide-up opacity-0`}
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
